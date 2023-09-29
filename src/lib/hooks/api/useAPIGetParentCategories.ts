'use client'
import useSWR from 'swr';
import useAxiosAuth from '../utils/useAxiosAuth';

const useAPIGetParentCategories = () => {
    const axiosAuth = useAxiosAuth()

    const fetcher = async (url: string) => {
        try {
            const response = await axiosAuth.get(url);
            return response.data;
        } catch (error) {
            console.error('Lỗi khi fetch:', error);
            return Promise.reject(error); // Trả về một Promise bị từ chối
        }
    }

    const { data, mutate, isLoading, error } = useSWR(
        `/parent_controller/`,
        fetcher,
        {
            revalidateOnReconnect: false,
        }
    )

    return {
        data: data ?? [], // nếu data = undefined sẽ là mảng rỗng
        mutate: mutate,
        isLoading: !error && !data,
        isError: error,
    };
}

export default useAPIGetParentCategories;