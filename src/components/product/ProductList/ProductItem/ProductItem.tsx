"use client"
import React from 'react'
import styles from "./ProductItem.module.scss"

const ProductItem = () => {
    return (
        // col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3
        <div className="col-xl-3 col-lg-3 col-md-3 col-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className={styles.productItem}>
                <div className="position-relative bg-light overflow-hidden">
                    <img className="img-fluid w-100" src="/img/book/sach2.jpg" alt="" />
                    <div className="bg-warning fw-bold rounded text-white position-absolute end-0 top-0 m-2 px-3">
                        -16%
                    </div>
                </div>
                <div className="px-4 py-2">
                    <a className="d-block h6 mb-2" href="">Sach 2</a>
                    <span className="text-primary me-1">$19.00</span>
                    <span className="text-body text-decoration-line-through">$29.00</span>
                </div>
                <div className="d-flex border-top">
                    <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2" />Detail</a>
                    </small>
                    <small className="w-50 text-center py-2">
                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2" />Add to cart</a>
                    </small>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
