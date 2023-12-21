import React from 'react'
import styles from './OrderedItem.module.scss'
import Link from 'next/link'

interface IOrderedItemProps {
    data: IMyOrder
}
const OrderedItem = (props: IOrderedItemProps) => {
    const { data } = props

    return (
        <>
            <div className={styles.orderItem}>
                <div className={styles.orderItemId}>
                    {data.id}
                </div>
                <div className={styles.orderPaymentMethod}>
                    {data.payment_method}
                </div>
                <div className={styles.orderStatus}>
                    {data.status}
                </div>
                <div className={styles.orderStatus}>
                    {data.payment_status}
                </div>
                <div className={styles.orderTotalPrice}>
                    {data.final_price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                </div>
                <div className={styles.orderDetailRedirect}>
                    <Link href={`/account/order/history/detail/${data.id}`}>
                        Chi Tiết
                    </Link>
                </div>
            </div>
        </>
    )
}

export default OrderedItem
