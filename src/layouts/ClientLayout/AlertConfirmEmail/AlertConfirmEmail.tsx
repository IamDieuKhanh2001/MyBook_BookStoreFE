'use client'
import useAPIAuthentication from '@/lib/hooks/api/useAPIAuthentication'
import styles from './AlertConfirmEmail.module.scss'
import React from 'react'
import { useSession } from 'next-auth/react'
import { toast } from 'react-toastify'
import { errorHandler } from '@/lib/utils/ErrorHandler'

interface IAlertConfirmEmailProps {
    emailAddress: string | undefined
}
const AlertConfirmEmail = (props: IAlertConfirmEmailProps) => {
    const { emailAddress } = props
    const { RequestVerifyMail } = useAPIAuthentication()
    const { data: session } = useSession()

    const handleResendEmailVerify = async () => {
        try {
            if (session) {
                const res = await RequestVerifyMail(session?.user.userInfo.email)
                toast.success(`Đã gửi xác thực đến hộp thư ${session?.user.userInfo.email}`)
            } else {
                toast.error("Bạn chưa đăng nhập")
            }
        } catch (e) {
            errorHandler(e)
        }
    }

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
                        onClick={handleResendEmailVerify}
                    >
                        Gửi lại mail xác thực
                    </button>
                </div>
            </div>
        </>
    )
}

export default AlertConfirmEmail
