'use client'
import React, { useState } from 'react'
import styles from './RegisterForm.module.scss'
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast } from "react-toastify";
import { Alert, AlertTitle } from '@mui/material'
import { APIUserLogin, APIUserRegister } from '@/lib/axios/api/accountAPI';
import { signIn, useSession } from 'next-auth/react';

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
    const [errorList, setErrorList] = useState<IRegisterError[]>([])

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
            // Xử lý logic khi form được submit
            console.log(values)
            toast.warning("Register with " + values.email + " " + values.password)
            setIsLoading(true)
            const resRegister = await APIUserRegister(values.email, values.password, values.retypePassword)
            console.log(resRegister)
            toast.success("Đăng ký hoàn tất, Tự động đăng nhập" + values.email)
            const result = await signIn("credentials", {
                email: values?.email,
                password: values?.password,
                redirect: true,
                callbackUrl: "/",
            });
            // Đoạn mã bạn muốn thực thi sau 5 giây
            setIsLoading(false)
        } catch (e: any) {
            console.log(e)
            setIsLoading(false)
            setErrorList(e.response.data.errors)
            toast.error("Can not Register with " + values.email)
        }
    };

    return (
        <>
            <div className={styles.loginFormContainer}>
                {errorList.map((error, index) => (
                    <Alert key={index} className='mb-1' severity="error" >
                        <AlertTitle>{error.rule}</AlertTitle>
                        {error.message} <strong>Please try again!</strong>
                    </Alert>
                ))}
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
                                        id={"emailRegister"}
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
                                        id={"passwordRegister"}
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
