'use client'
import React from 'react'
import styles from './CartProductList.module.scss'
import CartItem from './CartItem/CartItem'

interface ICartProductListProps {
    list: ICartItem[]
}
const CartProductList = (props: ICartProductListProps) => {
    const { list } = props

    return (
        <>
            <div className={styles.headerCartItem}>
                <div className={styles.checkboxAllProduct}>
                    <input type="checkbox" className={styles.checkboxAddCart} />
                </div>
                <div className={styles.chooseAllTitle}>
                    <span>Chọn tất cả (
                        <span>
                            5
                        </span>
                        sản phẩm)
                    </span>
                </div>
                <div className={styles.qtyTitle}>
                    Số lượng
                </div>
                <div className={styles.totalTitle}>
                    Thành tiền
                </div>
                <div className={styles.trashTitle}></div>
            </div>
            <div className={styles.productCartLeft}>
                {list.length > 0 ? (
                    list.map((productData) => (
                        <CartItem key={productData.id} productData={productData} />
                    ))
                ) : (
                    <h1>Empty</h1>
                )}
            </div>
        </>
    )
}

export default CartProductList
