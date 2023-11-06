'use client'
import React, { useEffect } from 'react'
import styles from './page.module.scss'
import CartProductList from '@/components/cart/CartProductList/CartProductList'
import TotalCartPrice from '@/components/cart/CartRight/TotalCartPrice/TotalCartPrice'
import useAPIUser from '@/lib/hooks/api/useAPIUser'

const CartPage = () => {
    const { getMyCartList } = useAPIUser()
    const { data, error, isLoading, mutate } = getMyCartList()

    useEffect(() => {
        console.log(data)
    }, [data])
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
                                        (5 sản phẩm)
                                    </span>
                                </div>
                            </div>
                            <div className={`${styles.cartUIContent} row`}>
                                <div className='col-xl-8 col-md-12'>
                                    <CartProductList list={data} />
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
