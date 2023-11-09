'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.scss'
import CartProductList from '@/components/cart/CartProductList/CartProductList'
import TotalCartPrice from '@/components/cart/CartRight/TotalCartPrice/TotalCartPrice'
import useAPIUserCart from '@/lib/hooks/api/useAPIUserCart'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { cartActions } from '@/redux/slices/cartSlice'

const CartPage = () => {
    const { getMyCartList } = useAPIUserCart()
    const dispatch = useDispatch()
    const { data, error, isLoading, mutate } = getMyCartList()
    const [itemSelected, setItemSelected] = useState<number[]>([])


    useEffect(() => {
        console.log("item select")
        console.log(itemSelected)
    }, [itemSelected])
    return (
        <>
            <div className='container-xxl p-0'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0'>
                        <div className={styles.cart}>
                            <div className={styles.pageTitle}>
                                <div className={styles.pageTitleContainer}>
                                    <h1 className={styles.cartTitle}>
                                        Giỏ hàng
                                    </h1>
                                    <span className={styles.cartTitleNumItems}>
                                        ({data.length} sản phẩm)
                                    </span>
                                </div>
                            </div>
                            <div className={`${styles.cartUIContent} row`}>
                                <div className='col-xl-8 col-md-12'>
                                    <CartProductList
                                        list={data}
                                        itemSelected={itemSelected}
                                        setItemSelected={setItemSelected}
                                    />
                                </div>
                                <div className='col-xl-4 col-md-12'>
                                    <TotalCartPrice />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage
