import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import { getSession } from 'next-auth/react'
import useSWRInfinite from 'swr/infinite'

const useAPIUser = () => {
    const axiosAuth = useAxiosAuth()
    const URL_PREFIX = '/admin/user'

    const getUserListPaginated = (
        limit: string = '10',
        email: string = '',
        status: string = '',
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
        const paginatedData: UserInfo[] = data?.flat() ?? []
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

    const blockUser = async (userId: number) => {
        try {
            const session = await getSession();
            const url = `${URL_PREFIX}/locked/${userId}`
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.put(url, undefined, { headers })
            return response;
        } catch (error: any) {
            throw error;
        }
    };

    const unblockUser = async (userId: number) => {
        try {
            const session = await getSession();
            const url = `${URL_PREFIX}/unlocked/${userId}`
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
        getUserListPaginated,
        blockUser,
        unblockUser,
    }
}

export default useAPIUser
