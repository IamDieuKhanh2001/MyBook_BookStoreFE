'use client'
import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic';
import { toast } from 'react-toastify';
import useAPIUserProfile from '@/lib/hooks/api/useAPIUserProfile';
import { base64StringToBlob } from '@/lib/utils/ImageUtils';
import { useSession } from 'next-auth/react';
const AvatarEditor = dynamic(() => import('react-avatar-edit'), {
    ssr: false, // Đảm bảo rằng thư viện không được render trên server-side
});

const ChangeAvatarModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [previewImg, setPreviewImg] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { uploadProfileAvatar } = useAPIUserProfile()
    const { data: session, update } = useSession();

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleHideModal = () => {
        setPreviewImg(null)
        setShowModal(false);
    };

    const onClose = () => {
        setPreviewImg(null)
    }

    const onCrop = (view: any) => {
        setPreviewImg(view)
    }

    useEffect(() => {
        console.log(previewImg)
        console.log(session)
    }, [previewImg, session])

    const handleSubmit = async () => {
        try {
            setIsLoading(true)
            if (previewImg) {
                const imgBlob = base64StringToBlob(previewImg, 'user_avatar')
                let bodyFormData = new FormData();
                bodyFormData.append(`avatar_image`, imgBlob, 'user_avatar')
                const res = await uploadProfileAvatar(bodyFormData)
                const newProfile = res.data.updated_profile
                await update({
                    ...session,
                    user: {
                        ...session?.user,
                        userInfo: {
                            ...session?.user?.userInfo,
                            profile: newProfile
                        }
                    }
                });
                toast.success("Thêm ảnh đại diện mới thành công!")
            } else {
                toast.error("bạn chưa chọn ảnh!")
            }
            setIsLoading(false)
            handleHideModal()
        } catch (e) {
            console.log(e)
            setIsLoading(false)
            toast.error("Có lỗi xảy ra, vui lòng thử lại sau!")
        }
    }
    return (
        <>
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleShowModal}
            >
                Thay đổi avatar
            </button>
            {/* Modal */}
            {showModal && (
                <div className="modal d-block" tabIndex={-1} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Đổi avatar</h5>
                                <button type="button" className="btn-close" onClick={handleHideModal} />
                            </div>
                            <div className="modal-body d-flex justify-content-center flex-column">
                                <AvatarEditor
                                    width={300}
                                    height={300}
                                    onCrop={onCrop}
                                    onClose={onClose}
                                />
                                {previewImg && <img width={150} height={150} src={previewImg} />}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleHideModal}>
                                    Đóng
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                >
                                    {isLoading && (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    )}
                                    Lưu ảnh
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showModal && (
                <div
                    className="modal-backdrop show"
                ></div>
            )}
        </>
    )
}

export default ChangeAvatarModal
