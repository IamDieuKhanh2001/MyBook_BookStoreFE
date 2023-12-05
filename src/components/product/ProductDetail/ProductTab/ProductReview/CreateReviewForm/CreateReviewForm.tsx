'use client'
import React, { useState } from 'react'
import styles from './CreateReviewForm.module.scss'
import { errorHandler } from '@/lib/utils/ErrorHandler';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Field, Form, Formik, ErrorMessage, FormikHelpers } from 'formik';
import { KeyedMutator } from 'swr';
import useAPIProductComment from '@/lib/hooks/api/useAPIProductComment';

interface FormValues {
    content: string;
}
interface ICreateReviewFormProps {
    isbnCode: string
    mutate: KeyedMutator<any[]>
}
const CreateReviewForm = (props: ICreateReviewFormProps) => {
    const { isbnCode, mutate } = props
    const [rating, setRating] = useState(1);
    const { createNewComment } = useAPIProductComment()

    const handleStarHover = (starValue: number) => {
        // Xử lý khi người dùng hover vào sao
        setRating(starValue); // Gửi giá trị sao đã chọn
    };

    const handleStarClick = (starValue: number) => {
        // Xử lý khi người dùng nhấp vào sao
        setRating(starValue); // Lưu số sao mà người dùng đã chọn
    };

    //Formik init
    const initialValues: FormValues = {
        content: ''
    };

    const validationSchema = Yup.object({
        content: Yup.string()
            .required("*Bình luận không được để trống"),
    });

    const handleSubmit = async (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => {
        try {
            await createNewComment(isbnCode, rating, values.content)
            mutate()
            formikHelpers.resetForm()
            toast.success("Gửi bình luận thành công")
        }
        catch (e) {
            errorHandler(e)
        }
    };

    return (
        <div className="col-12 col-lg-6">
            <h4 className="my-3">Bình luận về nội dung</h4>
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
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, setFieldValue, handleChange, isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="content">Bình luận khi đã đọc sách*</label>
                            <Field
                                as="textarea"
                                id="content"
                                name="content"
                                cols={30}
                                rows={5}
                                placeholder="Ko hay, thiếu tình tiết, ..."
                                className={'form-control'}
                                value={values.content}
                            />
                            <ErrorMessage name="content" component="p" className='text-danger mb-0' />
                        </div>
                        <div className="form-group mb-0">
                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className="btn btn-primary px-3 my-3"
                            >
                                Gửi bình luận
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CreateReviewForm
