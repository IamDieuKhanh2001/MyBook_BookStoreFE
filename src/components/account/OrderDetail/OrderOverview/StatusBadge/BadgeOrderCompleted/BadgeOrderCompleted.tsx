'use client'
import React from 'react'
import styles from './BadgeOrderCompleted.module.scss'

const BadgeOrderCompleted = () => {
    return (
        <>
            <div className={styles.orderViewStatus}>
                Đơn hàng đã nhận thành công
            </div>
        </>
    )
}

export default BadgeOrderCompleted