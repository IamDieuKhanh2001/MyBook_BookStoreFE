'use client'
import React from 'react'
import { Field, Form, Formik } from 'formik';
import styles from './InfoFormEdit.module.scss'
import * as Yup from 'yup';

interface FormEditInfoValues {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    gender: string;
    birthDate: string;
}
interface IProps {
    initialInfoValues: FormEditInfoValues,
    validationInfoSchema: any,
    handleEditInfoSubmit: (values: FormEditInfoValues) => Promise<void>
}

const InfoFormEdit = ({ initialInfoValues, validationInfoSchema, handleEditInfoSubmit, }: IProps) => {

    return (
        <>
            <Formik
                initialValues={initialInfoValues}
                validationSchema={validationInfoSchema}
                onSubmit={handleEditInfoSubmit}
            >
                {({ setFieldValue, handleChange, errors, touched, isSubmitting, values }) => (
                    <Form>
                        <div className={styles.inputBox}>
                            <label htmlFor='firstName'>Họ*</label>
                            <div className={styles.inputItem}>
                                <div className={styles.inputGroup}>
                                    <Field
                                        id='firstName'
                                        name='firstName'
                                        type="text"
                                        className={styles.textBox}
                                        placeholder='Nhập họ'
                                        value={values.firstName}
                                    />
                                    {errors.firstName && touched.firstName && (
                                        <span className={styles.textBoxAlert}></span>
                                    )}
                                </div>
                                {errors.firstName && touched.firstName && (
                                    <div className={styles.inputAlert}>
                                        {errors.firstName}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.inputBox}>
                            <label htmlFor='lastName'>Tên*</label>
                            <div className={styles.inputItem}>
                                <div className={styles.inputGroup}>
                                    <Field
                                        type="text"
                                        className={styles.textBox}
                                        placeholder='Nhập Tên'
                                        id='lastName'
                                        name='lastName'
                                        value={values.lastName}
                                    />
                                    {errors.lastName && touched.lastName && (
                                        <span className={styles.textBoxAlert}></span>
                                    )}
                                </div>
                                {errors.lastName && touched.lastName && (
                                    <div className={styles.inputAlert}>
                                        {errors.lastName}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.inputBox}>
                            <label htmlFor='email'>Email</label>
                            <div className={styles.inputItem}>
                                <div className={styles.inputGroup}>
                                    <Field
                                        type="text"
                                        className={styles.textBox}
                                        placeholder='Chưa có email'
                                        id='email'
                                        value={values.email}
                                        name='email'
                                        disabled={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.inputBox}>
                            <label htmlFor='phone'>SDT</label>
                            <div className={styles.inputItem}>
                                <div className={styles.inputGroup}>
                                    <Field
                                        type="text"
                                        className={styles.textBox}
                                        placeholder='Chưa có số điện thoại'
                                        id='phone'
                                        name='phone'
                                        value={values.phone}
                                    />
                                    {errors.phone && touched.phone && (
                                        <span className={styles.textBoxAlert}></span>
                                    )}
                                </div>
                                {errors.phone && touched.phone && (
                                    <div className={styles.inputAlert}>
                                        {errors.phone}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.inputBox}>
                            <label htmlFor='firstName'>Giới tính</label>
                            <div className={styles.inputItem}>
                                <div className={styles.inputGroup}>
                                    <div className="form-check">
                                        <Field
                                            className="form-check-input"
                                            type="radio"
                                            id="radioGenderMale"
                                            value={'male'}
                                            name='gender'
                                        />
                                        <div className='d-flex justify-content-between'>
                                            <label className="form-check-label" htmlFor="radioGenderMale">
                                                Nam
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-check">
                                        <Field
                                            className="form-check-input"
                                            type="radio"
                                            id="radioGenderFeMale"
                                            value={'female'}
                                            name='gender'
                                        />
                                        <div className='d-flex justify-content-between'>
                                            <label className="form-check-label" htmlFor="radioGenderFeMale">
                                                Nữ
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.inputBox}>
                            <label htmlFor='birthDate'>Ngày sinh</label>
                            <div className={styles.inputItem}>
                                <div className={styles.inputGroup}>
                                    <Field
                                        type="date"
                                        className={styles.textBox}
                                        placeholder='Chưa có email'
                                        id='birthDate'
                                        name='birthDate'
                                        value={values.birthDate}
                                    />
                                </div>
                                {errors.birthDate && touched.birthDate && (
                                    <div className={styles.inputAlert}>
                                        {errors.birthDate}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.btnGroup}>
                            <button
                                type="submit"
                                className={styles.btnSave}
                            >
                                Lưu thông tin thay đổi
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default InfoFormEdit
