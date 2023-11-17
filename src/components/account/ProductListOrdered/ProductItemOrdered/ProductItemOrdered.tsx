'use client'
import React from 'react'
import styles from './ProductItemOrdered.module.scss'

const ProductItemOrdered = () => {
    return (
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
                        </div>
                    </div>
                    <div className={styles.productQty}>
                        Số lượng: &nbsp;
                        <span className={styles.qty}>
                            x1
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.datePurchased}>
                2023-10-10
            </div>
        </div>
    )
}

export default ProductItemOrdered
