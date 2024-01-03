import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import { getSession } from 'next-auth/react'
import useSWRInfinite from 'swr/infinite'

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

    return {
        getNotificationList,
    }
}

export default useAPINotification
