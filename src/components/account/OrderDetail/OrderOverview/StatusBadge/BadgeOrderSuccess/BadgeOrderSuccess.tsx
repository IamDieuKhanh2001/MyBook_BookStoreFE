'use client'
import React from 'react'
import styles from './BadgeOrderSuccess.module.scss'

const BadgeOrderSuccess = () => {
    return (
        <>
            <div className={styles.orderViewStatus}>
                Đơn hàng đã thanh toán
            </div>
        </>
    )
}

export default BadgeOrderSuccess
