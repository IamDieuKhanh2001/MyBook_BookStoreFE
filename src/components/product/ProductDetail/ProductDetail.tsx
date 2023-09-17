"use client"
import ProductImgSlider from '@/components/product/ProductDetail/ProductImgSlider/ProductImgSlider'
import React, { useState } from 'react'
import styles from './ProductDetail.module.scss'
import ProductTab from './ProductTab/ProductTab'
import FlashSaleCountDown from './FlashSaleCountDown/FlashSaleCountDown'

const ProductDetail = () => {
    const [productImages, SetProductImages] = useState([
        '/img/book/sach1.jpg',
        '/img/book/sach2.jpg',
        '/img/book/sach3.jpg',
        '/img/book/sach4.jpg',
        '/img/book/sach5.jpg'

    ])
    const [quantity, setQuantity] = useState(1)
    const initialHours = 5; // Số giờ ban đầu
    const initialMinutes = 30; // Số phút ban đầu

    const handleIncreaseQuantity = () => {
        setQuantity((quantity) => (quantity + 1))
    }

    const handleDecreaseQuantity = () => {
        setQuantity((quantity) => (quantity - 1))
    }

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value, 10);
        if (!isNaN(newValue) && newValue >= 1) {
            setQuantity(newValue);
        }
    };

    return (
        <>
            {/* About Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 col-md-12 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img position-relative overflow-hidden p-lg-5 pe-0">
                                <ProductImgSlider imgList={productImages} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="display-5 mb-2">Dummy Book Tilte</h1>
                            <div className="d-flex mb-1">
                                <div className="text-primary me-2">
                                    <small className="fas fa-star" />
                                    <small className="fas fa-star" />
                                    <small className="fas fa-star" />
                                    <small className="fas fa-star-half-alt" />
                                    <small className="far fa-star" />
                                </div>
                                <small className="pt-1">(99 Reviews)</small>
                            </div>
                            <FlashSaleCountDown
                                initialHours={initialHours}
                                initialMinutes={initialMinutes}
                                numProductSold={4}
                                numProductTotal={10}
                            />
                            <h2>
                                <span className="text-body text-decoration-line-through me-2">30.000</span>
                                <span className="text-primary me-1">15.000 VND</span>
                            </h2>
                            <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempora atque et culpa, modi minima magni cupiditate mollitia est, laborum maxime id autem esse veniam eveniet voluptas? Error, numquam aperiam.</p>
                            <p><i className="fa fa-check text-primary me-3" />Đổi trả trong vòng 7 ngày</p>
                            <p><i className="fa fa-check text-primary me-3" />Cam kết sản phẩm chính hãng</p>
                            <p><i className="fa fa-check text-primary me-3" />Vận chuyển trên toàn quốc</p>

                            <div className="input-group quantity mr-3" style={{ width: 130 }}>
                                <div className="input-group-btn">
                                    <button
                                        className="btn btn-primary btn-minus"
                                        onClick={handleDecreaseQuantity}
                                    >
                                        <i className="fa fa-minus" />
                                    </button>
                                </div>
                                <input
                                    type="text"
                                    className="form-control bg-light border-1 text-center"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                />
                                <div className="input-group-btn">
                                    <button
                                        className="btn btn-primary btn-plus"
                                        onClick={handleIncreaseQuantity}
                                    >
                                        <i className="fa fa-plus" />
                                    </button>
                                </div>
                            </div>

                            <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">
                                <i className="fas fa-cart-plus me-3" />
                                Thêm vào giỏ hàng
                            </a>
                        </div>
                    </div>
                </div>
                {/* Tab description   */}
                <ProductTab />
                {/* Tab description end  */}
            </div>
            {/* About End */}
        </>
    )
}

export default ProductDetail
