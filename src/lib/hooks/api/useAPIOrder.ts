import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import useSWRInfinite from 'swr/infinite'
import { getSession } from 'next-auth/react'
import useSWR from 'swr'

const useAPIOrder = () => {
    const axiosAuth = useAxiosAuth()
    const URL_PREFIX = '/admin/order'

    const getAllOrderPaginated = (
        limit: string = '10',
        email: string = '',
        status: string = '',
        payment_status: string = ''
    ) => {
        const getKey = (pageIndex: number, previousPageData: any) => {
            if (previousPageData && !previousPageData.length) {
                // Nếu trang trước đã trả về một trang trống, không cần gửi thêm yêu cầu
                return null;
            }
            const params = new URLSearchParams({
                page: (pageIndex + 1).toString(),
                limit: limit,
                email: email,
                status: status,
                payment_status: payment_status,
            });
            return `${URL_PREFIX}/all?${params.toString()}`;
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
        const paginatedData: IOrder[] = data?.flat() ?? []
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
            `${URL_PREFIX}/detail/${orderId}`,
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

    const confirmOrder = async (id: number) => {
        try {
            const session = await getSession();
            const url = `${URL_PREFIX}/confirmed/${id}`
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.put(url, undefined, { headers })
            return response;
        } catch (error: any) {
            throw error;
        }
    };

    const deliveringOrder = async (id: number) => {
        try {
            const session = await getSession();
            const url = `${URL_PREFIX}/delivering/${id}`
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.put(url, undefined, { headers })
            return response;
        } catch (error: any) {
            throw error;
        }
    };

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

    return {
        getAllOrderPaginated,
        getOrderDetail,
        confirmOrder,
        deliveringOrder,
        cancelOrder,
    }
}

export default useAPIOrder
