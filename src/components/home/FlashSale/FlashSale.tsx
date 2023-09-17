'use client'
import React from 'react'
import styles from './FlashSale.module.scss'
import FlashSaleHeader from './FlashSaleHeader/FlashSaleHeader'
import ProductList from '@/components/product/ProductList/ProductList'
import Link from 'next/link'

const FlashSale = () => {
    return (
        <>
            <div className="container-xxl pt-5">
                <FlashSaleHeader initialHours={10} initialMinutes={30}/>
                <div className='row pb-4'>
                    <ProductList />
                </div>
                <div className="col-12 text-center">
                    {/* Go to product list page  */}
                    <Link className="btn btn-primary rounded-pill py-3 px-5" href="">
                        Xem thêm
                    </Link>
                </div>
            </div>
        </>
    )
}

export default FlashSale
