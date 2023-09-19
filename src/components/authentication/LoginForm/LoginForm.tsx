'use client'
import React, { useState } from 'react'
import styles from './LoginForm.module.scss'
import { Alert, AlertTitle, Typography } from '@mui/material'
import { useSearchParams } from 'next/navigation'
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast } from "react-toastify";
import { signIn } from 'next-auth/react'

interface FormValues {
    email: string;
    password: string;
}
const LoginForm = () => {
    const searchParams = useSearchParams();
    const isError = searchParams && searchParams.get('error') === "CredentialsSignin" ? true : false;
    const isSessionExpired = searchParams ? searchParams.get("isSessionExpired") === "true" : false;
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const initialValues: FormValues = {
        email: '',
        password: '',
    };
    const validationSchema = Yup.object({
        email: Yup.string()
            .required("email not be empty"),
        password: Yup.string().required("Password not be empty"),
    });

    const handleSubmit = async (values: FormValues) => {
        try {
            // Xử lý logic khi form được submit
            toast.warning("Login with " + values.email + " " + values.password)
            // const result = await signIn("credentials", {
            //     email: values?.email,
            //     password: values?.password,
            //     redirect: true,
            //     callbackUrl: "/",
            // });
            setIsLoading(true)
            setTimeout(() => {
                toast.success("Xin chào " + values.email)
                // Đoạn mã bạn muốn thực thi sau 5 giây
                setIsLoading(false)
            }, 5000); // 5000 milliseconds = 5 giây
        } catch (e) {
            console.log(e)
            setIsLoading(false)
            toast.error("Can not Login with" + values.email)
        }
    };

    return (
        <div className={styles.loginFormContainer}>
            {isError === true && (
                <Alert severity="error" >
                    <AlertTitle>Login Error!</AlertTitle>
                    Something went wrong — <strong>Please try again!</strong>
                </Alert>
            )}
            {isSessionExpired === true && (
                <Alert severity="warning" >
                    <AlertTitle>Session Has expired!</AlertTitle>
                    Your session not available — <strong>Please login again!</strong>
                </Alert>
            )}
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
                            <div className={styles.forgetPass}>
                                <span>Quên mật khẩu?</span>
                            </div>
                        </div>
                        <div className={styles.inputBox}>
                            <div className={styles.btnBox}>
                                <button
                                    type='submit'
                                    title="Đăng nhập"
                                    className={styles.btnLogin}
                                    disabled={isLoading || !isValid}// disabled nếu isLoading = true hoặc isValid = false
                                >
                                    {isLoading ? (
                                        <span>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            Loading...
                                        </span>
                                    ) : (
                                        <span>
                                            Đăng nhập
                                        </span>
                                    )}
                                </button>
                                <button title="Đăng nhập" className={styles.btnFacebook}>
                                    <span>Đăng nhập với facebook</span>
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginForm
