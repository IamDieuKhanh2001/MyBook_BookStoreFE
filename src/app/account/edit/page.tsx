'use client'
import React, { useState, useRef } from 'react'
import styles from './page.module.scss'
import { Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import InfoFormEdit from '@/components/account/Edit/InfoFormEdit/InfoFormEdit';
import PasswordFormEdit from '@/components/account/Edit/PasswordFormEdit/PasswordFormEdit';

interface FormEditInfoValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  gender: string;
  birthDate: string;
}
interface FormChangePasswordValues {
  currentPassword: string;
  newPassword: string;
  retypePassword: string;
}
const EditInfoAccountPage = () => {
  const [openChangePassword, setOpenChangePassword] = useState(false)

  const formInfoRef = useRef<any>();
  const formChangePasswordRef = useRef<any>();
  const [isFormInfoValid, setIsFormInfoValid] = useState(false);
  const [isFormChangePasswordValid, setIsFormChangePasswordValid] = useState(false);

  const initialInfoValues: FormEditInfoValues = {
    firstName: "",
    lastName: '',
    phone: '',
    email: '',
    gender: 'male',
    birthDate: '',
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
    birthDate: Yup.string()
      .required("Choose your birth date"),
  });

  const handleEditInfoSubmit = async (values: FormEditInfoValues) => {
    try {
      console.log(values)
      toast.success("Sửa thông tin thành công ")
    }
    catch (e) {
      toast.error("Something when wrong, please try again")
    }
  };

  const initialChangePasswordValues: FormChangePasswordValues = {
    currentPassword: '',
    newPassword: '',
    retypePassword: '',
  };
  const getCharacterValidationError = (str: string) => {
    return `Your password must have at least 1 ${str} character`;
  };
  const validationChangePasswordSchema = Yup.object({
    currentPassword: Yup.string()
      .required("current password not be empty"),
    newPassword: Yup.string()
      .required("new password not be empty")
      .matches(/[0-9]/, getCharacterValidationError("digit"))
      .matches(/[a-z]/, getCharacterValidationError("lowercase"))
      .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
      .min(5, "Password must have at least 5 characters"),
    // different error messages for different requirements
    retypePassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Passwords does not match")
      .required("Retype password not be empty"),
  });

  const handleChangePasswordSubmit = async (values: FormChangePasswordValues) => {
    try {
      console.log(values)
      toast.success("Sửa mật khẩu thành công ")
    }
    catch (e) {
      toast.error("Something when wrong, please try again")
    }
  };

  return (
    <>
      <div className="card mb-4">
        <div className={styles.myAccount}>
          <div className={styles.pageTitle}>
            <h1>Thông tin tài khoản</h1>
          </div>
          <div className={styles.formAccountInfo}>
            <InfoFormEdit
              initialInfoValues={initialInfoValues}
              validationInfoSchema={validationInfoSchema}
              handleEditInfoSubmit={handleEditInfoSubmit}
            />
            <div className={styles.inputBox}>
              <label htmlFor='changePassCheckBox'></label>
              <div className={styles.inputItem}>
                <div className={styles.inputGroup}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked={false}
                      onChange={() => {
                        setOpenChangePassword(!openChangePassword)
                      }}
                    />
                    <label className="form-check-label" htmlFor="openChangePass">
                      Đổi mật khẩu
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {!openChangePassword ? (
              <></>
            ) : (
              <>
                <PasswordFormEdit
                  initialChangePasswordValues={initialChangePasswordValues}
                  validationChangePasswordSchema={validationChangePasswordSchema}
                  handleChangePasswordSubmit={handleChangePasswordSubmit}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default EditInfoAccountPage
