'use client'
import React from 'react'
import styles from './OrderItem.module.scss'

interface IOrderItemProps {
    data: ICartItem
}
const OrderItem = (props: IOrderItemProps) => {
    const { data } = props

    const totalOrderItem = () => {
        let total = 0
        total = data.book_info.price * data.quantity
        return total
    }
    return (
        <div className={styles.checkoutProductItem}>
            <div className={styles.checkoutProductItemImg}>
                <img src={data.book_info.images[0].image_source} alt={data.book_info.isbn_code} />
            </div>
            <div className={styles.checkoutProductItemDetail}>
                <div className={styles.checkoutProductItemName}>
                    <div>{data.book_info.name}</div>
                </div>
                <div className={styles.checkoutProductItemPrice}>
                    <div>
                        {data.book_info.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                    </div>
                    <div className={styles.checkoutProductItemOriginalPrice}>
                        0 D
                    </div>
                </div>
                <div className={styles.checkoutProductItemQty}>
                    <span>Số lượng: </span>
                    x{data.quantity}
                </div>
                <div className={styles.checkoutProductItemTotal}>
                    {totalOrderItem().toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                </div>
            </div>
        </div>
    )
}

export default OrderItem
