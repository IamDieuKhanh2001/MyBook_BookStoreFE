'use client'
import React from 'react'
import ProductReview from './ProductReview/ProductReview'
import ProductInfo from './ProductInfo/ProductInfo'
import ProductDesc from './ProductDesc/ProductDesc'
import { IBook } from '../../../../../types/IBook'

interface IProductTabProps {
    product: IBook
}
const ProductTab = (props: IProductTabProps) => {
    const { product } = props

    return (
        <>
            <nav>
                <div className="nav nav-tabs pt-3" id="nav-tab" role="tablist">
                    <button
                        className="nav-link active"
                        id="nav-detail-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-detail"
                        type="button"
                        role="tab"
                        aria-controls="nav-detail"
                        aria-selected="false"
                    >
                        Thông tin chi tiết
                    </button>
                    <button
                        className="nav-link"
                        id="nav-desc-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-desc"
                        type="button"
                        role="tab"
                        aria-controls="nav-desc"
                        aria-selected="true"
                    >
                        Mô tả
                    </button>
                    <button
                        className="nav-link"
                        id="nav-review-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-review"
                        type="button"
                        role="tab"
                        aria-controls="nav-review"
                        aria-selected="false"
                    >
                        Xem Đánh giá
                    </button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="nav-detail"
                    role="tabpanel"
                    aria-labelledby="nav-detail-tab"
                >
                    <ProductInfo product={product} />
                </div>
                <div
                    className="tab-pane fade"
                    id="nav-desc"
                    role="tabpanel"
                    aria-labelledby="nav-desc-tab"
                >
                    <ProductDesc desc={product.desc} />
                </div>
                <div
                    className="tab-pane fade"
                    id="nav-review"
                    role="tabpanel"
                    aria-labelledby="nav-review-tab"
                >
                    <ProductReview
                        totalReview={product.comment_info?.total_comment || 0}
                        productName={product.name}
                        isbnCode={product.isbn_code}
                    />
                </div>
            </div>
        </>
    )
}

export default ProductTab
