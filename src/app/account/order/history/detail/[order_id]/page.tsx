import React from 'react'
import styles from './page.module.scss'

interface IOrderedDetailPageProps {
    params: {
        order_id: number;
    };
}
const OrderedDetailPage = (props: IOrderedDetailPageProps) => {
    const { params } = props

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
                {/* <ProductListOrdered /> */}
            </div>
            {/* order view content detail  */}
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

                    <div className={styles.tableSubOrderCellItem}>
                        <div className={styles.subOrderRow}>
                            <div className={`${styles.subOrderCell} ${styles.subOrderImgWeb}`}>
                                <img src="	https://cdn0.fahasa.com/media/catalog/product/b/l/bluelock_bia_tap-14-1.jpg" alt="hinh" />
                            </div>
                            <div className={`${styles.subOrderCell}`}>
                                BlueLock - Tập 14 - Tặng Kèm Card PVC
                            </div>
                            <div className={`${styles.subOrderCell}`}>
                                8935244896480
                            </div>
                            <div className={`${styles.subOrderCell}`}>
                                33.250 đ
                            </div>
                            <div className={`${styles.subOrderCell}`}>
                                1
                            </div>
                            <div className={`${styles.subOrderCell}`}>
                                33.250 đ
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableSubOrderCellItem}>
                        <div className={styles.subOrderRow}>
                            <div className={`${styles.subOrderCell} ${styles.subOrderImgWeb}`}>
                                <img src="	https://cdn0.fahasa.com/media/catalog/product/b/l/bluelock_bia_tap-14-1.jpg" alt="hinh" />
                            </div>
                            <div className={`${styles.subOrderCell}`}>
                                BlueLock - Tập 14 - Tặng Kèm Card PVC
                            </div>
                            <div className={`${styles.subOrderCell}`}>
                                8935244896480
                            </div>
                            <div className={`${styles.subOrderCell}`}>
                                33.250 đ
                            </div>
                            <div className={`${styles.subOrderCell}`}>
                                1
                            </div>
                            <div className={`${styles.subOrderCell}`}>
                                33.250 đ
                            </div>
                        </div>
                    </div>
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

export default OrderedDetailPage
