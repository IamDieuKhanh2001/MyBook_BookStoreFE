'use client'
import React from 'react'
import styles from './OrderItem.module.scss'
import { ICartItem } from '../../../../../types/ICartItem'
import { useRouter } from 'next/navigation'

interface IOrderItemProps {
    data: ICartItem
}
const OrderItem = (props: IOrderItemProps) => {
    const { data } = props
    const router = useRouter()

    const totalOrderItem = () => {
        let total = 0
        total = data.book_info.price * data.quantity
        return total
    }

    return (
        <div
            className={styles.checkoutProductItem}
            onClick={() => router.push(`/product/detail/${data.book_info.slug}`)}
        >
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
                    {data.book_info?.flash_sale_info && (
                        <div className={styles.checkoutProductItemOriginalPrice}>
                            {data.book_info.flash_sale_info.original_price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                        </div>
                    )}
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
