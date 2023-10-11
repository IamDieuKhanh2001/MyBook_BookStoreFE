'use client'
import React from 'react'
import styles from './PasswordFormEdit.module.scss'
import { Field, Form, Formik } from 'formik';

interface FormChangePasswordValues {
    currentPassword: string;
    newPassword: string;
    retypePassword: string;
}
interface IProps {
    initialChangePasswordValues: FormChangePasswordValues,
    validationChangePasswordSchema: any,
    handleChangePasswordSubmit: (values: FormChangePasswordValues) => Promise<void>
}
const PasswordFormEdit = ({ initialChangePasswordValues, validationChangePasswordSchema, handleChangePasswordSubmit, }: IProps) => {


    return (
        <>
            <Formik
                initialValues={initialChangePasswordValues}
                validationSchema={validationChangePasswordSchema}
                onSubmit={handleChangePasswordSubmit}
            >
                {({ setFieldValue, handleChange, errors, touched, isSubmitting, values }) => (
                    <Form>
                        <div className={styles.inputBox}>
                            <label htmlFor='currentPass'>Mật khẩu hiện tại</label>
                            <div className={styles.inputItem}>
                                <div className={styles.inputGroup}>
                                    <Field
                                        type="password"
                                        className={styles.textBox}
                                        placeholder='Nhập MK hiện tại'
                                        id='currentPassword'
                                        name='currentPassword'
                                    />
                                    <span className={styles.textBoxAlert}></span>
                                </div>
                                {errors.currentPassword && touched.currentPassword && (
                                    <div className={styles.inputAlert}>
                                        {errors.currentPassword}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.inputBox}>
                            <label htmlFor='newPass'>Mật khẩu mới</label>
                            <div className={styles.inputItem}>
                                <div className={styles.inputGroup}>
                                    <Field
                                        type="password"
                                        className={styles.textBox}
                                        placeholder='Nhập MK mới'
                                        id='newPassword'
                                        name="newPassword"
                                    />
                                    <span className={styles.textBoxAlert}></span>
                                </div>
                                {errors.newPassword && touched.newPassword && (
                                    <div className={styles.inputAlert}>
                                        {errors.newPassword}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.inputBox}>
                            <label htmlFor='newRetypePass'>Nhập lại mật khẩu mới</label>
                            <div className={styles.inputItem}>
                                <div className={styles.inputGroup}>
                                    <Field
                                        type="password"
                                        className={styles.textBox}
                                        placeholder='Nhập lại MK mới'
                                        id='retypePassword'
                                        name="retypePassword"
                                    />
                                    <span className={styles.textBoxAlert}></span>
                                </div>
                                {errors.retypePassword && touched.retypePassword && (
                                    <div className={styles.inputAlert}>
                                        {errors.retypePassword}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.btnGroup}>
                            <button
                                type="submit"
                                className={styles.btnSave}
                            >
                                Thay đổi mật khẩu
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default PasswordFormEdit
