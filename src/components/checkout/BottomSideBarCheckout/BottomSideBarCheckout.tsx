'use client'
import React from 'react'
import styles from './BottomSideBarCheckout.module.scss'
import Link from 'next/link'

interface IBottomSideBarCheckoutProps {
    shipFee?: number
    productPrice?: number
    total?: number
    voucherSelectedName?: string
    discountPrice?: number
    handleCheckoutProduct: () => void
    loadingCheckout: boolean;
}
const BottomSideBarCheckout = (props: IBottomSideBarCheckoutProps) => {
    const { shipFee = 0, productPrice = 0, discountPrice = 0, total = 0, voucherSelectedName, handleCheckoutProduct, loadingCheckout } = props

    return (
        <>
            <div className={styles.bsidebar}>
                <div className={styles.bsidebarContent}>
                    <div className='container'>
                        <div className={styles.checkoutTotal}>
                            <div className={styles.totalAndSubTotal}>
                                <div>
                                    Thành tiền
                                </div>
                                <div>
                                    {productPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                </div>
                            </div>
                            {voucherSelectedName && (
                                <div className={styles.totalDiscount}>
                                    <div>
                                        Giảm giá (Nhập mã thành công - {voucherSelectedName})
                                    </div>
                                    <div>
                                        - {discountPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                    </div>
                                </div>
                            )}
                            <div className={styles.totalShiping}>
                                <div>
                                    Phí vận chuyển (Giao hàng tiêu chuẩn)
                                </div>
                                <div>
                                    {shipFee.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                </div>
                            </div>
                            <div className={styles.grandTotal}>
                                <div>
                                    Tổng Số Tiền (gồm VAT)
                                </div>
                                <div>
                                    {total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                </div>
                            </div>
                        </div>
                        <div className={styles.checkoutBottom}>
                            <div>
                                <Link className={styles.backToCart} href="/cart">
                                    <i className="fas fa-chevron-left"></i>
                                    Quay về giỏ hàng
                                </Link>
                            </div>
                            <div className={styles.btnAcceptPayContainer}>
                                <button
                                    type="button"
                                    className={`${styles.btnAcceptPayment} btn btn-danger`}
                                    onClick={handleCheckoutProduct}
                                    disabled={loadingCheckout}
                                >
                                    Xác nhận thanh toán
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomSideBarCheckout
