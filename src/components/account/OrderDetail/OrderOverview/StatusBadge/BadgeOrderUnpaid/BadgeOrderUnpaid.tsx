'use client'
import React from 'react'
import styles from './BadgeOrderUnpaid.module.scss'

const BadgeOrderUnpaid = () => {
    return (
        <>
            <div className={styles.orderViewStatus}>
                Đơn hàng chưa thanh toán
            </div>
        </>
    )
}

export default BadgeOrderUnpaid
