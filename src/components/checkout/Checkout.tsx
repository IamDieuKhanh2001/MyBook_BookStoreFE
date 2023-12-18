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
import OrderNote from './OrderNote/OrderNote'
import useAPIUserOrder from '@/lib/hooks/api/useAPIUserOrder'
import PaymentMethod from '@/enum/PaymentMethod'
import { errorHandler } from '@/lib/utils/ErrorHandler'

const Checkout = () => {
    const [selectedAddress, setSelectedAddress] = useState<IUserAddress>()
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<IPaymentType>()
    const [selectedVoucher, setSelectedVoucher] = useState<IVoucher>()
    const searchParams = useSearchParams();
    const router = useRouter()
    const productStateParam = searchParams && searchParams.get("state");
    const { preOrder } = useAPIUserCart()
    const [preOrderData, setPreOrderData] = useState<IPreOrder>()
    const [noteMessage, setNoteMessage] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const { createOrder } = useAPIUserOrder()
    const handlePreOrder = async (productCartIdList: number[], voucherCode?: string) => {
        try {
            const res = await preOrder(productCartIdList, voucherCode)
            console.log(res)
            setPreOrderData(res.data)
        }
        catch (e) {
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
            handlePreOrder(decodedData, selectedVoucher?.voucher_code)
        } catch (e: any) {
            toast.error(e)
            router.push('/404')
        }
    }, [selectedVoucher, productStateParam])

    const handleCheckoutProduct = async () => {
        if (!selectedAddress) {
            toast.error('Vui lòng chọn địa chỉ giao')
            return
        }
        if (!selectedPaymentMethod) {
            toast.error('Vui lòng chọn phương thức thanh toán')
            return
        }
        try {
            setLoading(true)
            const productIdList = preOrderData?.orders.carts.map(product => product.id) ?? [];
            const resData: ICreateOrderResponse = await createOrder(
                productIdList,
                selectedVoucher?.voucher_code,
                noteMessage,
                selectedAddress.id,
                selectedPaymentMethod.key
            )
            console.log(resData)
            setLoading(false)
            navigatePaymentSite(resData)
        } catch (e) {
            errorHandler(e)
            setLoading(false)
        }
    }

    const navigatePaymentSite = (resCreateOrder: ICreateOrderResponse) => {
        const { method, url } = resCreateOrder.payment
        switch (method) {
            case PaymentMethod.COD: {
                router.push('/payment/success')
                break
            }
            case PaymentMethod.PayPal:
            case PaymentMethod.VnPay: {
                url ? router.push(url) : router.push('/payment/fail')
                break
            }
            default: {
                router.push('/payment/fail')
            }
        }
    }

    useEffect(() => {
        console.log(preOrderData)
    }, [preOrderData])

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
            <AddVoucher
                voucherList={preOrderData?.user.voucher.hints}
                selectedVoucher={selectedVoucher}
                setSelectedVoucher={setSelectedVoucher}
                handleRecallPreOrder={handlePreOrder}
            />
            <RecheckOrder
                productOrderList={preOrderData?.orders.carts}
            />
            <BottomSideBarCheckout
                shipFee={preOrderData?.orders.price.shipFee}
                productPrice={preOrderData?.orders.price.productPrice}
                total={preOrderData?.orders.price.total}
                voucherSelectedName={selectedVoucher?.voucher_name}
                discountPrice={preOrderData?.orders.price.discountPrice}
                handleCheckoutProduct={handleCheckoutProduct}
                loadingCheckout={loading}
            />
            <OrderNote noteMessage={noteMessage} setNoteMessage={setNoteMessage} />
        </div>
    )
}

export default Checkout
