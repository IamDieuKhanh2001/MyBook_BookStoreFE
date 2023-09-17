'use client'
import React from 'react'
import styles from './CartMiniFooter.module.scss'
import Link from 'next/link'

const CartMiniFooter = () => {
    return (
        <>
            <div className={styles.cartFooter}>
                <div className={styles.cartFooterLeft}>
                    <div className={styles.priceTotalTitle}>Tổng cộng</div>
                    <div>
                        <span className={styles.priceTotal}>326.000 VND</span>
                    </div>
                </div>
                <Link className={`btn ${styles.btnRedirectToCart}`} href={'/cart'}>Xem giỏ hàng</Link>
            </div>
        </>
    )
}

export default CartMiniFooter
