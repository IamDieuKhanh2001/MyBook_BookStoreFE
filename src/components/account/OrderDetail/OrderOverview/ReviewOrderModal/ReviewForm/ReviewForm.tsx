'use client'
import React, { useState } from 'react'
import styles from './ReviewForm.module.scss'
import { Formik, Form, Field, ErrorMessage, } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import useAPIUserOrder from '@/lib/hooks/api/useAPIUserOrder';
import { errorHandler } from '@/lib/utils/ErrorHandler';

interface FormValues {
    reviewComment: string;
}
interface IReviewFormProps {
    handleHideModal: () => void;
    orderId: number;
}
const ReviewForm = (props: IReviewFormProps) => {
    const { handleHideModal, orderId } = props
    const [ratingStar, setRatingStar] = useState(1);
    const { updateOrCreateOrderReview, getOrderDetail } = useAPIUserOrder()
    const { mutate } = getOrderDetail(orderId)

    const handleStarHover = (starValue: number) => {
        // Xử lý khi người dùng hover vào sao
        setRatingStar(starValue); // Gửi giá trị sao đã chọn
    };

    const handleStarClick = (starValue: number) => {
        // Xử lý khi người dùng nhấp vào sao
        setRatingStar(starValue); // Lưu số sao mà người dùng đã chọn
    };

    const initialValues: FormValues = {
        reviewComment: '',
    };

    const validationSchema = Yup.object().shape({
        reviewComment: Yup.string()
    });

    const handleSubmit = async (values: FormValues) => {
        try {
            const { reviewComment } = values
            await updateOrCreateOrderReview(orderId, ratingStar, reviewComment)
            mutate()
            toast.success("Gửi đánh giá thành công!!")
            handleHideModal()
        }
        catch (e) {
            errorHandler(e)
        }
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, setFieldValue, isValid, handleChange, errors, touched, isSubmitting }) => (
                    <Form>
                        <div className="d-flex mb-3">
                            <p className="mb-0 me-2">Số sao đánh giá:</p>
                            <div className="text-primary">
                                {[1, 2, 3, 4, 5].map((starValue) => (
                                    <i
                                        key={starValue}
                                        onMouseEnter={() => handleStarHover(starValue)}
                                        onMouseLeave={() => handleStarHover(ratingStar)}
                                        onClick={() => handleStarClick(starValue)}
                                        className={`fa-star ${starValue <= ratingStar ? 'fas' : 'far'}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="form-floating">
                            <Field
                                as={'textarea'}
                                className="form-control"
                                placeholder="Leave a comment here"
                                id="reviewComment"
                                value={values.reviewComment}
                                style={{ height: 200 }}
                            />
                            <label htmlFor="noteTextArea">Ghi chú</label>
                        </div>
                        <ErrorMessage name="reviewComment" component="p" className="text-danger" />
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleHideModal}
                            >
                                Đóng
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Lưu
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default ReviewForm
