"use client"
import React from 'react'
import styles from "./ProductItem.module.scss"

const ProductItem = () => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className={styles.productItem}>
                <div className="position-relative bg-light overflow-hidden">
                    <img className="img-fluid w-100" src="/img/book/sach2.jpg" alt="" />
                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                </div>
                <div className="text-center p-4">
                    <a className="d-block h5 mb-2" href="">Sach 2</a>
                    <span className="text-primary me-1">$19.00</span>
                    <span className="text-body text-decoration-line-through">$29.00</span>
                </div>
                <div className="d-flex border-top">
                    <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2" />View detail</a>
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
