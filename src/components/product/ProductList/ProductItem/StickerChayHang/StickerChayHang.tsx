import React from 'react'
import styles from './StickerChayHang.module.scss'

const StickerChayHang = () => {
    return (
        <div className={styles.outStockContainer}>
            <img
                className={styles.flashSaleImgChayHang}
                src="/img/flashSale/img-chay-hang.svg"
                alt='img chay hang'
            />
        </div>
    )
}

export default StickerChayHang
