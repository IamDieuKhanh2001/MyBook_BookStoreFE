'use client'
import React from 'react'
import styles from './ReviewItem.module.scss'
import EditReviewForm from '../EditReviewForm/EditReviewForm'

interface IReviewItemProps {
    handleDeleteComment: (id: number) => Promise<void>;
}
const ReviewItem = (props: IReviewItemProps) => {
    const { handleDeleteComment } = props
    const [openEditReviewForm, setOpenEditReviewForm] = React.useState(false)
    const handleOpenCloseEdit = () => {
        setOpenEditReviewForm((prev) => (!prev))
    }

    return (
        <>
            <div className={`${styles.media} mb-1`}>
                <img
                    src="/img/avatar/default.png"
                    alt="Image"
                    className="img-fluid mr-3 mt-1 rounded-circle"
                    style={{ width: 45 }}
                />
                <div className={`${styles.mediaBody}`}>
                    <h6>
                        John
                        <small>
                            {" "}
                            - <i>01 Jan 2045</i>
                        </small>
                    </h6>
                    {!openEditReviewForm && (
                        <>
                            <div className="text-primary mb-2">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="far fa-star" />
                            </div>
                            <p>
                                Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam
                                ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod
                                ipsum.
                            </p>
                        </>
                    )}
                    {openEditReviewForm && (<EditReviewForm setOpenEditReviewForm={setOpenEditReviewForm} />)}
                </div>
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
                            onClick={() => handleDeleteComment(1)}
                        >
                            Xóa
                        </button></li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default ReviewItem
