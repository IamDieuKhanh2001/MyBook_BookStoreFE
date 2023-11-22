'use client'
import React from 'react'
import styles from './ProductListOrdered.module.scss'
import ProductItemOrdered from './ProductItemOrdered/ProductItemOrdered'
import BadgeOrderCanceled from '../OrderOverview/StatusBadge/BadgeOrderCanceled/BadgeOrderCanceled'
import BadgeOrderSuccess from '../OrderOverview/StatusBadge/BadgeOrderSuccess/BadgeOrderSuccess'
import BadgeOrderUnpaid from '../OrderOverview/StatusBadge/BadgeOrderUnpaid/BadgeOrderUnpaid'
import PaymentStatus from '@/enum/PaymentStatus'

interface IProductListOrderedProps {
    data: IOrder
}
const ProductListOrdered = (props: IProductListOrderedProps) => {
    const { data } = props

    console.log(data)
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
                                {data.id}
                            </span>
                        </div>
                        {
                            data.status === PaymentStatus.PAID
                                ? <BadgeOrderSuccess />
                                :
                                data.status === PaymentStatus.UNPAID
                                    ? <BadgeOrderUnpaid /> :
                                    data.status === PaymentStatus.CANCEL
                                        ? <BadgeOrderCanceled /> :
                                        <></>
                        }
                        <div className={styles.orderViewQty}>
                            <span>
                                Số lượng
                            </span>
                            <span>
                                {data.items?.length}
                            </span>
                        </div>
                        <div className={styles.orderViewTotal}>
                            <span>
                                Tổng Tiền:
                            </span>
                            <span className={styles.price}>
                                {data.final_price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
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
                    {data.items && data.items.length > 0 ? (
                        data.items?.map((orderedItem, index) => (
                            <ProductItemOrdered key={index} orderedItemData={orderedItem} />
                        ))
                    ) : (
                        <></>
                    )}
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
                                    {data.product_price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                </span>
                            </p>
                            <p className={styles.orderTotalPrice}>
                                <span>
                                    {data.fee_price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                </span>
                            </p>
                            <p className={styles.orderTotalPrice}>
                                <span>
                                    {data.final_price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
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
