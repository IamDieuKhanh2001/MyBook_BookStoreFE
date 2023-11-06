'use client'
import React, { useState } from 'react'
import styles from './ProductReview.module.scss'
import ReviewItem from './ReviewItem/ReviewItem';

const ProductReview = () => {

    const [rating, setRating] = useState(1);

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
            <div className="row">
                <div className="col-12">
                    <h4 className="my-3">1 review for "Dummy Book Tilte"</h4>
                    <ReviewItem />
                    <ReviewItem />
                </div>
                <div className="col-6">
                    <h4 className="my-3">Leave a review</h4>
                    <div className="d-flex my-3">
                        <p className="mb-0 me-2">Your Rating ({rating}) :</p>
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
                    <form>
                        <div className="form-group">
                            <label htmlFor="message">Your Review *</label>
                            <textarea
                                id="message"
                                cols={30}
                                rows={5}
                                className="form-control"
                                defaultValue={""}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Your Name *</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email *</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group mb-0">
                            <input
                                type="submit"
                                defaultValue="Leave Your Review"
                                className="btn btn-primary px-3 my-3"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProductReview
