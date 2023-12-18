'use client'
import React from 'react'
import styles from './SendMailSuccessAlert.module.scss'
import { useRouter } from 'next/navigation'

const SendMailSuccessAlert = () => {
    const router = useRouter()

    return (
        <>
            <div className='row'>
                <div className="col-12 p-5">
                    <div className="text-center">
                        <div className="d-flex justify-content-center mb-5 flex-column align-items-center">
                            <span className={styles.checkSuccess}>
                                <i className="fa fa-check" />
                            </span>
                            <span className="fw-bold fs-1">Đã gửi mail xác thực</span>
                            <small className="mt-2 fs-5">
                                Bạn vui lòng mở hộp thư gmail và làm theo hướng dẫn
                            </small>
                        </div>
                        <button
                            onClick={() => router.push('/')}
                            className="btn btn-success btn-block"
                        >
                            Trở về trang chủ
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SendMailSuccessAlert
