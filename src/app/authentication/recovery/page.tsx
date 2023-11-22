import React from 'react'
import styles from './page.module.scss'
import RecoveryPassForm from '@/components/authentication/RecoveryPassForm/RecoveryPassForm'

//This page link will be inside mail recovery send to client
const RecoveryPasswordPage = () => {
    return (
        <>
            <div className='container section-container'>
                <div className={styles.recoveryPasswordForm}>
                    <div className={styles.recoveryPasswordFormContent}>
                        <div className={styles.recoveryPasswordWindow}>
                            <div className={styles.formTitle}>
                                Thay đổi mật khẩu mới
                            </div>
                            <div
                                className={`${styles.recoveryPasswordContent}`}
                            >
                                <RecoveryPassForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecoveryPasswordPage
