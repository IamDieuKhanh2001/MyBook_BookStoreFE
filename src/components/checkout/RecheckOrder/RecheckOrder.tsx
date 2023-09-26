import React from 'react'
import styles from './RecheckOrder.module.scss'
import SectionTitle from '@/components/shared/sectionTitle/SectionTitle'

const RecheckOrder = () => {
    return (
        <>
            <div className='row'>
                <div className="col-12">
                    <SectionTitle title='Kiểm tra lại đơn hàng' />
                    <div className="section-container p-4">
                        <div className={styles.checkoutProductContent}>
                            <div className={styles.checkoutProductItem}>
                                <div className={styles.checkoutProductItemImg}>
                                    <img src="/img/book/sach1.jpg" alt="sach1" />
                                </div>
                                <div className={styles.checkoutProductItemDetail}>
                                    <div className={styles.checkoutProductItemName}>
                                        <div>BlueLock - Tập 13 - Tặng Kèm Card PVC</div>
                                    </div>
                                    <div className={styles.checkoutProductItemPrice}>
                                        <div>
                                            31.500 VND
                                        </div>
                                        <div className={styles.checkoutProductItemOriginalPrice}>
                                            35.000 VND
                                        </div>
                                    </div>
                                    <div className={styles.checkoutProductItemQty}>
                                        <span>Số lượng: </span>
                                        1
                                    </div>
                                    <div className={styles.checkoutProductItemTotal}>
                                        31.500 VND
                                    </div>
                                </div>
                            </div>
                            <div className={styles.checkoutProductItem}>
                                <div className={styles.checkoutProductItemImg}>
                                    <img src="/img/book/sach1.jpg" alt="sach1" />
                                </div>
                                <div className={styles.checkoutProductItemDetail}>
                                    <div className={styles.checkoutProductItemName}>
                                        <div>BlueLock - Tập 13 - Tặng Kèm Card PVC</div>
                                    </div>
                                    <div className={styles.checkoutProductItemPrice}>
                                        <div>
                                            31.500 VND
                                        </div>
                                        <div className={styles.checkoutProductItemOriginalPrice}>
                                            35.000 VND
                                        </div>
                                    </div>
                                    <div className={styles.checkoutProductItemQty}>
                                        <span>Số lượng: </span>
                                        1
                                    </div>
                                    <div className={styles.checkoutProductItemTotal}>
                                        31.500 VND
                                    </div>
                                </div>
                            </div>
                            <div className={styles.checkoutProductItem}>
                                <div className={styles.checkoutProductItemImg}>
                                    <img src="/img/book/sach1.jpg" alt="sach1" />
                                </div>
                                <div className={styles.checkoutProductItemDetail}>
                                    <div className={styles.checkoutProductItemName}>
                                        <div>BlueLock - Tập 13 - Tặng Kèm Card PVC</div>
                                    </div>
                                    <div className={styles.checkoutProductItemPrice}>
                                        <div>
                                            31.500 VND
                                        </div>
                                        <div className={styles.checkoutProductItemOriginalPrice}>
                                            35.000 VND
                                        </div>
                                    </div>
                                    <div className={styles.checkoutProductItemQty}>
                                        <span>Số lượng: </span>
                                        1
                                    </div>
                                    <div className={styles.checkoutProductItemTotal}>
                                        31.500 VND
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecheckOrder
