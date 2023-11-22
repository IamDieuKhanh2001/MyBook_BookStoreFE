'use client'
import React from 'react'
import styles from './page.module.scss'
import ForgotPassForm from '@/components/authentication/ForgotPassForm/ForgotPassForm'
import SendMailSuccessAlert from '@/components/authentication/ForgotPassForm/SendMailSuccessAlert/SendMailSuccessAlert'

const ForgotPasswordPage = () => {
    const [sendMailRecoverySuccess, setSendMailRecoverySuccess] = React.useState<boolean>(false)

    return (
        <>
            <div className='container section-container'>
                <div className={styles.forgotPasswordForm}>
                    {!sendMailRecoverySuccess ? (
                        <div className={styles.forgotPasswordFormContent}>
                            <div className={styles.forgotPasswordWindow}>
                                <div className={styles.formTitle}>
                                    khôi phục mật khẩu
                                </div>
                                <div
                                    className={`${styles.forgotPasswordContent}`}
                                >
                                    <ForgotPassForm
                                        setSendMailRecoverySuccess={setSendMailRecoverySuccess}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <SendMailSuccessAlert />
                    )}
                </div>
            </div>
        </>
    )
}

export default ForgotPasswordPage