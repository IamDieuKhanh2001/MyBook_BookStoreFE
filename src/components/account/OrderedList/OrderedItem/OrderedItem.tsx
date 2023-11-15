import React from 'react'
import styles from './OrderedItem.module.scss'
import Link from 'next/link'

const OrderedItem = () => {
    return (
        <>
            <div className={styles.orderItem}>
                <div className={styles.orderItemId}>
                    01
                </div>
                <div className={styles.orderPaymentMethod}>
                    PayPal
                </div>
                <div className={styles.orderStatus}>
                    Chưa thanh toán
                </div>
                <div className={styles.orderTotalPrice}>
                    100000000Đ
                </div>
                <div className={styles.orderDetailRedirect}>
                    <Link href={'/account/order/history/detail/1'}>
                        Chi Tiết
                    </Link>
                </div>
            </div>
        </>
    )
}

export default OrderedItem
