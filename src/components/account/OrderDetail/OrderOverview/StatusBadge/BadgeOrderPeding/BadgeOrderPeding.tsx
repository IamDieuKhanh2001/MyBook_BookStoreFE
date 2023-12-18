'use client'
import React from 'react'
import styles from './BadgeOrderPending.module.scss'

const BadgeOrderPending = () => {
    return (
        <div className={styles.orderViewStatus}>
            Đơn hàng đang chờ xác nhận
        </div>
    )
}

export default BadgeOrderPending
