'use client'
import styles from './AlertConfirmEmail.module.scss'
import React from 'react'

interface IAlertConfirmEmailProps {
    emailAddress: string | undefined
}
const AlertConfirmEmail = (props: IAlertConfirmEmailProps) => {
    const { emailAddress } = props

    return (
        <>
            <div className={styles.alertConfirmEmailContainer}>
                <img
                    src="https://fedora.teachablecdn.com/assets/icons/exclaim-circle-small-9299cd8883aa4719b5b333a7eef937e51f2a660d4d62944b51a11faaec840570.svg"
                    alt="unconfirmed email alert banner"
                    width={24}
                    height={24}
                />
                <div className={styles.alertMsg}>
                    Vui lòng xác thực mail để sử dụng được tất cả chức năng tài khoản và khả năng bảo mật, kiểm tra hộp thư {emailAddress}
                </div>
                <div className={styles.resendConfirmationContainer}>
                    <button
                        className={styles.resendConfirmationBtn}
                    >
                        Gửi lại mail xác thực
                    </button>
                </div>
            </div>
        </>
    )
}

export default AlertConfirmEmail
