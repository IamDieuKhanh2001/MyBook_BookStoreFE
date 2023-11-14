import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import { getSession } from 'next-auth/react'
import PaymentMethod from '@/enum/PaymentMethod'

const useAPIUserOrder = () => {
    const URL_PREFIX = '/user/order'
    const axiosAuth = useAxiosAuth()

    const createOrder = async (
        ids: number[],
        voucherCode: string = '',
        customerNote: string = '',
        userAddressId: number,
        paymentMethod: string = PaymentMethod.COD
    ) => {
        try {
            const session = await getSession();
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const url = `${URL_PREFIX}/create`
            const body = {
                ids,
                voucherCode,
                customerNote,
                userAddressId,
                paymentMethod,
            };
            const response = await axiosAuth.post(url, body, { headers })
            return response.data
        }
        catch (e: any) {
            throw e
        }
    }
    return {
        createOrder,
    }
}

export default useAPIUserOrder
