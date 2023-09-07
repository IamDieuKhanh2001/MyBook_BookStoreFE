"use client"
import ClientHeader from '@/components/ClientHeader/ClientHeader'
import ProductImgSlider from '@/components/ProductImgSlider/ProductImgSlider'
import ClientLayout from '@/layouts/ClientLayout/ClientLayout'
import React, { useState } from 'react'
import { IconPlus, IconMinus } from '@tabler/icons-react'
import styles from './ProductDetail.module.scss'

const ProductDetail = () => {
    const [productImages, SetProductImages] = useState([
        '/img/book/sach1.jpg',
        '/img/book/sach2.jpg',
        '/img/book/sach3.jpg',
        '/img/book/sach4.jpg',
        '/img/book/sach5.jpg'

    ])
    const [quantity, setQuantity] = useState(1)

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
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img position-relative overflow-hidden p-5 pe-0">
                                <ProductImgSlider imgList={productImages} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="display-5 mb-2">Dummy Book Tilte</h1>
                            <div className="d-flex mb-3">
                                <div className="text-primary me-2">
                                    <small className="fas fa-star" />
                                    <small className="fas fa-star" />
                                    <small className="fas fa-star" />
                                    <small className="fas fa-star-half-alt" />
                                    <small className="far fa-star" />
                                </div>
                                <small className="pt-1">(99 Reviews)</small>
                            </div>
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
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
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
                            Đánh giá
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
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="my-3">1 review for "Dummy Book Tilte"</h4>
                                <div className={`${styles.media} mb-4`}>
                                    <img
                                        src="/img/testimonial-2.jpg"
                                        alt="Image"
                                        className="img-fluid mr-3 mt-1 rounded-circle"
                                        style={{ width: 45 }}
                                    />
                                    <div className={`${styles.mediaBody}`}>
                                        <h6>
                                            John Doe
                                            <small>
                                                {" "}
                                                - <i>01 Jan 2045</i>
                                            </small>
                                        </h6>
                                        <div className="text-primary mb-2">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star-half-alt" />
                                            <i className="far fa-star" />
                                        </div>
                                        <p>
                                            Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam
                                            ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod
                                            ipsum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h4 className="my-3">Leave a review</h4>
                                <small>
                                    Your email address will not be published. Required fields are marked *
                                </small>
                                <div className="d-flex my-3">
                                    <p className="mb-0 me-2">Your Rating * :</p>
                                    <div className="text-primary">
                                        <i className="far fa-star" />
                                        <i className="far fa-star" />
                                        <i className="far fa-star" />
                                        <i className="far fa-star" />
                                        <i className="far fa-star" />
                                    </div>
                                </div>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="message">Your Review *</label>
                                        <textarea
                                            id="message"
                                            cols={30}
                                            rows={5}
                                            className="form-control"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Your Name *</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Your Email *</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group mb-0">
                                        <input
                                            type="submit"
                                            defaultValue="Leave Your Review"
                                            className="btn btn-primary px-3 my-3"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tab description end  */}
            </div>
            {/* About End */}
        </>
    )
}

export default ProductDetail
