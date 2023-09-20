'use client'
import React, { useState } from 'react'
import styles from './RegisterForm.module.scss'
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast } from "react-toastify";
import { Typography } from '@mui/material';

interface FormValues {
    email: string;
    password: string;
    retypePassword: string;
}
interface RegisterFormProps {
    setActiveTab: (value: string) => void;
}
const RegisterForm = (props: RegisterFormProps) => {
    const { setActiveTab } = props
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const initialValues: FormValues = {
        email: '',
        password: '',
        retypePassword: '',
    };
    const getCharacterValidationError = (str: string) => {
        return `Your password must have at least 1 ${str} character`;
    };
    const validationSchema = Yup.object({
        email: Yup.string()
            .required("email not be empty"),
        password: Yup.string()
            .required("Password not be empty")
            .min(5, "Password must have at least 5 characters")
            // different error messages for different requirements
            .matches(/[0-9]/, getCharacterValidationError("digit"))
            .matches(/[a-z]/, getCharacterValidationError("lowercase"))
            .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
        retypePassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords does not match")
            .required("Retype password not be empty"),
    });

    const handleSubmit = async (values: FormValues) => {
        try {
            // Xử lý logic khi form được submit
            console.log(values)
            toast.warning("Register with " + values.email + " " + values.password)
            setIsLoading(true)
            setTimeout(() => {
                toast.success("Đăng ký hoàn tất, vui lòng đăng nhập " + values.email)
                // Đoạn mã bạn muốn thực thi sau 5 giây
                setIsLoading(false)
                setActiveTab('login')
            }, 5000); // 5000 milliseconds = 5 giây
        } catch (e) {
            console.log(e)
            setIsLoading(false)
            toast.error("Can not Register with " + values.email)
        }
    };

    return (
        <>
            <div className={styles.loginFormContainer}>
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
                                        id={"email"}
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
                                <label>Mật khẩu</label>
                                <div className={styles.inputGroup}>
                                    <Field
                                        id={"password"}
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
                                        id={"retypePassword"}
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
                                        className={styles.btnRegister}
                                        disabled={isLoading || !isValid}// disabled nếu isLoading = true hoặc isValid = false
                                    >
                                        {isLoading ? (
                                            <span>
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                Loading...
                                            </span>
                                        ) : (
                                            <span>
                                                Đăng Ký
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

export default RegisterForm
