import React from 'react'
import styles from './CartEmptyAlert.module.scss'

const CartEmptyAlert = () => {
    return (
        <>
            <div className={styles.emptyCart}>
                <div className={styles.emptyCartImg}></div>
                <div className={styles.emptyCartMsg}>
                    Giỏ hàng của bạn trống
                </div>
            </div>
        </>
    )
}

export default CartEmptyAlert
