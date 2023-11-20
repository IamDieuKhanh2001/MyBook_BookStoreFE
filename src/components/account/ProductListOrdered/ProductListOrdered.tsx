'use client'
import React from 'react'
import styles from './ProductListOrdered.module.scss'
import ProductItemOrdered from './ProductItemOrdered/ProductItemOrdered'

const ProductListOrdered = () => {
    return (
        <>
            <div className="card mb-4">
                <div className={styles.headerListItem}>
                    <div className={styles.headerIdItem}>
                        Mã số
                    </div>
                    <div className={styles.headerNameItem}>
                        Tên sản phẩm
                    </div>
                    <div className={styles.datePurchasedHeader}>
                        Ngày thanh toán
                    </div>
                </div>
                <div className={styles.listContent}>
                    <ProductItemOrdered />
                    <ProductItemOrdered />
                    <ProductItemOrdered />
                </div>
            </div>
        </>
    )
}

export default ProductListOrdered
