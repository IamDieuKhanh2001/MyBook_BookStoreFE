'use client'
import React from 'react'
import styles from './BottomSideBarCheckout.module.scss'
import Link from 'next/link'

const BottomSideBarCheckout = () => {
    return (
        <>
            <div className={styles.bsidebar}>
                <div className={styles.bsidebarContent}>
                    <div className='container'>
                        <div className={styles.checkoutTotal}>
                            <div className={styles.totalAndSubTotal}>
                                <div>
                                    Thành tiền
                                </div>
                                <div>
                                    500.000 VND
                                </div>
                            </div>
                            <div className={styles.totalShiping}>
                                <div>
                                    Phí vận chuyển (Giao hàng tiêu chuẩn)
                                </div>
                                <div>
                                    19.000 VND
                                </div>
                            </div>
                            <div className={styles.grandTotal}>
                                <div>
                                    Tổng Số Tiền (gồm VAT)
                                </div>
                                <div>
                                    519.000 VND
                                </div>
                            </div>
                        </div>
                        <div className={styles.checkoutBottom}>
                            <div>
                                <Link className={styles.backToCart} href="/cart">
                                    <i className="fas fa-chevron-left"></i>
                                    Quay về giỏ hàng
                                </Link>
                            </div>
                            <div className={styles.btnAcceptPayContainer}>
                                <button type="button" className={`${styles.btnAcceptPayment} btn btn-danger`}>Xác nhận thanh toán</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomSideBarCheckout
