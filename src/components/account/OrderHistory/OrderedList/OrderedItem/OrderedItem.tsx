import React from 'react'
import styles from './OrderedItem.module.scss'
import Link from 'next/link'

interface IOrderedItemProps {
    data: IMyOrder
}
const OrderedItem = (props: IOrderedItemProps) => {
    const { data } = props

    const translateStatus = (status: string) => {
        switch (status) {
            case 'pending': {
                return 'Chờ xác nhận'
            }
            case 'confirmed': {
                return 'Đã xác nhận'
            }
            case 'delivering': {
                return 'Đang vận chuyển'
            }
            case 'completed': {
                return 'Hoàn thành'
            }
            case 'canceled': {
                return 'Đã hủy'
            }
            default: {
                return 'undefined status'
            }
        }
    }

    const translatePaymentStatus = (paymentStatus: string) => {
        switch (paymentStatus) {
            case 'unpaid': {
                return 'Chưa thanh toán'
            }
            case 'paid': {
                return 'Đã thanh toán'
            }
            case 'refunded': {
                return 'Đã hoàn tiền'
            }
            default: {
                return 'Undefined payment status'
            }
        }
    }

    return (
        <>
            <div className={styles.orderItem}>
                <div className={styles.orderItemId}>
                    {data.id}
                </div>
                <div className={styles.orderPaymentMethod}>
                    <img src={`/img/payment/${data.payment_method}.svg`} alt={data.payment_method} />
                </div>
                <div className={styles.orderStatus}>
                    {translateStatus(data.status)}
                </div>
                <div className={styles.orderStatus}>
                    {translatePaymentStatus(data.payment_status)}
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
