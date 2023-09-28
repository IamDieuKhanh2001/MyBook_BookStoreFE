'use client'
import React from 'react'
import styles from './page.module.scss'
import Link from 'next/link'

const CartPage = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <div className={styles.cart}>
                            <div className={styles.pageTitle}>
                                <div className={styles.pageTitleContainer}>
                                    <h1 className={styles.cartTitle}>
                                        Giỏ hàng
                                    </h1>
                                    <span className={styles.cartTitleNumItems}>
                                        (5 sản phẩm)
                                    </span>
                                </div>
                            </div>
                            <div className={`${styles.cartUIContent} row`}>
                                <div className='col-xl-8 col-md-12'>
                                    <div className={styles.headerCartItem}>
                                        <div className={styles.checkboxAllProduct}>
                                            <input type="checkbox" className={styles.checkboxAddCart} />
                                        </div>
                                        <div className={styles.chooseAllTitle}>
                                            <span>Chọn tất cả (
                                                <span>
                                                    5
                                                </span>
                                                sản phẩm)
                                            </span>
                                        </div>
                                        <div className={styles.qtyTitle}>
                                            Số lượng
                                        </div>
                                        <div className={styles.totalTitle}>
                                            Thành tiền
                                        </div>
                                        <div className={styles.trashTitle}></div>
                                    </div>
                                    <div className={styles.productCartLeft}>
                                        <div className={styles.itemProductCart}>
                                            <div className={styles.checkedProductCart}>
                                                <input type="checkbox" className={styles.checkboxAddCart} />
                                            </div>
                                            <div className={styles.imgProductCart}>
                                                <img className={styles.productImage} src="https://cdn0.fahasa.com/media/catalog/product//z/4/z4586028434491_71647a43468b2e70cdaa5b0b34a740b7.jpg" alt="img product" />
                                            </div>
                                            <div className={styles.groupProductInfo}>
                                                <div className={styles.infoProductCart}>
                                                    <div>
                                                        <h2>
                                                            Không Diệt Không Sinh Đừng Sợ Hãi (Độc Quyền Tại Fahasa)
                                                        </h2>
                                                    </div>
                                                    <div className={styles.itemOptions}>
                                                        <dd>
                                                            1 x  Bìa Cứng - Phiên Bản Đặc Biệt - Tặng Kèm Postcard (Độc Quyền Tại Fahasa)
                                                        </dd>
                                                        <dd>
                                                            1 x Quà Tặng Bút Chì Khắc Tên Sách - Không Diệt Không Sinh Đừng Sợ Hãi - Bìa Cứng - Phiên Bản Đặc Biệt
                                                        </dd>
                                                    </div>
                                                    <div className={styles.priceOriginal}>
                                                        <div className={styles.cartPrice}>
                                                            <div>
                                                                <span className={styles.price}>
                                                                    240.000 VND
                                                                </span>
                                                            </div>
                                                            <div className={styles.priceOld}>
                                                                <span className={styles.price}>
                                                                    290.000 VND
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.numberProductCart}>
                                                    <div className="input-group quantity" style={{ width: 130 }}>
                                                        <div className="input-group-btn">
                                                            <button
                                                                className="btn btn-primary btn-minus"
                                                            >
                                                                <i className="fa fa-minus" />
                                                            </button>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control bg-light border-1 text-center"
                                                            value={1}
                                                        />
                                                        <div className="input-group-btn">
                                                            <button
                                                                className="btn btn-primary btn-plus"
                                                            >
                                                                <i className="fa fa-plus" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className={styles.cartPriceTotal}>
                                                        <span className={styles.cartPrice}>
                                                            <span className={styles.price}>
                                                                240.000
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.btnRemoveCart}>
                                                <a className={styles.btnRemoveDestopCart}>
                                                    <i className="fa fa-trash" style={{ fontSize: '22px' }}></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className={styles.itemProductCart}>
                                            <div className={styles.checkedProductCart}>
                                                <input type="checkbox" className={styles.checkboxAddCart} />
                                            </div>
                                            <div className={styles.imgProductCart}>
                                                <img className={styles.productImage} src="https://cdn0.fahasa.com/media/catalog/product//z/4/z4586028434491_71647a43468b2e70cdaa5b0b34a740b7.jpg" alt="img product" />
                                            </div>
                                            <div className={styles.groupProductInfo}>
                                                <div className={styles.infoProductCart}>
                                                    <div>
                                                        <h2>
                                                            Không Diệt Không Sinh Đừng Sợ Hãi (Độc Quyền Tại Fahasa)
                                                        </h2>
                                                    </div>
                                                    <div className={styles.itemOptions}>
                                                        <dd>
                                                            1 x  Bìa Cứng - Phiên Bản Đặc Biệt - Tặng Kèm Postcard (Độc Quyền Tại Fahasa)
                                                        </dd>
                                                        <dd>
                                                            1 x Quà Tặng Bút Chì Khắc Tên Sách - Không Diệt Không Sinh Đừng Sợ Hãi - Bìa Cứng - Phiên Bản Đặc Biệt
                                                        </dd>
                                                    </div>
                                                    <div className={styles.priceOriginal}>
                                                        <div className={styles.cartPrice}>
                                                            <div>
                                                                <span className={styles.price}>
                                                                    240.000 VND
                                                                </span>
                                                            </div>
                                                            <div className={styles.priceOld}>
                                                                <span className={styles.price}>
                                                                    290.000 VND
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.numberProductCart}>
                                                    <div className="input-group quantity" style={{ width: 130 }}>
                                                        <div className="input-group-btn">
                                                            <button
                                                                className="btn btn-primary btn-minus"
                                                            >
                                                                <i className="fa fa-minus" />
                                                            </button>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control bg-light border-1 text-center"
                                                            value={1}
                                                        />
                                                        <div className="input-group-btn">
                                                            <button
                                                                className="btn btn-primary btn-plus"
                                                            >
                                                                <i className="fa fa-plus" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className={styles.cartPriceTotal}>
                                                        <span className={styles.cartPrice}>
                                                            <span className={styles.price}>
                                                                240.000
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.btnRemoveCart}>
                                                <a className={styles.btnRemoveDestopCart}>
                                                    <i className="fa fa-trash" style={{ fontSize: '22px' }}></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className={styles.itemProductCart}>
                                            <div className={styles.checkedProductCart}>
                                                <input type="checkbox" className={styles.checkboxAddCart} />
                                            </div>
                                            <div className={styles.imgProductCart}>
                                                <img className={styles.productImage} src="https://cdn0.fahasa.com/media/catalog/product//z/4/z4586028434491_71647a43468b2e70cdaa5b0b34a740b7.jpg" alt="img product" />
                                            </div>
                                            <div className={styles.groupProductInfo}>
                                                <div className={styles.infoProductCart}>
                                                    <div>
                                                        <h2>
                                                            Không Diệt Không Sinh Đừng Sợ Hãi (Độc Quyền Tại Fahasa)
                                                        </h2>
                                                    </div>
                                                    <div className={styles.priceOriginal}>
                                                        <div className={styles.cartPrice}>
                                                            <div>
                                                                <span className={styles.price}>
                                                                    240.000 VND
                                                                </span>
                                                            </div>
                                                            <div className={styles.priceOld}>
                                                                <span className={styles.price}>
                                                                    290.000 VND
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.numberProductCart}>
                                                    <div className="input-group quantity" style={{ width: 130 }}>
                                                        <div className="input-group-btn">
                                                            <button
                                                                className="btn btn-primary btn-minus"
                                                            >
                                                                <i className="fa fa-minus" />
                                                            </button>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control bg-light border-1 text-center"
                                                            value={1}
                                                        />
                                                        <div className="input-group-btn">
                                                            <button
                                                                className="btn btn-primary btn-plus"
                                                            >
                                                                <i className="fa fa-plus" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className={styles.cartPriceTotal}>
                                                        <span className={styles.cartPrice}>
                                                            <span className={styles.price}>
                                                                240.000
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.btnRemoveCart}>
                                                <a className={styles.btnRemoveDestopCart}>
                                                    <i className="fa fa-trash" style={{ fontSize: '22px' }}></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4 col-md-12'>
                                    <div className={styles.totalCartRight}>
                                        <div className={styles.blockTotalCart}>
                                            <div className={styles.blockTotalCartPage}>
                                                <div className={styles.totalCartPage}>
                                                    <div className={styles.titleCartPageLeft}>
                                                        Thành tiền
                                                    </div>
                                                    <div className={styles.numberCartPageRight}>
                                                        <span className={styles.price}>
                                                            277.000 VND
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={styles.totalCartPage}>
                                                    <div className={styles.titleCartPageLeft}>
                                                        Phí vận chuyển (Giao hàng tiêu chuẩn)
                                                    </div>
                                                    <div className={styles.numberCartPageRight}>
                                                        <span className={styles.price}>
                                                            19.000 đ
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={styles.borderProduct}></div>
                                                <div className={`${styles.totalCartPage}`}>
                                                    <div className={`${styles.titleCartPageLeft} ${styles.titleFinalTotal}`}>
                                                        Tổng Số Tiền (gồm VAT)
                                                    </div>
                                                    <div className={`${styles.numberCartPageRight} ${styles.finalPrice}`}>
                                                        <span className={styles.price}>
                                                            296.050 đ
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={styles.checkoutBtnContainer}>
                                                    <button className={styles.btnProceed}>
                                                        <span>
                                                            Thanh toán
                                                        </span>
                                                    </button>
                                                    <div className={styles.retailNote}>
                                                        <Link href={"#"}>(Giảm giá trên web chỉ áp dụng cho bán lẻ)</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage
