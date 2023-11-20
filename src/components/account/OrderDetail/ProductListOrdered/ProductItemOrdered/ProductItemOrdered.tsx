'use client'
import React from 'react'
import styles from './ProductItemOrdered.module.scss'

const ProductItemOrdered = () => {
    return (
        <>
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
        </>
    )
}

export default ProductItemOrdered
