'use client'
import React, { useState } from 'react'
import styles from './page.module.scss'
import EditEmailModal from '@/components/account/Edit/EditEmailModal/EditEmailModal'

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
            <div className={styles.inputBox}>
              <label htmlFor='firstName'>Họ*</label>
              <div className={styles.inputItem}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    className={styles.textBox}
                    placeholder='Nhập họ'
                    id='firstName'
                  />
                  <span className={styles.textBoxAlert}></span>
                </div>
                <div className={styles.inputAlert}>
                  Thông tin này không thể để trống
                </div>
              </div>
            </div>
            <div className={styles.inputBox}>
              <label htmlFor='lastName'>Tên*</label>
              <div className={styles.inputItem}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    className={styles.textBox}
                    placeholder='Nhập Tên'
                    id='lastName'
                  />
                  <span className={styles.textBoxAlert}></span>
                </div>
                <div className={styles.inputAlert}>
                  Thông tin này không thể để trống
                </div>
              </div>
            </div>
            <div className={styles.inputBox}>
              <label htmlFor='email'>Email</label>
              <div className={styles.inputItem}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    className={styles.textBox}
                    placeholder='Chưa có email'
                    id='email'
                    disabled={true}
                  />
                  <span
                    className={styles.textBoxEmailChange}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Nhấn để thêm
                  </span>
                  <EditEmailModal />
                </div>
                <div className={styles.inputAlert}>
                  Hãy thêm mới Email ngay
                </div>
              </div>
            </div>
            <div className={styles.inputBox}>
              <label htmlFor='firstName'>Giới tính</label>
              <div className={styles.inputItem}>
                <div className={styles.inputGroup}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="radioGenderMale"
                      value={'male'}
                      defaultChecked={true}
                      name='radioGender'
                    />
                    <div className='d-flex justify-content-between'>
                      <label className="form-check-label" htmlFor="radioGenderMale">
                        Nam
                      </label>
                    </div>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="radioGenderFeMale"
                      value={'female'}
                      defaultChecked={false}
                      name='radioGender'
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
              <label htmlFor='changePassCheckBox'></label>
              <div className={styles.inputItem}>
                <div className={styles.inputGroup}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked={false}
                      id="flexCheckDefault"
                      onChange={() => {
                        setOpenChangePassword(!openChangePassword)
                      }}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
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
                <div className={styles.inputBox}>
                  <label htmlFor='currentPass'>Mật khẩu hiện tại</label>
                  <div className={styles.inputItem}>
                    <div className={styles.inputGroup}>
                      <input
                        type="password"
                        className={styles.textBox}
                        placeholder='Nhập MK hiện tại'
                        id='currentPass'
                      />
                      <span className={styles.textBoxAlert}></span>
                    </div>
                    <div className={styles.inputAlert}>
                      Thông tin này không thể để trống
                    </div>
                  </div>
                </div>
                <div className={styles.inputBox}>
                  <label htmlFor='newPass'>Mật khẩu mới</label>
                  <div className={styles.inputItem}>
                    <div className={styles.inputGroup}>
                      <input
                        type="password"
                        className={styles.textBox}
                        placeholder='Nhập MK mới'
                        id='newPass'
                      />
                      <span className={styles.textBoxAlert}></span>
                    </div>
                    <div className={styles.inputAlert}>
                      Thông tin này không thể để trống
                    </div>
                  </div>
                </div>
                <div className={styles.inputBox}>
                  <label htmlFor='newRetypePass'>Nhập lại mật khẩu mới</label>
                  <div className={styles.inputItem}>
                    <div className={styles.inputGroup}>
                      <input
                        type="password"
                        className={styles.textBox}
                        placeholder='Nhập lại MK mới'
                        id='newRetypePass'
                      />
                      <span className={styles.textBoxAlert}></span>
                    </div>
                    <div className={styles.inputAlert}>
                      Thông tin này không thể để trống
                    </div>
                  </div>
                </div>
              </>
            )}
            <div className={styles.btnGroup}>
              <button type="button" className={styles.btnSave}>Lưu thay đổi</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditInfoAccountPage
