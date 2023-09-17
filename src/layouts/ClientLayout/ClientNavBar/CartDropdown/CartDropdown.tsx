"use client"
import React from 'react'
import styles from './CartDropdown.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import CartMiniItem from './CartMiniItem/CartMiniItem'
import CartMiniFooter from './CartMiniFooter/CartMiniFooter'

const CartDropdown = () => {
    const router = useRouter();

    const handleCartClick = () => {
        // Xử lý việc chuyển đến trang "/cart" khi nhấn icon cart trên nav
        router.push('/cart');
    }

    return (
        <>
            {/* cart dropdown  */}
            <div className={`${styles.navItem} dropdown`}>
                <div
                    className={`${styles.dropdownToggle} nav-link dropdown-toggle btn-sm-square ms-3`}
                    onClick={handleCartClick}
                    role="button"
                >
                    <small className="fa fa-shopping-bag text-body" />
                </div>
                <div className={`${styles.dropdownMenu} dropdown-menu dropdown-menu-start m-0`}>
                    <div className={styles.cartHeader}>
                        <i className="fa fa-shopping-bag me-2"></i>
                        <span className={styles.cartTitle}>Giỏ hàng</span>
                        <span className={`${styles.cartTitle} ms-2`}>(4)</span>
                    </div>
                    <div>
                        <ol className={styles.cartContent}>
                            <CartMiniItem />
                            <CartMiniItem />
                            <CartMiniItem />
                            <CartMiniItem />
                            <CartMiniItem />
                            <CartMiniItem />
                            <CartMiniItem />
                        </ol>
                    </div>
                    <CartMiniFooter />
                </div>
            </div>
        </>
    )
}

export default CartDropdown
