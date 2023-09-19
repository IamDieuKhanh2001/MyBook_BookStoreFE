"use client"
import React from 'react'
import styles from "./ProductItem.module.scss"

const ProductItem = () => {
    return (
        // col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3
        <div className="col-xl-3 col-lg-3 col-md-3 col-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className={styles.productItem}>
                <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="/img/book/sach2.jpg" alt="" />
                    <div className="bg-warning fw-bold rounded text-white position-absolute end-0 top-0 m-2 px-3">
                        -16%
                    </div>
                </div>
                <div className="px-4 py-2">
                    <a className="d-block h6 mb-2" href="">Dummy book title tile 2</a>
                    <div className='d-flex flex-column'>
                        <span className="text-danger fw-bold me-1">$19.00</span>
                        <span className="text-body text-decoration-line-through">$29.00</span>
                    </div>
                </div>
                <div className={`${styles.ratingContainer} px-3 pb-2`}>
                    <div className={styles.ratings}>
                        <div className={styles.ratingBox}>
                            <div className={styles.rating} style={{ width: '60%' }}></div>
                        </div>
                        <div className={styles.amount}>
                            (0)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
