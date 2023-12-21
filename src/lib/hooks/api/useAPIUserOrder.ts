import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import { getSession } from 'next-auth/react'
import PaymentMethod from '@/enum/PaymentMethod'
import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite'

const useAPIUserOrder = () => {
    const URL_PREFIX = '/user/order'
    const axiosAuth = useAxiosAuth()

    const getAllOrderPaginated = (
        limit: string = '10',
    ) => {
        const getKey = (pageIndex: number, previousPageData: any) => {
            if (previousPageData && !previousPageData.length) {
                return null;
            }
            const params = new URLSearchParams({
                page: (pageIndex + 1).toString(),
                limit: limit,
            });
            return `${URL_PREFIX}/my-order?${params.toString()}`;
        };
        const fetcher = async (url: string) => {
            try {
                const session = await getSession();
                const headers = {
                    Authorization: `Bearer ${session?.user.jwtToken}`,
                }
                const response = await axiosAuth.get(url, { headers });
                return response.data.data;
            } catch (error) {
                console.error('Lỗi khi fetch:', error);
                return Promise.reject(error); // Trả về một Promise bị từ chối
            }
        }
        const { data, size, setSize, error, isLoading, mutate } = useSWRInfinite(
            getKey,
            fetcher
        )
        const paginatedData: IMyOrder[] = data?.flat() ?? []
        const isReachedEnd = data && data[data.length - 1]?.length < limit

        return {
            paginatedData,
            isReachedEnd,
            size,
            setSize,
            mutate,
            isLoading,
            error,
        }
    }

    const getOrderByStatus = (
        orderStatus: string,
        limit: string = '10'
    ) => {
        const getKey = (pageIndex: number, previousPageData: any) => {
            if (previousPageData && !previousPageData.length) {
                return null;
            }
            const params = new URLSearchParams({
                page: (pageIndex + 1).toString(),
                limit: limit,
            });
            return `${URL_PREFIX}/my-order/status/${orderStatus}?${params.toString()}`;
        };
        const fetcher = async (url: string) => {
            try {
                const session = await getSession();
                const headers = {
                    Authorization: `Bearer ${session?.user.jwtToken}`,
                }
                const response = await axiosAuth.get(url, { headers });
                return response.data.data;
            } catch (error) {
                console.error('Lỗi khi fetch:', error);
                return Promise.reject(error); // Trả về một Promise bị từ chối
            }
        }
        const { data, size, setSize, error, isLoading, mutate } = useSWRInfinite(
            getKey,
            fetcher
        )
        const paginatedData: IMyOrder[] = data?.flat() ?? []
        const isReachedEnd = data && data[data.length - 1]?.length < limit

        return {
            paginatedData,
            isReachedEnd,
            size,
            setSize,
            mutate,
            isLoading,
            error,
        }
    }

    const getMyOrderStatistics = () => {
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
            `${URL_PREFIX}/statistic`,
            fetcher,
            {
                revalidateOnReconnect: false,
            }
        )

        const flashSalePeriodsData: IMyOrderStatistics[] = data?.data ?? []
        return {
            data: flashSalePeriodsData ?? [], // nếu data = undefined sẽ là mảng rỗng
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

    const cancelOrder = async (id: number) => {
        try {
            const session = await getSession();
            const url = `${URL_PREFIX}/cancel/${id}`
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.delete(url, { headers })
            return response;
        } catch (error: any) {
            throw error;
        }
    };

    const completeOrder = async (id: number) => {
        try {
            const session = await getSession();
            const url = `${URL_PREFIX}/completed/${id}`
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.put(url, undefined, { headers })
            return response;
        } catch (error: any) {
            throw error;
        }
    };

    return {
        getAllOrderPaginated,
        getOrderByStatus,
        getMyOrderStatistics,
        getOrderDetail,
        createOrder,
        updateOrCreateOrderReview,
        cancelOrder,
        completeOrder,
    }
}

export default useAPIUserOrder
