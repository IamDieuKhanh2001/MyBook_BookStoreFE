"use client"
import React, { useEffect } from 'react'
import ProductItem from './ProductItem/ProductItem'
import styles from "./ProductList.module.scss"
import { IBook } from '../../../../types/IBook'

interface IProductListProps {
    dataList: IBook[]
}
const ProductList = (props: IProductListProps) => {
    const { dataList } = props

    return (
        <>
            <div className="tab-content">
                <div className="row g-2">
                    {dataList?.map((item) => (
                        <ProductItem key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductList
