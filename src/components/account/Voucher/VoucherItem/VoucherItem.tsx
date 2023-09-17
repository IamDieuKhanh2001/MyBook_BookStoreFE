"use client"
import React from 'react'
import styles from './VoucherItem.module.scss'
import Link from 'next/link'

const VoucherItem = () => {
    return (
        <>
            <div className={styles.voucherListItem}>
                <div>
                    <img src="/img/voucher/ico_coupongreen.svg" alt="" />
                </div>
                <div>
                    <div>
                        <div className={styles.voucherDetail} >
                            <div>09.09 - Tặng Bạn Mã Giảm Giá 50K</div>
                            <div>Mã giảm 50K - Giảm Toàn Sàn dành cho ĐH 500K</div>
                            <div className={styles.voucherCode}>Mã voucher - FHS50KT09</div>
                            <div className={styles.voucherExpiry}>HSD: 30/09/2023</div>
                        </div>
                        <div className={styles.btnActionContainer}>
                            <Link href={'#'} className={styles.linkToVoucherDetail}>Chi tiết</Link>
                            <div className={styles.copyBtnContainer}>
                                <button className={'btn btn-primary'}>
                                    copy mã
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VoucherItem
