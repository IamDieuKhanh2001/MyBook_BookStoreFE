'use client'
import React from 'react'
import styles from './page.module.scss'
import { useRouter } from 'next/navigation'

const PaymentFailPage = () => {
    const router = useRouter()

    return (
        <>
            <div className='row'>
                <div className="col-12 p-5">
                    <div className="text-center">
                        <div className="d-flex justify-content-center mb-5 flex-column align-items-center">
                            <span className={styles.checkSuccess}>
                                <i className="fas fa-times"></i>
                            </span>
                            <span className="fw-bold fs-1">Có lỗi xảy ra khi thanh toán</span>
                            <small className="mt-2 fs-5">Vui lòng thử lại</small>
                        </div>
                        <button
                            className="btn btn-success btn-block"
                            onClick={() => router.push("/")}
                        >
                            về trang chủ
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentFailPage
