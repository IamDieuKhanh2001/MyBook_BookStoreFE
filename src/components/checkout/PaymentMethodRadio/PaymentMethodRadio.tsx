'use client'
import React from 'react'
import styles from './PaymentMethodRadio.module.scss'
import SectionTitle from '@/components/shared/sectionTitle/SectionTitle'

interface IPaymentMethodRadioProps {
    paymentMethods: IPaymentType[] | undefined
    selectedPaymentMethod: IPaymentType | undefined
    setSelectedPaymentMethod: React.Dispatch<React.SetStateAction<IPaymentType | undefined>>
}
const PaymentMethodRadio = (props: IPaymentMethodRadioProps) => {
    const { paymentMethods, selectedPaymentMethod, setSelectedPaymentMethod } = props

    const handleRadioChange = (event: any) => {
        const { checked, value } = event.target
        if (checked === true) {
            const currentSelect = paymentMethods?.find((item) => item.id === parseInt(value, 10));
            setSelectedPaymentMethod(currentSelect)
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <SectionTitle title="Phương thức thanh toán" />
                    <div className="section-container p-4">
                        {paymentMethods?.map((paymentMethod: IPaymentType) => (
                            <div className="form-check py-1" key={paymentMethod.id}>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id={`payment_id_${paymentMethod.id}`}
                                    value={paymentMethod.id}
                                    name='radioPaymentMethod'
                                    checked={selectedPaymentMethod?.id === paymentMethod.id}
                                    onChange={handleRadioChange}
                                />
                                <div className={styles.paymentNameWithIconContainer}>
                                    <div
                                        style={{
                                            backgroundImage: 'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_momopay.svg?q=10294")',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center center',
                                        }}
                                        className={styles.paymentIcon}
                                    ></div>
                                    <label
                                        className={`${styles.paymentName} form-check-label`}
                                        htmlFor={`payment_id_${paymentMethod.id}`}
                                    >
                                        {paymentMethod.name}
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentMethodRadio
