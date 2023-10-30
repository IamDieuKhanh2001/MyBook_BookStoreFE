'use client'
import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik';
import styles from './InfoFormEdit.module.scss'
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import useAPIUserProfile from '@/lib/hooks/api/useAPIUserProfile';
import { useSession } from 'next-auth/react';

interface FormEditInfoValues {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    gender: string;
    // birthDate: string;
}
const InfoFormEdit = () => {
    const { data: session, update } = useSession();
    const { updateUserProfile } = useAPIUserProfile()
    const [isLoading, setIsLoading] = useState(false)

    const initValue: FormEditInfoValues = {
        firstName: session?.user.userInfo.profile?.firstname || '',
        lastName: session?.user.userInfo.profile?.lastname || '',
        phone: session?.user.userInfo.profile?.phone_number || '',
        email: session?.user.userInfo?.email || '',
        // gender: 'male',
        gender: session?.user.userInfo.profile?.gender || 'male',
    };

    const validationInfoSchema = Yup.object({
        firstName: Yup.string()
            .max(50, "First name must be <= 50 characters")
            .required("First name not be empty"),
        lastName: Yup.string()
            .max(50, "Last name must be <= 50 characters")
            .required("Last name not be empty"),
        phone: Yup.string()
            .max(11, "*Phone must be >= 11 number")
            .matches(/^[0-9]+$/, '*Allow number only')
            .required("Please enter your phone"),
        // birthDate: Yup.string()
        //     .required("Choose your birth date"),
    });

    const handleEditInfoSubmit = async (values: FormEditInfoValues) => {
        try {
            const { firstName, lastName, gender, phone } = values
            setIsLoading(true)
            const res = await updateUserProfile(firstName, lastName, phone, gender)
            const newProfile = res.data.updated_profile
            await update({
                ...session,
                user: {
                    ...session?.user,
                    userInfo: {
                        ...session?.user?.userInfo,
                        profile: newProfile
                    }
                }
            });
            setIsLoading(false)
            toast.success("Sửa thông tin thành công ")
        }
        catch (e) {
            setIsLoading(false)
            toast.error("Có lỗi xảy ra, vui lòng thử lại")
        }
    };

    return (
        <>
            <Formik
                enableReinitialize={true}
                initialValues={initValue}
                validationSchema={validationInfoSchema}
                onSubmit={handleEditInfoSubmit}
            >
                {({ isValid, setFieldValue, handleChange, errors, touched, isSubmitting, values }) => (
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
                                        placeholder='Chưa cung cấp họ'
                                        value={values.firstName}
                                        onChange={handleChange}
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
                                        placeholder='Chưa cung cấp Tên'
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
                                        placeholder='Chưa cung cấp số điện thoại'
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
                                            onChange={() => {
                                                setFieldValue("gender", 'male');
                                            }}
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
                                            onChange={() => {
                                                setFieldValue("gender", 'female');
                                            }}
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
                        {/* <div className={styles.inputBox}>
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
                        </div> */}
                        <div className={styles.btnGroup}>
                            <button
                                type="submit"
                                disabled={isLoading || !isValid}
                                className={styles.btnSave}
                            >
                                {isLoading && (
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                )}
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
