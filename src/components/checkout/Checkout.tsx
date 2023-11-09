"use client"
import React, { useEffect, useState } from 'react'
import styles from './Checkout.module.scss'
import AddressRadio from './AddressRadio/AddressRadio'
import PaymentMethodRadio from './PaymentMethodRadio/PaymentMethodRadio'
import AddVoucher from './AddVoucher/AddVoucher'
import RecheckOrder from './RecheckOrder/RecheckOrder'
import BottomSideBarCheckout from './BottomSideBarCheckout/BottomSideBarCheckout'
import { useRouter, useSearchParams } from 'next/navigation'
import LZString from 'lz-string'
import useAPIUserCart from '@/lib/hooks/api/useAPIUserCart'
import { toast } from 'react-toastify'

const Checkout = () => {
    const [selectedAddress, setSelectedAddress] = useState<IUserAddress>()
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<IPaymentType>()
    const searchParams = useSearchParams();
    const router = useRouter()
    const productStateParam = searchParams && searchParams.get("state");
    const { preOrder } = useAPIUserCart()
    const [preOrderData, setPreOrderData] = useState<IPreOrder>()

    useEffect(() => {
        console.log(selectedAddress)
    }, [selectedAddress])

    useEffect(() => {
        console.log(selectedPaymentMethod)
    }, [selectedPaymentMethod])

    const handlePreOrder = async (productCartIdList: number[]) => {
        const res = await preOrder(productCartIdList)
        if (res.status === 200) {
            setPreOrderData(res.data)
        } else {
            router.push('/404')
        }
    }

    useEffect(() => {
        if (!productStateParam) {
            router.push('/404')
            return
        }
        try {
            const decodedData: number[] = JSON.parse(LZString.decompressFromBase64(productStateParam));
            handlePreOrder(decodedData)
        } catch (e: any) {
            toast.error(e)
            router.push('/404')
        }
    }, [productStateParam])

    const handleCheckoutProduct = () => {
        if(!selectedAddress) {
            toast.error('Vui lòng chọn địa chỉ giao')
            return 
        }
        if(!selectedPaymentMethod) {
            toast.error('Vui lòng chọn phương thức thanh toán')
            return 
        }
        toast.success('Đang thanh toán')

    }

    return (
        <div className='container'>
            <AddressRadio
                selectedAddress={selectedAddress}
                setSelectedAddress={setSelectedAddress}
            />
            <PaymentMethodRadio
                paymentMethods={preOrderData?.paymentMethods}
                selectedPaymentMethod={selectedPaymentMethod}
                setSelectedPaymentMethod={setSelectedPaymentMethod}
            />
            <AddVoucher />
            <RecheckOrder
                productOrderList={preOrderData?.orders.carts}
            />
            <BottomSideBarCheckout
                shipFee={preOrderData?.orders.price.shipFee}
                productPrice={preOrderData?.orders.price.productPrice}
                total={preOrderData?.orders.price.total}
                handleCheckoutProduct={handleCheckoutProduct}
            />
        </div>
    )
}

export default Checkout
