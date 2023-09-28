'use client'
import React from 'react'
import styles from './PaymentMethodRadio.module.scss'
import SectionTitle from '@/components/shared/sectionTitle/SectionTitle'

const PaymentMethodRadio = () => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <SectionTitle title="Phương thức thanh toán" />
                    <div className="section-container p-4">
                        <div className="form-check py-1">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="payment-method-1"
                                value={1}
                                defaultChecked={true}
                                name='radioPaymentMethod'
                            // onChange={handleRadioChange}
                            />
                            <div className={styles.paymentNameWithIconContainer}>
                                <div
                                    style={{
                                        backgroundImage: 'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_airpay.svg?q=102513")',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center center',
                                    }}
                                    className={styles.paymentIcon}
                                ></div>
                                <label className={`${styles.paymentName} form-check-label`} htmlFor="payment-method-1">
                                    MoMo
                                </label>
                            </div>
                        </div>
                        <div className="form-check py-1">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="payment-method-2"
                                value={1}
                                defaultChecked={false}
                                name='radioPaymentMethod'
                            // onChange={handleRadioChange}
                            />
                            <div className={styles.paymentNameWithIconContainer}>
                                <div
                                    style={{
                                        backgroundImage: 'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_momopay.svg?q=102513")',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center center',
                                    }}
                                    className={styles.paymentIcon}
                                ></div>
                                <label className={`${styles.paymentName} form-check-label`} htmlFor="payment-method-2">
                                    MoMo
                                </label>
                            </div>
                        </div>
                        <div className="form-check py-1">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="payment-method-3"
                                value={1}
                                defaultChecked={false}
                                name='radioPaymentMethod'
                            // onChange={handleRadioChange}
                            />
                            <div className={styles.paymentNameWithIconContainer}>
                                <div
                                    style={{
                                        backgroundImage: 'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_airpay.svg?q=102513")',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center center',
                                    }}
                                    className={styles.paymentIcon}
                                ></div>
                                <label className={`${styles.paymentName} form-check-label`} htmlFor="payment-method-3">
                                    MoMo
                                </label>
                            </div>
                        </div>
                        <div className="form-check py-1">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="payment-method-4"
                                value={1}
                                defaultChecked={false}
                                name='radioPaymentMethod'
                            // onChange={handleRadioChange}
                            />
                            <div className={styles.paymentNameWithIconContainer}>
                                <div
                                    style={{
                                        backgroundImage: 'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_cashondelivery.svg?q=102513")',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center center',
                                    }}
                                    className={styles.paymentIcon}
                                ></div>
                                <label className={`${styles.paymentName} form-check-label`} htmlFor="payment-method-4">
                                    Thanh toán bằng tiền mặt khi nhận hàng
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentMethodRadio
