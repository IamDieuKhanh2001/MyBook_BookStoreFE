'use client'
import React from 'react'
import styles from './ProductItemOrdered.module.scss'
import { truncateText } from '@/lib/utils/TextUtils'

interface IProductItemOrderedProps {
    orderedItemData: ItemOrdered
}
const ProductItemOrdered = (props: IProductItemOrderedProps) => {
    const { orderedItemData } = props

    const countTotal = () => {
        let price = 0
        price = orderedItemData.price_per_unit * orderedItemData.quantity;
        return price
    }

    const onImageError = (e: any) => {
        e.target.src = '/img/book/no-image.jpg'
    }

    return (
        <>
            <div className={styles.tableSubOrderCellItem}>
                <div className={styles.subOrderRow}>
                    <div className={`${styles.subOrderCell} ${styles.subOrderImgWeb}`}>
                        <img
                            src={orderedItemData.product.images.length > 0 ? orderedItemData.product.images[0].image_source : '/img/book/no-image.jpg'}
                            alt={orderedItemData.product.id.toString()}
                            onError={onImageError}
                        />
                    </div>
                    <div className={`${styles.subOrderCell}`}>
                        {truncateText(orderedItemData.product.name, 80)}
                    </div>
                    <div className={`${styles.subOrderCell}`}>
                        {orderedItemData.product.isbn_code}
                    </div>
                    <div className={`${styles.subOrderCell}`}>
                        {orderedItemData.price_per_unit.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                    </div>
                    <div className={`${styles.subOrderCell}`}>
                        {orderedItemData.quantity}
                    </div>
                    <div className={`${styles.subOrderCell}`}>
                        {countTotal().toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItemOrdered
