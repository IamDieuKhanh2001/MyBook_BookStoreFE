'use client'
import React from 'react'
import styles from './TotalCartPrice.module.scss'
import Link from 'next/link'

const TotalCartPrice = () => {
    return (
        <>
            <div className={styles.totalCartRight}>
                <div className={styles.blockTotalCart}>
                    <div className={styles.blockTotalCartPage}>
                        <div className={styles.totalCartPage}>
                            <div className={styles.titleCartPageLeft}>
                                Thành tiền
                            </div>
                            <div className={styles.numberCartPageRight}>
                                <span className={styles.price}>
                                    277.000 VND
                                </span>
                            </div>
                        </div>
                        <div className={styles.totalCartPage}>
                            <div className={styles.titleCartPageLeft}>
                                Phí vận chuyển (Giao hàng tiêu chuẩn)
                            </div>
                            <div className={styles.numberCartPageRight}>
                                <span className={styles.price}>
                                    19.000 đ
                                </span>
                            </div>
                        </div>
                        <div className={styles.borderProduct}></div>
                        <div className={`${styles.totalCartPage}`}>
                            <div className={`${styles.titleCartPageLeft} ${styles.titleFinalTotal}`}>
                                Tổng Số Tiền (gồm VAT)
                            </div>
                            <div className={`${styles.numberCartPageRight} ${styles.finalPrice}`}>
                                <span className={styles.price}>
                                    296.050 đ
                                </span>
                            </div>
                        </div>
                        <div className={styles.checkoutBtnContainer}>
                            <button className={styles.btnProceed}>
                                <span>
                                    Thanh toán
                                </span>
                            </button>
                            <div className={styles.retailNote}>
                                <Link href={"#"}>(Giảm giá trên web chỉ áp dụng cho bán lẻ)</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TotalCartPrice
