"use client"
import ProductImgSlider from '@/components/product/ProductDetail/ProductImgSlider/ProductImgSlider'
import React, { useEffect, useState } from 'react'
import styles from './ProductDetail.module.scss'
import ProductTab from './ProductTab/ProductTab'
import FlashSaleCountDown from './FlashSaleCountDown/FlashSaleCountDown'
import useAPIGuest from '@/lib/hooks/api/useAPIGuest'
import { useRouter } from 'next/navigation'
import useAPIUserCart from '@/lib/hooks/api/useAPIUserCart'
import { toast } from 'react-toastify'
import { errorHandler } from '@/lib/utils/ErrorHandler'

interface IProductDetailProps {
    isbnCode: string
}
const ProductDetail = (props: IProductDetailProps) => {
    const router = useRouter()
    const { isbnCode } = props
    const { getBookDetail } = useAPIGuest()
    const { addBookToCart, getMyCartList } = useAPIUserCart()
    const { data: product, error, isLoading } = getBookDetail(isbnCode)
    const { mutate: mutateCartList } = getMyCartList()
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
            if (newValue > product.quantity) {
                setQuantity(product.quantity);
            } else {
                setQuantity(newValue);
            }
        }
    };

    const handleAddBookToCart = async () => {
        try {
            await addBookToCart(product.isbn_code, quantity)
            mutateCartList()
            toast.success("Thêm sản phẩm thành công")
            setQuantity(1)
        } catch (e) {
            errorHandler(e)
        }
    }

    useEffect(() => {
        if (error)
            router.push('/404')
    }, [error])

    return (
        <>
            <div className="container-xxl py-3 mt-2 section-container">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img position-relative overflow-hidden p-lg-5 pe-0">
                                <ProductImgSlider imgList={product.images} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 wow fadeIn" data-wow-delay="0.5s">
                            <h3 className="mb-2">{product?.name}</h3>
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
                            {product.flash_sale_info && (
                                <FlashSaleCountDown
                                    initialHours={initialHours}
                                    initialMinutes={initialMinutes}
                                    numProductSold={4}
                                    numProductTotal={10}
                                />
                            )}
                            <h2 className='d-flex align-items-center'>
                                {/* <span className="text-body text-decoration-line-through me-2">30.000</span> */}
                                <span className="text-primary me-1">
                                    {product.flash_sale_info ? (
                                        product.flash_sale_info.price_after_discount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
                                    ) : (
                                        product.price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
                                    )}
                                </span>
                                <span className="text-decoration-line-through me-1">
                                    {product.flash_sale_info && (
                                        product.flash_sale_info.original_price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
                                    )}
                                </span>
                                {product.flash_sale_info && (
                                    <span className={styles.discountPercent}>
                                        -{product.flash_sale_info.discount_percent}%
                                    </span>
                                )}
                            </h2>
                            <p><i className="fa fa-check text-primary me-3" />Đổi trả trong vòng 7 ngày</p>
                            <p><i className="fa fa-check text-primary me-3" />Cam kết sản phẩm chính hãng</p>
                            <p><i className="fa fa-check text-primary me-3" />Vận chuyển trên toàn quốc</p>

                            <div className={`input-group ${styles.qtyContainer}`}>
                                <div className="input-group-btn">
                                    <button
                                        className="btn btn-primary btn-minus"
                                        onClick={handleDecreaseQuantity}
                                        disabled={quantity === 1 ? true : false}
                                    >
                                        <i className="fa fa-minus" />
                                    </button>
                                </div>
                                <input
                                    type="text"
                                    className="form-control bg-light border-1 text-center"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    disabled={product.quantity === 0}
                                />
                                <div className="input-group-btn">
                                    <button
                                        className="btn btn-primary btn-plus"
                                        onClick={handleIncreaseQuantity}
                                        disabled={product.quantity === quantity || product.quantity === 0 ? true : false}
                                    >
                                        <i className="fa fa-plus" />
                                    </button>
                                </div>
                            </div>

                            <button
                                className="btn btn-primary rounded-pill py-3 px-5 mt-3"
                                onClick={handleAddBookToCart}
                                disabled={product.quantity > 0 ? false : true || isLoading}
                            >
                                <i className="fas fa-cart-plus me-3" />
                                Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-3 mt-2 section-container">
                <ProductTab product={product} />
            </div>
        </>
    )
}

export default ProductDetail
