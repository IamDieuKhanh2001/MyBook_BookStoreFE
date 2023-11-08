'use client'
import React from 'react'
import styles from './CartProductList.module.scss'
import CartItem from './CartItem/CartItem'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import Link from 'next/link'
import CartEmptyAlert from './CartEmptyAlert/CartEmptyAlert'

interface ICartProductListProps {
    list: ICartItem[]
    itemSelected: number[]
    setItemSelected: React.Dispatch<React.SetStateAction<number[]>>
}
const CartProductList = (props: ICartProductListProps) => {
    const { list, itemSelected, setItemSelected } = props

    const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked === true) {
            console.log("Check all")
            const getAllId = list.map(item => item.id);
            setItemSelected(getAllId)

        } else {
            console.log("remove all")
            setItemSelected([])
        }
    }

    return (
        <>
            {list.length > 0 ? (
                <>
                    <div className={styles.headerCartItem}>
                        <div className={styles.checkboxAllProduct}>
                            <input
                                type="checkbox"
                                className={styles.checkboxAddCart}
                                onChange={(event) => handleChangeCheckBox(event)}
                                checked={itemSelected.length === list.length}
                            />
                        </div>
                        <div className={styles.chooseAllTitle}>
                            <span>Chọn tất cả (
                                <span>
                                    {list.length}
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
                        {list.map((productData: ICartItem) => (
                            <CartItem
                                key={productData.id}
                                productData={productData}
                                itemSelected={itemSelected}
                                setItemSelected={setItemSelected}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <CartEmptyAlert />
            )}
        </>
    )
}

export default CartProductList
