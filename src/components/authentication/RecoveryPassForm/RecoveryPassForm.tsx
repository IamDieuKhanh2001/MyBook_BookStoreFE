'use client'
import React, { useState, useEffect } from 'react'
import styles from './RecoveryPassForm.module.scss'
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from 'next/navigation';
import useAPIAuthentication from '@/lib/hooks/api/useAPIAuthentication';
import { errorHandler } from '@/lib/utils/ErrorHandler';

interface FormValues {
    password: string;
    retypePassword: string;
}
const RecoveryPassForm = () => {
    const searchParams = useSearchParams();
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    let resetPasswordToken: string = '';
    const { ResetPassword } = useAPIAuthentication()

    if (searchParams && searchParams.has('token')) {
        const token = searchParams.get('token');
        token !== null && (resetPasswordToken = token)
    } else {
        router.push('/404')
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const initialValues: FormValues = {
        password: '',
        retypePassword: '',
    };

    const getCharacterValidationError = (str: string) => {
        return `Your password must have at least 1 ${str} character`;
    };

    const validationSchema = Yup.object({
        password: Yup.string()
            .required("Password not be empty")
            // .matches(/[0-9]/, getCharacterValidationError("digit"))
            // .matches(/[a-z]/, getCharacterValidationError("lowercase"))
            // .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
            .min(5, "Password must have at least 5 characters"),
        // different error messages for different requirements
        retypePassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords does not match")
            .required("Retype password not be empty"),
    });

    const handleSubmit = async (values: FormValues) => {
        try {
            setIsLoading(true)
            await ResetPassword(resetPasswordToken, values.password)
            setIsLoading(false)
            toast.success('Thay đổi mật khẩu thành công, vui lòng đăng nhập!')
            router.push('/authentication/login')
        } catch (e: any) {
            errorHandler(e)
            setIsLoading(false)
        }
    };

    return (
        <>
            <div className={styles.RecoveryPassFormContainer}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ setFieldValue, isValid, handleChange, errors, touched, isSubmitting }) => (
                        <Form>
                            <div className={styles.inputBox}>
                                <label>Mật khẩu</label>
                                <div className={styles.inputGroup}>
                                    <Field
                                        id={"passwordRecovery"}
                                        name={"password"}
                                        type={showPassword === false ? 'password' : 'text'}
                                        className={styles.textBox}
                                        placeholder='Nhập Mật khẩu'
                                        onChange={handleChange}
                                    />
                                    <span className={styles.textBoxShowText} onClick={handleShowPassword}>
                                        {showPassword === false ? 'Hiện' : 'Ẩn'}
                                    </span>
                                </div>
                                {errors.password && touched.password && (
                                    <p className={styles.msgFieldError}>
                                        *{errors.password}
                                    </p>
                                )}
                            </div>
                            <div className={styles.inputBox}>
                                <label>Nhập lại mật khẩu</label>
                                <div className={styles.inputGroup}>
                                    <Field
                                        id={"retypePasswordRecovery"}
                                        name={"retypePassword"}
                                        type={showPassword === false ? 'password' : 'text'}
                                        className={styles.textBox}
                                        placeholder='Nhập lại Mật khẩu'
                                        onChange={handleChange}
                                    />
                                    <span className={styles.textBoxShowText} onClick={handleShowPassword}>
                                        {showPassword === false ? 'Hiện' : 'Ẩn'}
                                    </span>
                                </div>
                                {errors.retypePassword && touched.retypePassword && (
                                    <p className={styles.msgFieldError}>
                                        *{errors.retypePassword}
                                    </p>
                                )}
                            </div>
                            <div className={styles.inputBox}>
                                <div className={styles.btnBox}>
                                    <button
                                        type='submit'
                                        className={styles.btnRecovery}
                                        disabled={isLoading || !isValid}// disabled nếu isLoading = true hoặc isValid = false
                                    >
                                        {isLoading ? (
                                            <span>
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                Loading...
                                            </span>
                                        ) : (
                                            <span>
                                                Thay đổi mật khẩu
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

export default RecoveryPassForm
