'use client'
import React from 'react'
import styles from './BadgeOrderDelivering.module.scss'

const BadgeOrderDelivering = () => {
    return (
        <>
            <div className={styles.orderViewStatus}>
                Đơn hàng đang vận chuyển
            </div>
        </>
    )
}

export default BadgeOrderDelivering
