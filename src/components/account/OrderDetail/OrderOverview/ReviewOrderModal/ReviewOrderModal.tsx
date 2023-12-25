'use client'
import React, { useState } from 'react'
import styles from './ReviewOrderModal.module.scss'
import ReviewForm from './ReviewForm/ReviewForm';

interface IReviewOrderModalProps {
    orderId: number;
}
const ReviewOrderModal = (props: IReviewOrderModalProps) => {
    const [showModal, setShowModal] = useState(false);
    const { orderId } = props

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleHideModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <button
                style={{ marginBottom: '10px' }}
                className={styles.reviewOrderBtn}
                onClick={handleShowModal}
            >
                Đánh giá đơn hàng
            </button>
            {/* Modal */}
            {showModal && (
                <div className="modal d-block" tabIndex={-1} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Đánh giá đơn hàng</h5>
                                <button type="button" className="btn-close" onClick={handleHideModal} />
                            </div>
                            <div className="modal-body">
                                <ReviewForm
                                    handleHideModal={handleHideModal}
                                    orderId={orderId}
                                />
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

export default ReviewOrderModal
