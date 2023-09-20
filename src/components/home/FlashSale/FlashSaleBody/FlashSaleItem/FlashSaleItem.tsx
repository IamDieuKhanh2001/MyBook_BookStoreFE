'use client'
import React from 'react'
import styles from './FlashSaleItem.module.scss'

const FlashSaleItem = () => {
    return (
        <>
            <div className={styles.flashSaleItem}>
                <div className="position-relative overflow-hidden">
                    <div className={styles.imgContainer}>
                        <img className="img-fluid w-100" src="/img/book/sach2.jpg" alt="" />
                        <div className={styles.outStockContainer}>
                            <img
                                className={styles.flashSaleImgChayHang}
                                src="/img/flashSale/img-chay-hang.svg"
                                alt='img chay hang'
                            />
                        </div>
                    </div>
                    <div className="bg-warning fw-bold rounded text-white position-absolute end-0 top-0 m-2 px-3">
                        -16%
                    </div>
                </div>
                <div className="px-4 py-2">
                    <a className="d-block h6 mb-2" href="">Dummy book title tile 2</a>
                    <div className='d-flex flex-column'>
                        <span className="text-warning fw-bold me-1">$19.00</span>
                        <span className="text-body text-decoration-line-through">$29.00</span>
                    </div>
                    <div className={styles.progress}>
                        <span className={styles.progressValue}>Đã bán 100</span>
                        <div
                            role='progressbar'
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={72}
                            className={styles.progressBar} style={{
                                width: '72%',
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlashSaleItem
