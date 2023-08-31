"use client"
import React from 'react'
import SortBar from './SortBar'
import ProductList from './ProductList'

const Product = () => {
    return (
        <>
            {/* Product Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    {/* Title start */}
                    <div className="row g-0 gx-5 align-items-end">
                        <div className="col-lg-6">
                            <div className="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                                <h1 className="display-5 mb-3">Our Products</h1>
                                <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                            </div>
                        </div>
                        <SortBar />
                    </div>
                    {/* Title End */}
                    <ProductList />
                </div>
            </div>
            <div className="col-12 text-center">
                {/* Go to product list page  */}
                <a className="btn btn-primary rounded-pill py-3 px-5" href="">Browse More Products</a>
            </div>
            {/* Product End */}
        </>
    )
}

export default Product
