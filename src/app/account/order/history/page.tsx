import React from 'react'
import styles from './page.module.scss'

const OrderPage = () => {
    return (
        <>
            <div className="card mb-4">
                <div className={styles.headerListItem}>
                    <div className={styles.headerIdItem}>
                        Mã đơn
                    </div>
                    <div className={styles.headerNameItem}>
                        <span>
                            Tên sản phẩm
                        </span>
                    </div>
                    <div className={styles.headerQty}>
                        Số lượng
                    </div>
                    <div className={styles.HeaderTotalTitle}>
                        Thành tiền
                    </div>
                </div>
                <div className={styles.listContent}>


                    <div className={styles.listItem}>
                        <div className={styles.itemId}>
                            01
                        </div>
                        <div className={styles.itemImgContainer}>
                            <img className={styles.productImage} src="https://cdn0.fahasa.com/media/catalog/product//z/4/z4586028434491_71647a43468b2e70cdaa5b0b34a740b7.jpg" alt="img product" />
                        </div>
                        <div className={styles.groupProductInfo}>
                            <div className={styles.infoProduct}>
                                <div>
                                    <h2>
                                        Không Diệt Không Sinh Đừng Sợ Hãi (Độc Quyền Tại Fahasa)
                                    </h2>
                                </div>
                                <div className={styles.priceOriginal}>
                                    <div className={styles.cartPrice}>
                                        <div>
                                            <span className={styles.price}>
                                                240.000 VND
                                            </span>
                                        </div>
                                        <div className={styles.priceOld}>
                                            <span className={styles.price}>
                                                290.000 VND
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.numberProductCart}>
                                x1
                                <div className={styles.cartPriceTotal}>
                                    <span className={styles.cartPrice}>
                                        <span className={styles.price}>
                                            240.000
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default OrderPage
