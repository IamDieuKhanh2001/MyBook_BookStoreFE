import React from 'react'
import styles from './CartItem.module.scss'

const CartItem = () => {
    return (
        <>
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
        </>
    )
}

export default CartItem
