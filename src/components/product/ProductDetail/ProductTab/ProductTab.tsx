'use client'
import React from 'react'
import styles from './ProductTab.module.scss'
import ProductReview from '../ProductReview/ProductReview'

const ProductTab = () => {
    return (
        <>
            <nav>
                <div className="nav nav-tabs pt-3" id="nav-tab" role="tablist">
                    <button
                        className="nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                    >
                        Mô tả
                    </button>
                    <button
                        className="nav-link"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                    >
                        Thông tin chi tiết
                    </button>
                    <button
                        className="nav-link"
                        id="nav-contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-contact"
                        type="button"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                    >
                        Xem Đánh giá
                    </button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                >
                    <h4 className="my-3">Mô tả tiêu đề</h4>
                    <p>
                        Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea.
                    </p>
                </div>
                <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                >
                    <h4 className="my-3">Thông tin tiêu đề</h4>
                    <p>
                        Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea.
                    </p>
                </div>
                <div
                    className="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                >
                    {/* tach component danh gia product  */}
                    <ProductReview />
                </div>
            </div>
        </>
    )
}

export default ProductTab
