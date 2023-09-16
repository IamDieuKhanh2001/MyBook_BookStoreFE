"use client"
import React from 'react'
import ProductItem from './ProductItem/ProductItem'
import styles from "./ProductList.module.scss"

const ProductList = () => {
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
