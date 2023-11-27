import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import { getSession } from 'next-auth/react'
import PaymentMethod from '@/enum/PaymentMethod'
import useSWR from 'swr'

const useAPIUserOrder = () => {
    const URL_PREFIX = '/user/order'
    const axiosAuth = useAxiosAuth()

    const getOrderList = () => {
        const fetcher = async (url: string) => {
            try {
                const session = await getSession();
                const headers = {
                    Authorization: `Bearer ${session?.user.jwtToken}`,
                }
                const response = await axiosAuth.get(url, { headers });
                return response;
            }
            catch (error) {
                console.error('Lỗi khi fetch:', error);
                return Promise.reject(error); // Trả về một Promise bị từ chối            }
            }
        }

        const { data, mutate, isLoading, error } = useSWR(
            `${URL_PREFIX}/my-order`,
            fetcher,
            {
                revalidateOnReconnect: false,
            }
        )

        const orderList: IOrder[] = data?.data ?? []
        return {
            data: orderList ?? [], // nếu data = undefined sẽ là mảng rỗng
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }

    const getOrderDetail = (orderId: number) => {
        const fetcher = async (url: string) => {
            try {
                const session = await getSession();
                const headers = {
                    Authorization: `Bearer ${session?.user.jwtToken}`,
                }
                const response = await axiosAuth.get(url, { headers });
                return response.data;
            } catch (error) {
                console.error('Lỗi khi fetch:', error);
                return Promise.reject(error); // Trả về một Promise bị từ chối
            }
        }

        const { data, mutate, isLoading, error } = useSWR(
            `${URL_PREFIX}/my-order/${orderId}`,
            fetcher,
            {
                revalidateOnReconnect: false,
            }
        )
        const orderDetailData: IOrder = data ?? {}
        return {
            data: orderDetailData,
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }

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

    const updateOrCreateOrderReview = async (
        orderId: number,
        rateStar: number = 1,
        reviewComment: string = '',
    ) => {
        try {
            const session = await getSession();
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const url = `${URL_PREFIX}/review/write`
            const body = {
                order_id: orderId,
                rate_star: rateStar,
                review_comment: reviewComment,
            };
            const response = await axiosAuth.post(url, body, { headers })
            return response.data
        }
        catch (e: any) {
            throw e
        }
    }

    return {
        getOrderList,
        getOrderDetail,
        createOrder,
        updateOrCreateOrderReview,
    }
}

export default useAPIUserOrder
