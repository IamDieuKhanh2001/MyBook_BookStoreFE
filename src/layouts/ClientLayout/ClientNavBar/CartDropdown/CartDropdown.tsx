"use client"
import React from 'react'
import styles from './CartDropdown.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import CartMiniItem from './CartMiniItem/CartMiniItem'
import CartMiniFooter from './CartMiniFooter/CartMiniFooter'
import useAPIUserCart from '@/lib/hooks/api/useAPIUserCart'
import CartEmptyAlert from './CartEmptyAlert/CartEmptyAlert'
import { ICartItem } from '../../../../../types/ICartItem'

const CartDropdown = () => {
    const router = useRouter();
    const { getMyCartList } = useAPIUserCart()
    const { data } = getMyCartList()
    const handleCartClick = () => {
        // Xử lý việc chuyển đến trang "/cart" khi nhấn icon cart trên nav
        router.push('/cart');
    }

    function calculateSum(cartList: ICartItem[]) {
        const total = cartList.reduce((accumulator, object) => {
            return accumulator + object.book_info.price * object.quantity;
        }, 0);

        return total;
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
                    <small className="fa fa-shopping-bag fa-lg text-body position-relative">
                        {data.length > 0 && (
                            <span className={`${styles.badgeQty} position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger`}>
                                {data.length}
                            </span>
                        )}
                    </small>
                </div>
                <div className={`${styles.dropdownMenu} dropdown-menu dropdown-menu-start m-0`}>
                    <div className={styles.cartHeader}>
                        <i className="fa fa-shopping-bag me-2"></i>
                        <span className={styles.cartTitle}>Giỏ hàng</span>
                        <span className={`${styles.cartTitle} ms-2`}>({data.length})</span>
                    </div>
                    <div>
                        {data.length > 0 ? (
                            <ol className={styles.cartContent}>
                                {data.map((item) => (
                                    <CartMiniItem key={item.id} cartItemData={item} />
                                ))}
                            </ol>
                        ) : (
                            <CartEmptyAlert />
                        )}
                    </div>
                    {data.length > 0 && <CartMiniFooter total={calculateSum(data)} />}
                </div>
            </div>
        </>
    )
}

export default CartDropdown
