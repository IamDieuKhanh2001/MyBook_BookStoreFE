'use client'
import React from 'react'
import styles from './ReviewItem.module.scss'
import EditReviewForm from '../EditReviewForm/EditReviewForm'
import { KeyedMutator } from 'swr'
import { useSession } from 'next-auth/react'

interface IReviewItemProps {
    data: IProductComment
    handleDeleteComment: (id: number) => Promise<void>;
    mutate: KeyedMutator<any[]>;
}
const ReviewItem = (props: IReviewItemProps) => {
    const { data, handleDeleteComment, mutate } = props
    const [openEditReviewForm, setOpenEditReviewForm] = React.useState(false)
    const { data: session } = useSession()

    const handleOpenCloseEdit = () => {
        setOpenEditReviewForm((prev) => (!prev))
    }

    const onImageError = (e: any) => {
        e.target.src = '/img/avatar/default.png'
    }

    return (
        <>
            <div className={`${styles.media} mb-1`}>
                <img
                    src={data.user.profile?.avatar_source ? data.user.profile?.avatar_source : '/img/avatar/default.png'}
                    alt="Image"
                    className="img-fluid mr-3 mt-1 rounded-circle"
                    style={{ width: 45 }}
                    onError={onImageError}
                />
                <div className={`${styles.mediaBody}`}>
                    <h6>
                        {data.user.email}
                        <small>
                            {" "}
                            - <i>{data.created_at}</i>
                        </small>
                    </h6>
                    {!openEditReviewForm && (
                        <>
                            <div className="text-primary mb-2">
                                {[1, 2, 3, 4, 5].map((starValue) => (
                                    <i
                                        key={starValue}
                                        className={`fa-star ${starValue <= +data.rate_star ? 'fas' : 'far'}`}
                                    />
                                ))}
                            </div>
                            <p>
                                {data.content}
                            </p>
                        </>
                    )}
                    {openEditReviewForm &&
                        (
                            <EditReviewForm
                                prevData={data}
                                setOpenEditReviewForm={setOpenEditReviewForm}
                                mutate={mutate}
                            />
                        )}
                </div>
                {session?.user.userInfo.id === data.user.id && (
                    <div className={`${styles.btnMoreAction}`}>
                        <button type="button" className={`dropdown-toggle ${styles.dropdownToggle}`} data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-ellipsis-v"></i>
                        </button>
                        <ul className="dropdown-menu">
                            <li><button
                                className="dropdown-item"
                                onClick={handleOpenCloseEdit}
                            >
                                {!openEditReviewForm ? 'Sửa' : 'Hủy sửa'}
                            </button></li>
                            <li><button
                                className="dropdown-item"
                                disabled={openEditReviewForm}
                                onClick={() => handleDeleteComment(data.id)}
                            >
                                Xóa
                            </button></li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

export default ReviewItem
