'use client'
import React from 'react'
import styles from './CartMiniFooter.module.scss'
import Link from 'next/link'

interface ICartMiniFooterProps {
    total: number
}
const CartMiniFooter = (props: ICartMiniFooterProps) => {
    const { total = 0 } = props

    return (
        <>
            <div className={styles.cartFooter}>
                <div className={styles.cartFooterLeft}>
                    <div className={styles.priceTotalTitle}>Tổng cộng</div>
                    <div>
                        <span className={styles.priceTotal}>{total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                    </div>
                </div>
                <Link className={`btn ${styles.btnRedirectToCart}`} href={'/cart'}>Xem giỏ hàng</Link>
            </div>
        </>
    )
}

export default CartMiniFooter
