"use client"
import React, { useEffect, useState } from 'react'
import styles from './Checkout.module.scss'
import AddressRadio from './AddressRadio/AddressRadio'

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
        </div>
    )
}

export default Checkout
