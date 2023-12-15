'use client'
import React from 'react'
import styles from './BadgeOrderPaid.module.scss'

const BadgeOrderPaid = () => {
    return (
        <>
            <div className={styles.orderViewStatus}>
                Đơn hàng đã nhận thành công
            </div>
        </>
    )
}

export default BadgeOrderPaid