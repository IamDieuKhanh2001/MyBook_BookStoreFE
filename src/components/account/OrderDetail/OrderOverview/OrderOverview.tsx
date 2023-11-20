'use client'
import React from 'react'
import styles from './OrderOverview.module.scss'

const OrderOverview = () => {
    return (
        <>
            <div className={`card mb-2 py-3 px-4 ${styles.orderViewContentInfo}`}>
                <div className={styles.orderViewTitle}>
                    Chi tiết đơn hàng
                </div>
                <div>
                    <div className={styles.orderViewStatus}>
                        Đơn hàng Bị hủy
                    </div>
                    <div className={styles.orderViewId}>
                        <span>
                            Mã đơn hàng:
                        </span>
                        <span>
                            103343855
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
                            5000000000
                        </span>
                    </div>
                    <div className={styles.orderViewNote}>
                        <span className={styles.noteTitle}>
                            Ghi chú:
                        </span>
                        <span className={styles.noteContent}>
                            (Không có)
                        </span>
                    </div>
                </div>
                <div className={styles.overviewBtns}>
                    <button className={styles.cancelOrderBtn}>Đặt hàng lại</button>
                </div>
            </div>
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
                                Khanh Quach
                                <br />
                                1 Vo Van Ngan street<br />
                                Phường 07, Quận Bình Thạnh,  Hồ Chí Minh<br />
                                Tel: 0912345678
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
                            Thanh toán bằng tiền mặt khi nhận hàng
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderOverview
