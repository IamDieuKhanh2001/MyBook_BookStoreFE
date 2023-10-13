'use client'
import React, { useState, useRef } from 'react'
import styles from './page.module.scss'
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

  return (
    <>
      <div className="card mb-4">
        <div className={styles.myAccount}>
          <div className={styles.pageTitle}>
            <h1>Thông tin tài khoản</h1>
          </div>
          <div className={styles.formAccountInfo}>
            <InfoFormEdit />
            <div className={styles.inputBox}>
              <label htmlFor='changePassCheckBox'></label>
              <div className={styles.inputItem}>
                <div className={styles.inputGroup}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id='checkbox_open_password_form'
                      defaultChecked={false}
                      onChange={() => {
                        setOpenChangePassword(!openChangePassword)
                      }}
                    />
                    <label className="form-check-label" htmlFor="checkbox_open_password_form">
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
                <PasswordFormEdit />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default EditInfoAccountPage
