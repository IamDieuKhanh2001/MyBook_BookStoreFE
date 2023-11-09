import React from 'react'
import styles from './CartEmptyAlert.module.scss'
import { useRouter } from 'next/navigation'

const CartEmptyAlert = () => {
    const router = useRouter()

    return (
        <>
            <div className={styles.emptyCart}>
                <div className={styles.emptyCartImg}></div>
                <div className={styles.emptyCartMsg}>
                    Giỏ hàng của bạn còn trống
                </div>
                <button
                    className={`${styles.btnGoToHome} btn btn-primary`}
                    onClick={() => router.push('/')}
                >
                    Mua ngay
                </button>
            </div>
        </>
    )
}

export default CartEmptyAlert
