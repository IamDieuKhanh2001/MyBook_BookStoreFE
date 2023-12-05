'use client'
import React from 'react'
import styles from './EditReviewForm.module.scss'

interface IEditReviewFormProps {
    setOpenEditReviewForm: React.Dispatch<React.SetStateAction<boolean>>
}
const EditReviewForm = (props: IEditReviewFormProps) => {
    const { setOpenEditReviewForm } = props

    const handleCancel = () => {
        setOpenEditReviewForm(false)
    }
    const [rating, setRating] = React.useState(1);

    const handleStarHover = (starValue: number) => {
        // Xử lý khi người dùng hover vào sao
        setRating(starValue); // Gửi giá trị sao đã chọn
    };

    const handleStarClick = (starValue: number) => {
        // Xử lý khi người dùng nhấp vào sao
        setRating(starValue); // Lưu số sao mà người dùng đã chọn
    };

    return (
        <>
            <div className="d-flex my-3">
                <p className="mb-0 me-2">Số sao ({rating}) :</p>
                <div className="text-primary">
                    {[1, 2, 3, 4, 5].map((starValue) => (
                        <i
                            key={starValue}
                            onMouseEnter={() => handleStarHover(starValue)}
                            onMouseLeave={() => handleStarHover(rating)}
                            onClick={() => handleStarClick(starValue)}
                            className={`fa-star ${starValue <= rating ? 'fas' : 'far'}`}
                        />
                    ))}
                </div>
            </div>
            <div className="form-group">
                <textarea
                    id="content"
                    name="content"
                    cols={30}
                    rows={2}
                    placeholder="Ko hay, thiếu tình tiết, ..."
                    className={'form-control'}
                />
            </div>
            <div className="form-group mb-0">
                <button
                    type='submit'
                    disabled={false}
                    className="btn btn-primary px-3 my-3"
                >
                    Sửa bình luận
                </button>
                <button
                    className={`${styles.btnCancel} btn px-3 my-3 ms-1`}
                    onClick={handleCancel}
                >
                    hủy
                </button>
            </div>
        </>
    )
}

export default EditReviewForm
