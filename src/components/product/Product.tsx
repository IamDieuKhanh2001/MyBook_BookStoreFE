import React from 'react'
import ProductList from './ProductList'
import SortSideBar from './SortSideBar'

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
                    </div>
                    <div className='row'>
                        <div className='col-xl-3 col-sm-12 filterProduct'>
                            <SortSideBar />
                        </div>
                        <div className='col-xl-9 col-sm-12'>
                            <ProductList />
                        </div>
                    </div>
                    {/* Title End */}
                </div>
            </div>
            {/* Product End */}
        </>
    )
}

export default Product
