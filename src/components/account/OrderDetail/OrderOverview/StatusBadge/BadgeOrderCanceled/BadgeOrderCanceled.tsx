'use client'
import React from 'react'
import styles from './BadgeOrderCanceled.module.scss'

const BadgeOrderCanceled = () => {
    return (
        <>
            <div className={styles.orderViewStatus}>
                Đơn hàng Bị hủy
            </div>
        </>
    )
}

export default BadgeOrderCanceled
