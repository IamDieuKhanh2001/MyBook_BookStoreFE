'use client'
import React from 'react'
import styles from './EditReviewForm.module.scss'
import { KeyedMutator, mutate } from 'swr';
import * as Yup from 'yup';
import { Field, Form, Formik, ErrorMessage, FormikHelpers } from 'formik';
import { toast } from 'react-toastify';
import { errorHandler } from '@/lib/utils/ErrorHandler';
import useAPIProductComment from '@/lib/hooks/api/useAPIProductComment';

interface FormValues {
    content: string;
}
interface IEditReviewFormProps {
    prevData: IProductComment;
    setOpenEditReviewForm: React.Dispatch<React.SetStateAction<boolean>>
    mutate: KeyedMutator<any[]>
}
const EditReviewForm = (props: IEditReviewFormProps) => {
    const { prevData, setOpenEditReviewForm, mutate } = props
    const { editComment } = useAPIProductComment()

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

    //Formik init
    const initialValues: FormValues = {
        content: prevData.content || ''
    };

    const validationSchema = Yup.object({
        content: Yup.string()
            .required("*Bình luận không được để trống"),
    });

    const handleSubmit = async (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => {
        try {
            await editComment(prevData.id, rating, values.content)
            setOpenEditReviewForm(false)
            mutate()
            toast.success("Sửa bình luận thành công")
        }
        catch (e) {
            errorHandler(e)
        }
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
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, setFieldValue, handleChange, isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="content">Bình luận mới*</label>
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
                                Sửa bình luận
                            </button>
                            <button
                                className={`${styles.btnCancel} btn px-3 my-3 ms-1`}
                                onClick={handleCancel}
                            >
                                hủy
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default EditReviewForm
