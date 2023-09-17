"use client"
import React, { useEffect, useState } from 'react'
import styles from './Checkout.module.scss'
import AddressRadio from './AddressRadio/AddressRadio'
import PaymentMethodRadio from './PaymentMethodRadio/PaymentMethodRadio'
import AddVoucher from './AddVoucher/AddVoucher'
import RecheckOrder from './RecheckOrder/RecheckOrder'
import BottomSideBarCheckout from './BottomSideBarCheckout/BottomSideBarCheckout'

const Checkout = () => {
    const [selectedAddressId, setSelectedAddressId] = useState(1)
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('paypal')

    const handleRadioChange = (event: any) => {
        setSelectedAddressId(event.target.value);
    };

    useEffect(() => {
        console.log(selectedAddressId)
    }, [selectedAddressId])

    return (
        <div className='container'>
            <AddressRadio
                selectedAddressId={selectedAddressId}
                handleRadioChange={handleRadioChange}
            />
            <PaymentMethodRadio />
            <AddVoucher />
            <RecheckOrder />
            <BottomSideBarCheckout />
        </div>
    )
}

export default Checkout
