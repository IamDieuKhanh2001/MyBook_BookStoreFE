import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import { getSession, useSession } from 'next-auth/react'
import useSWR from 'swr'
import { IBook } from '../../../../types/IBook'

const useAPIRecommendation = () => {
    const axiosAuth = useAxiosAuth()
    const URL_PREFIX = '/api/recommendation'

    const getRecommentProducts = () => {
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
            URL_PREFIX,
            fetcher,
            {
                revalidateOnReconnect: false,
            }
        )
        const recommnentData: IBook[] = data ?? []

        return {
            data: recommnentData ?? [],
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }
    return {
        getRecommentProducts,
    }
}

export default useAPIRecommendation
