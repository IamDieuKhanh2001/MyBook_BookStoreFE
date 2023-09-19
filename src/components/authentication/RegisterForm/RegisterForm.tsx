'use client'
import React, { useState } from 'react'
import styles from './RegisterForm.module.scss'

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <>
            <div className={styles.loginFormContainer}>
                <div className={styles.inputBox}>
                    <label>Email</label>
                    <div className={styles.inputGroup}>
                        <input type="text" className={styles.textBox} placeholder='Nhập Email' />
                    </div>
                </div>
                <div className={styles.inputBox}>
                    <label>Mật khẩu</label>
                    <div className={styles.inputGroup}>
                        <input
                            type={showPassword === false ? 'password' : 'text'}
                            className={styles.textBox}
                            placeholder='Nhập Mật khẩu'
                        />
                        <span className={styles.textBoxShowText} onClick={handleShowPassword}>
                            {showPassword === false ? 'Hiện' : 'Ẩn'}
                        </span>
                    </div>
                </div>
                <div className={styles.inputBox}>
                    <label>Nhập lại mật khẩu</label>
                    <div className={styles.inputGroup}>
                        <input
                            type={showPassword === false ? 'password' : 'text'}
                            className={styles.textBox}
                            placeholder='Nhập lại Mật khẩu'
                        />
                        <span className={styles.textBoxShowText} onClick={handleShowPassword}>
                            {showPassword === false ? 'Hiện' : 'Ẩn'}
                        </span>
                    </div>
                </div>
                <div className={styles.inputBox}>
                    <div className={styles.btnBox}>
                        <button title="Đăng nhập" className={styles.btnLogin}>
                            <span>Đăng Ký</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterForm
