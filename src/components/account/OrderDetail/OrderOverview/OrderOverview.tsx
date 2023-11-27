'use client'
import React from 'react'
import styles from './OrderOverview.module.scss'
import BadgeOrderCanceled from './StatusBadge/BadgeOrderCanceled/BadgeOrderCanceled'
import PaymentStatus from '@/enum/PaymentStatus'
import BadgeOrderSuccess from './StatusBadge/BadgeOrderSuccess/BadgeOrderSuccess'
import BadgeOrderUnpaid from './StatusBadge/BadgeOrderUnpaid/BadgeOrderUnpaid'
import ReviewOrderModal from './ReviewOrderModal/ReviewOrderModal'

interface IOrderOverviewProps {
    data: IOrder
}
const OrderOverview = (props: IOrderOverviewProps) => {
    const { data } = props

    return (
        <>
            <div className={`card mb-2 py-3 px-4 ${styles.orderViewContentInfo}`}>
                <div className={styles.orderViewTitle}>
                    Chi tiết đơn hàng
                </div>
                <div>
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
                    <div className={styles.orderViewId}>
                        <span>
                            Mã đơn hàng:
                        </span>
                        <span>
                            {data.id}
                        </span>
                    </div>
                    <div className={styles.orderViewDate}>
                        <span>
                            Ngày mua:
                        </span>
                        <span>
                            20/11/2023
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
                    <div className={styles.orderViewNote}>
                        <span className={styles.noteTitle}>
                            Ghi chú:
                        </span>
                        <span className={styles.noteContent}>

                            {data.customer_note ? (
                                <>
                                    {data.customer_note}
                                </>
                            ) : (
                                <>
                                    (Không có)
                                </>
                            )}
                        </span>
                    </div>
                </div>
                <div className={styles.overviewBtns}>
                    <button className={styles.orderReceivedBtn}>
                        Đặt hàng lại
                    </button>
                    <ReviewOrderModal orderId={data.id} />
                </div>
            </div >
            <div className="card mb-2 py-3 px-4">
                <div className={styles.orderViewContentBox}>
                    <div className={styles.orderViewBox}>
                        <div className={styles.orderBoxTitle}>
                            <div className={styles.orderViewTitle}>
                                Thông tin người nhận
                            </div>
                        </div>
                        <div className={styles.orderBoxInfo}>
                            <address>
                                {data.userAddress?.recipient_name}
                                <br />
                                {data.userAddress?.street}<br />
                                {data.userAddress?.wards.name}, {data.userAddress?.wards.district.name},  {data.userAddress?.wards.district.province.name}< br />
                                Tel: {data.userAddress?.recipient_phone}
                            </address>
                        </div>
                    </div>
                    <div className={styles.orderViewBox}>
                        <div className={styles.orderShippingDesc}>
                            <div className={styles.orderViewTitle}>
                                Phương thức vận chuyển
                            </div>
                        </div>
                        <div className={styles.orderBoxInfo}>
                            Giao hàng tiêu chuẩn
                        </div>
                    </div>
                    <div className={styles.orderViewBox}>
                        <div className={styles.orderBoxTitle}>
                            <div className={styles.orderViewTitle}>
                                Phương thức thanh toán
                            </div>
                        </div>
                        <div className={styles.orderBoxInfo}>
                            {data.payment_method}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderOverview
