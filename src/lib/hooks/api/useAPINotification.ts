import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import { getSession } from 'next-auth/react'
import useSWRInfinite from 'swr/infinite'
import useSWR from 'swr'

const useAPINotification = () => {
    const URL_PREFIX = '/user/notification'
    const axiosAuth = useAxiosAuth()

    const getNotificationList = (page: number = 1, limit: number = 4) => {
        const getKey = (pageIndex: number, previousPageData: any) => {
            if (previousPageData && !previousPageData.length) {
                // Nếu trang trước đã trả về một trang trống, không cần gửi thêm yêu cầu
                return null;
            }
            const params = new URLSearchParams({
                page: (pageIndex + 1).toString(),
                limit: limit.toString(),
            });
            return `${URL_PREFIX}?${params.toString()}`;
        };
        const fetcher = async (url: string) => {
            try {
                const session = await getSession();
                const headers = {
                    Authorization: `Bearer ${session?.user.jwtToken}`,
                }
                const response = await axiosAuth.get(url, { headers });
                // return response.data;
                return response.data.data;
            } catch (error) {
                console.error('Lỗi khi fetch:', error);
                return Promise.reject(error); // Trả về một Promise bị từ chối
            }
        }
        const { data, size, setSize, error, isLoading, mutate } = useSWRInfinite(
            getKey,
            fetcher,
            {
                refreshInterval: 3000,
            }
        )
        const paginatedData: INotification[] = data?.flat() ?? []
        const isReachedEnd = data && data[data.length - 1]?.length < limit
        // const paginatedData: INotification[] = data?.flatMap(item => item.data) ?? [];
        // const isReachedEnd = data && data[data.length - 1]?.data?.length < limit;

        // const total = data ? data[0]?.meta?.total : 0;// Trả về trường total từ json meta

        return {
            paginatedData,
            isReachedEnd,
            // total, // Trả về trường total từ dữ liệu trả về
            size,
            setSize,
            mutate,
            isLoading,
            error,
        }
    }

    const getNotiStatistics = () => {
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
                return Promise.reject(error);
            }
        }

        const { data, mutate, isLoading, error } = useSWR(
            `${URL_PREFIX}/statistics`,
            fetcher,
            {
                refreshInterval: 3000,
            }
        )

        const notificationStatistics: INotificationStatistics = data?.data ?? {}
        return {
            data: notificationStatistics ?? {}, // nếu data = undefined sẽ là mảng rỗng
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }

    const checkReadedById = async (notificationId: number) => {
        try {
            const session = await getSession();
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const url = `${URL_PREFIX}/read/${notificationId}`
            const response = await axiosAuth.put(url, undefined, { headers })
            return response.data
        }
        catch (e: any) {
            throw e
        }
    }

    const checkReadAll = async () => {
        try {
            const session = await getSession();
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const url = `${URL_PREFIX}/read-all`
            const response = await axiosAuth.put(url, undefined, { headers })
            return response.data
        }
        catch (e: any) {
            throw e
        }
    }

    return {
        getNotificationList,
        getNotiStatistics,
        checkReadAll,
        checkReadedById,
    }
}

export default useAPINotification
