'use client'
import React, { useState, useEffect } from 'react'
import styles from './ForgotPassForm.module.scss'
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from 'next/navigation';
import useAPIAuthentication from '@/lib/hooks/api/useAPIAuthentication';
import { errorHandler } from '@/lib/utils/ErrorHandler';

interface FormValues {
    email: string;
}
interface IForgotPassFormProps {
    setSendMailRecoverySuccess: React.Dispatch<React.SetStateAction<boolean>>
}
const ForgotPassForm = (props: IForgotPassFormProps) => {
    const { setSendMailRecoverySuccess } = props
    const [isLoading, setIsLoading] = useState(false)

    const { SendMailRecoveryPassword } = useAPIAuthentication()

    const initialValues: FormValues = {
        email: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('this is not email address')
            .required("email not be empty"),
    });

    const handleSubmit = async (values: FormValues) => {
        try {
            // Xử lý logic khi form được submit
            toast.warning("Gửi mã khôi phục đến " + values.email)
            setIsLoading(true)
            await SendMailRecoveryPassword(values.email)
            setIsLoading(false)
            setSendMailRecoverySuccess(true)
        } catch (e) {
            errorHandler(e)
            setIsLoading(false)
            setSendMailRecoverySuccess(false)
        }
    };

    return (
        <>
            <div className={styles.ForgotPassFormContainer}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ setFieldValue, isValid, handleChange, errors, touched, isSubmitting }) => (
                        <Form>
                            <div className={styles.inputBox}>
                                <label>Email</label>
                                <div className={styles.inputGroup}>
                                    <Field
                                        id={"emailLogin"}
                                        name={"email"}
                                        type="text"
                                        className={styles.textBox}
                                        placeholder='Nhập Email'
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.email && touched.email && (
                                    <p className={styles.msgFieldError}>
                                        *{errors.email}
                                    </p>
                                )}
                            </div>
                            <div className={styles.inputBox}>
                                <div className={styles.btnBox}>
                                    <button
                                        type='submit'
                                        className={styles.btnSendRecoveryMail}
                                        disabled={isLoading || !isValid}// disabled nếu isLoading = true hoặc isValid = false
                                    >
                                        {isLoading ? (
                                            <span>
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                Loading...
                                            </span>
                                        ) : (
                                            <span>
                                                Gửi mã khôi phục
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default ForgotPassForm
