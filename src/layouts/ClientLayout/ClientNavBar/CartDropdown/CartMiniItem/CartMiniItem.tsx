'use client'
import React from 'react'
import styles from './CartMiniItem.module.scss'
import Link from 'next/link'

const CartMiniItem = () => {
    return (
        <>
            <li className={styles.cartItem}>
                <Link className={styles.itemImg} href="#" title='Tiếng Anh 12 - Tập 2 - Sách Học Sinh (2023)'>
                    <img
                        src="/img/book/sach2.jpg"
                        alt="Sach 1"
                        width={68}
                        height={68}
                    />
                </Link>
                <div className={styles.itemDetail}>
                    <p className={styles.itemName}>
                        <Link href={'#'}>Tiếng Anh 12 - Tập 2 - Sách Học Sinh (2023)</Link>
                    </p>
                    <div className='mt-1'>
                        <span className={styles.itemPrice}>37.000 VND</span>
                        <span className={styles.itemQty}>x1</span>
                    </div>
                </div>
            </li>
        </>
    )
}

export default CartMiniItem
