'use client'
import React from 'react'
import styles from './VoucherEmpty.module.scss'

const VoucherEmpty = () => {
    return (
        <div className={styles.voucherEmpty}>
            <img src="/img/voucher/ico_couponemty.svg" alt="empty voucher icon" />
            <div>
                Không có khuyến mãi nào
            </div>
        </div>
    )
}

export default VoucherEmpty
