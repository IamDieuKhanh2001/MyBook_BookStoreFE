'use client'
import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic';
const AvatarEditor = dynamic(() => import('react-avatar-edit'), {
  ssr: false, // Đảm bảo rằng thư viện không được render trên server-side
});

const ChangeAvatarModal = () => {
    // const [uploadFile, setUploadFile] = useState<File | undefined>(undefined)
    const [showModal, setShowModal] = useState(false);
    const [previewImg, setPreviewImg] = useState(null)

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

    // const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = e.target.files?.[0]
    //     if (file && file.type.substring(0, 5) === 'image') {
    //         setUploadFile(file)
    //     } else {
    //         setUploadFile(undefined)
    //     }
    // }
    // useEffect(() => {
    //     console.log(uploadFile)
    // }, [uploadFile])

    useEffect(() => {
        console.log(previewImg)
    }, [previewImg])

    const handleSubmit = () => {
        console.log(previewImg)
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
                                {/* <input
                                    id="avatar"
                                    name='avatar'
                                    accept="image/*"
                                    type="file"
                                    onChange={handleAvatarChange}
                                /> */}
                                <AvatarEditor
                                    width={300}
                                    height={300}
                                    onCrop={onCrop}
                                    onClose={onClose}
                                />
                                {previewImg && <img width={150} height={150} src={previewImg} />}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleHideModal}>Đóng</button>
                                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Lưu ảnh</button>
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
