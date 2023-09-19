'use client'
import React from 'react'
import styles from './FlashSaleBody.module.scss'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ProductItem from '@/components/product/ProductList/ProductItem/ProductItem';

const FlashSaleBody = () => {

    const sliderOptions = {
        perPage: 5,
        perMove: 3,
        pagination: false,
        gap: '10px',
        height: '380px',
        breakpoints: {
            600: {
                perPage: 2,
                perMove: 2,
                height: '350px',
            },
            800: {
                perPage: 3,
                perMove: 2,
            },
            1000: {
                perPage: 4,
                perMove: 2,
            },
        }
    };
    return (
        <>
            <Splide options={sliderOptions}>
                <SplideSlide>
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
                </SplideSlide>
                <SplideSlide>
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
                </SplideSlide>
                <SplideSlide>
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
                </SplideSlide>
                <SplideSlide>
                    <div className={styles.productItem}>
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="/img/book/sach1.jpg" alt="" />
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
                </SplideSlide>
                <SplideSlide>
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
                </SplideSlide>
                <SplideSlide>
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
                </SplideSlide>
                <SplideSlide>
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
                </SplideSlide>
                <SplideSlide>
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
                </SplideSlide>
                <SplideSlide>
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
                </SplideSlide>
                <SplideSlide>
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
                </SplideSlide>
                <SplideSlide>
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
                </SplideSlide>
                <SplideSlide>
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
                </SplideSlide>
                <SplideSlide>
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
                </SplideSlide>
                <SplideSlide>
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
                </SplideSlide>
            </Splide>
        </>
    )
}

export default FlashSaleBody
