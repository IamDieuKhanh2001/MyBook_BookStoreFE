'use client'
import React from 'react'
import styles from './ProductListOrdered.module.scss'
import ProductItemOrdered from './ProductItemOrdered/ProductItemOrdered'

const ProductListOrdered = () => {
    return (
        <>
            <div className="card mb-4 py-3 px-4">
                <div className={styles.subOrderInfo}>
                    <div>
                        <div className={styles.orderViewId}>
                            <span>
                                Mã đơn hàng:
                            </span>
                            <span>
                                103343855
                            </span>
                        </div>
                        <div className={styles.orderViewStatus}>
                            Đơn hàng Bị hủy
                        </div>
                        <div className={styles.orderViewQty}>
                            <span>
                                Số lượng
                            </span>
                            <span>
                                1
                            </span>
                        </div>
                        <div className={styles.orderViewTotal}>
                            <span>
                                Tổng Tiền:
                            </span>
                            <span className={styles.price}>
                                5000000000
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.tableSubOrderContainer}>
                    <div className={styles.subOrderHeaderAndImg}>
                        <div className={styles.tableHeader}>
                            <div className={`${styles.tableSubOrderHeader} ${styles.tableSubOrderHeaderImg}`}>
                                Hình ảnh
                            </div>
                            <div className={`${styles.tableSubOrderHeader}`}>
                                Tên sản phẩm
                            </div>
                            <div className={`${styles.tableSubOrderHeader}`}>
                                Sku
                            </div>
                            <div className={`${styles.tableSubOrderHeader}`}>
                                Giá bán
                            </div>
                            <div className={`${styles.tableSubOrderHeader}`}>
                                SL
                            </div>
                            <div className={`${styles.tableSubOrderHeader}`}>
                                Thành tiền
                            </div>
                        </div>
                    </div>
                    <ProductItemOrdered />
                    <ProductItemOrdered />
                </div>
                <div className={styles.orderSubOrderTotal}>

                    <div className={styles.orderSubOrderTotalDesktop}>
                        <div>
                            <p><span>Thành tiền: </span></p>
                            <p><span>Phí vận chuyển: </span></p>
                            <p><span>Tổng Số Tiền (gồm VAT): </span></p>
                        </div>
                        <div>
                            <p className={styles.orderTotalPrice}>
                                <span>
                                    33.250
                                </span>
                            </p>
                            <p className={styles.orderTotalPrice}>
                                <span>
                                    33.250
                                </span>
                            </p>
                            <p className={styles.orderTotalPrice}>
                                <span>
                                    33.250
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductListOrdered
