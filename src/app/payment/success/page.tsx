'use client'
import React from 'react'
import styles from './page.module.scss'
import { useRouter } from 'next/navigation'

const PaymentSuccessPage = () => {
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
                            <span className="fw-bold fs-1">Hoàn tất thanh toán</span>
                            <small className="mt-2 fs-5">Cảm ơn bạn đã sử dụng dịch vụ</small>
                        </div>
                        <button
                            className="btn btn-success btn-block"
                            onClick={() => router.push('/account/order/history')}
                        >
                            xem danh sách order
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentSuccessPage
