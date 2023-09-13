"use client"
import React from 'react'
import styles from './CartDropdown.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const CartDropdown = () => {
    const router = useRouter();

    const handleCartClick = () => {
        // Xử lý việc chuyển đến trang "/cart" khi nhấn icon cart trên nav
        router.push('/cart');
    }

    return (
        <>
            {/* cart dropdown  */}
            <div className={`${styles.navItem} dropdown`}>
                <div
                    className={`${styles.dropdownToggle} nav-link dropdown-toggle btn-sm-square ms-3`}
                    onClick={handleCartClick}
                    role="button"
                >
                    <small className="fa fa-shopping-bag text-body" />
                </div>
                <div className={`${styles.dropdownMenu} dropdown-menu dropdown-menu-start m-0`}>
                    <div className={styles.cartHeader}>
                        <i className="fa fa-shopping-bag me-2"></i>
                        <span className={styles.cartTitle}>Giỏ hàng</span>
                        <span className={`${styles.cartTitle} ms-2`}>(4)</span>
                    </div>
                    <div>
                        <ol className={styles.cartContent}>
                            <li className={styles.cartItem}>
                                <Link className={styles.itemImg} href="/link-product" title='Tiếng Anh 12 - Tập 2 - Sách Học Sinh (2023)'>
                                    <img
                                        src="https://cdn0.fahasa.com/media/catalog/product//9/7/9784065195154.jpg"
                                        alt="Sach 1"
                                        width={68}
                                        height={68}
                                    />
                                </Link>
                                <div className={styles.itemDetail}>
                                    <p className={styles.itemName}>
                                        <Link href={'/product-link'}>Tiếng Anh 12 - Tập 2 - Sách Học Sinh (2023)</Link>
                                    </p>
                                    <div className='mt-1'>
                                        <span className={styles.itemPrice}>37.000 VND</span>
                                        <span className={styles.itemQty}>x1</span>
                                    </div>
                                </div>
                            </li>
                            <li className={styles.cartItem}>
                                <Link className={styles.itemImg} href="/link-product" title='Tiếng Anh 12 - Tập 2 - Sách Học Sinh (2023)'>
                                    <img
                                        src="https://cdn0.fahasa.com/media/catalog/product//9/7/9784065195154.jpg"
                                        alt="Sach 1"
                                        width={68}
                                        height={68}
                                    />
                                </Link>
                                <div className={styles.itemDetail}>
                                    <p className={styles.itemName}>
                                        <Link href={'/product-link'}>Tiếng Anh 12 - Tập 2 - Sách Học Sinh (2023)</Link>
                                    </p>
                                    <div className='mt-1'>
                                        <span className={styles.itemPrice}>37.000 VND</span>
                                        <span className={styles.itemQty}>x1</span>
                                    </div>
                                </div>
                            </li>
                            <li className={styles.cartItem}>
                                <Link className={styles.itemImg} href="/link-product" title='Tiếng Anh 12 - Tập 2 - Sách Học Sinh (2023)'>
                                    <img
                                        src="https://cdn0.fahasa.com/media/catalog/product//9/7/9784065195154.jpg"
                                        alt="Sach 1"
                                        width={68}
                                        height={68}
                                    />
                                </Link>
                                <div className={styles.itemDetail}>
                                    <p className={styles.itemName}>
                                        <Link href={'/product-link'}>Tiếng Anh 12 - Tập 2 - Sách Học Sinh (2023)</Link>
                                    </p>
                                    <div className='mt-1'>
                                        <span className={styles.itemPrice}>37.000 VND</span>
                                        <span className={styles.itemQty}>x1</span>
                                    </div>
                                </div>
                            </li>
                            <li className={styles.cartItem}>
                                <Link className={styles.itemImg} href="/link-product" title='Tiếng Anh 12 - Tập 2 - Sách Học Sinh (2023)'>
                                    <img
                                        src="https://cdn0.fahasa.com/media/catalog/product//9/7/9784065195154.jpg"
                                        alt="Sach 1"
                                        width={68}
                                        height={68}
                                    />
                                </Link>
                                <div className={styles.itemDetail}>
                                    <p className={styles.itemName}>
                                        <Link href={'/product-link'}>Tiếng Anh 12 - Tập 2 - Sách Học Sinh (2023)</Link>
                                    </p>
                                    <div className='mt-1'>
                                        <span className={styles.itemPrice}>37.000 VND</span>
                                        <span className={styles.itemQty}>x1</span>
                                    </div>
                                </div>
                            </li>
                            <li className={styles.cartItem}>
                                <Link className={styles.itemImg} href="/link-product" title='Tiếng Anh 12 - Tập 2 - Sách Học Sinh (2023)'>
                                    <img
                                        src="https://cdn0.fahasa.com/media/catalog/product//9/7/9784065195154.jpg"
                                        alt="Sach 1"
                                        width={68}
                                        height={68}
                                    />
                                </Link>
                                <div className={styles.itemDetail}>
                                    <p className={styles.itemName}>
                                        <Link href={'/product-link'}>Tiếng Anh 12 - Tập 2 - Sách Học Sinh (2023)</Link>
                                    </p>
                                    <div className='mt-1'>
                                        <span className={styles.itemPrice}>37.000 VND</span>
                                        <span className={styles.itemQty}>x1</span>
                                    </div>
                                </div>
                            </li>
                            <li className={styles.cartItem}>
                                <Link className={styles.itemImg} href="/link-product" title='Tiếng Anh 12 - Tập 2 - Sách Học Sinh (2023)'>
                                    <img
                                        src="https://cdn0.fahasa.com/media/catalog/product//9/7/9784065195154.jpg"
                                        alt="Sach 1"
                                        width={68}
                                        height={68}
                                    />
                                </Link>
                                <div className={styles.itemDetail}>
                                    <p className={styles.itemName}>
                                        <Link href={'/product-link'}>Tiếng Anh 12 - Tập 2 - Sách Học Sinh (2023)</Link>
                                    </p>
                                    <div className='mt-1'>
                                        <span className={styles.itemPrice}>37.000 VND</span>
                                        <span className={styles.itemQty}>x1</span>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                    <div className={styles.cartFooter}>
                        <div className={styles.cartFooterLeft}>
                            <div className={styles.priceTotalTitle}>Tổng cộng</div>
                            <div>
                                <span className={styles.priceTotal}>326.000 VND</span>
                            </div>
                        </div>
                        <Link className={`btn ${styles.btnRedirectToCart}`} href={'/cart'}>Xem giỏ hàng</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartDropdown
