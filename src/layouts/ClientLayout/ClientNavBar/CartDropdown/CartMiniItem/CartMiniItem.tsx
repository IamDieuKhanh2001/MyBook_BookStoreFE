'use client'
import React from 'react'
import styles from './CartMiniItem.module.scss'
import Link from 'next/link'
import { ICartItem } from '../../../../../../types/ICartItem'

interface ICartMiniItemProps {
    cartItemData: ICartItem
}
const CartMiniItem = (props: ICartMiniItemProps) => {
    const { cartItemData } = props
    const linkToDetail = `/product/detail/${cartItemData.book_info.slug}`

    const onImageError = (e: any) => {
        e.target.src = '/img/book/no-image.jpg'
    }

    return (
        <>
            <li className={styles.cartItem}>
                <Link className={styles.itemImg} href={linkToDetail} title='Tiếng Anh 12 - Tập 2 - Sách Học Sinh (2023)'>
                    <img
                        src={cartItemData.book_info.images && cartItemData.book_info.images.length > 0 ?
                            cartItemData.book_info.images[0].image_source : '/img/book/no-image.jpg'}
                        alt={cartItemData.id.toString()}
                        width={68}
                        height={68}
                        onError={onImageError}
                    />
                </Link>
                <div className={styles.itemDetail}>
                    <p className={styles.itemName}>
                        <Link href={linkToDetail}>
                            {cartItemData.book_info.name}
                        </Link>
                    </p>
                    <div className='mt-1'>
                        <span className={styles.itemPrice}>
                            {cartItemData.book_info.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                        </span>
                        <span className={styles.itemQty}>
                            x{cartItemData.quantity}
                        </span>
                    </div>
                </div>
            </li>
        </>
    )
}

export default CartMiniItem
