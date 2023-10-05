"use client"
import React, { useEffect } from 'react'
import ProductItem from './ProductItem/ProductItem'
import styles from "./ProductList.module.scss"
import { useSession } from 'next-auth/react'
import useAxiosAuth from '@/lib/hooks/utils/useAxiosAuth'

const ProductList = () => {
    const { data: session } = useSession();
    const axiosAuth = useAxiosAuth();

    return (
        <>
            <div className="tab-content">
                <div className="row g-2">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </>
    )
}

export default ProductList
