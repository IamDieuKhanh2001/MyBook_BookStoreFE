'use client'
import React from 'react'
import styles from './ProductListOrdered.module.scss'
import ProductItemOrdered from './ProductItemOrdered/ProductItemOrdered'
import BadgeOrderCanceled from '../OrderOverview/StatusBadge/BadgeOrderCanceled/BadgeOrderCanceled'
import BadgeOrderSuccess from '../OrderOverview/StatusBadge/BadgeOrderDelivering/BadgeOrderDelivering'
import BadgeOrderUnpaid from '../OrderOverview/StatusBadge/BadgeOrderConfirm/BadgeOrderConfirm'
import PaymentStatus from '@/enum/PaymentStatus'
import OrderStatus from '@/enum/OrderStatus'
import BadgeOrderCompleted from '../OrderOverview/StatusBadge/BadgeOrderCompleted/BadgeOrderCompleted'
import BadgeOrderConfirm from '../OrderOverview/StatusBadge/BadgeOrderConfirm/BadgeOrderConfirm'
import BadgeOrderPending from '../OrderOverview/StatusBadge/BadgeOrderPeding/BadgeOrderPeding'
import BadgeOrderDelivering from '../OrderOverview/StatusBadge/BadgeOrderDelivering/BadgeOrderDelivering'

interface IProductListOrderedProps {
    data: IOrder
}
const ProductListOrdered = (props: IProductListOrderedProps) => {
    const { data } = props

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
                            data.status === OrderStatus.COMPLETED
                                ? <BadgeOrderCompleted />
                                : data.status === OrderStatus.CONFIRMED
                                    ? <BadgeOrderConfirm /> :
                                    data.status === OrderStatus.DELIVERING
                                        ? <BadgeOrderDelivering /> :
                                        data.status === OrderStatus.PENDING
                                            ? <BadgeOrderPending /> :
                                            data.status === OrderStatus.CANCELED
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
                            <p><span>Đã giảm giá: </span></p>
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
                                    -{data.discount_price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
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
