import React from 'react'
import styles from './CartItem.module.scss'

interface ICartItemProps {
    productData: ICartItem
}
const CartItem = (props: ICartItemProps) => {
    const { productData } = props

    const onImageError = (e: any) => {
        e.target.src = '/img/book/no-image.jpg'
    }

    console.log(productData)
    return (
        <>
            <div className={styles.itemProductCart}>
                <div className={styles.checkedProductCart}>
                    <input type="checkbox" className={styles.checkboxAddCart} />
                </div>
                <div className={styles.imgProductCart}>
                    <img
                        className={styles.productImage}
                        src={
                            productData.book_info.images && productData.book_info.images.length > 0 ?
                                productData.book_info.images[0].image_source : '/img/book/no-image.jpg'
                        }
                        onError={onImageError}
                        alt="img product"
                    />
                </div>
                <div className={styles.groupProductInfo}>
                    <div className={styles.infoProductCart}>
                        <div>
                            <h2>
                                {productData.book_info.name}
                            </h2>
                        </div>
                        <div className={styles.itemOptions}>
                            <dd>
                                Mã số: {productData.book_info.isbn_code}
                            </dd>
                            <dd>
                                Số lượng: {productData.quantity}
                            </dd>
                        </div>
                        <div className={styles.priceOriginal}>
                            <div className={styles.cartPrice}>
                                <div>
                                    <span className={styles.price}>
                                        {productData.book_info.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
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
                                    {productData.book_info.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
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
        </>
    )
}

export default CartItem
