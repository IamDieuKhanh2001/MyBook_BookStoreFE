import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth';
import { getSession } from 'next-auth/react'
import useSWR from 'swr';

const useAPIAddress = () => {
    const axiosAuth = useAxiosAuth()

    const getProvinceList = () => {
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
            `/api/address/province`,
            fetcher,
            {
                revalidateOnReconnect: false,
            }
        )

        return {
            data: data ?? [], // nếu data = undefined sẽ là mảng rỗng
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }

    const getDistrictList = (provinceId: number) => {
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
            `/api/address/province/${provinceId}`,
            provinceId !== 0 ? fetcher : null,
            {
                revalidateOnReconnect: false,
            }
        )

        return {
            data: data ?? [], // nếu data = undefined sẽ là mảng rỗng
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }

    const getWardList = (districtId: number) => {
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
            `/api/address/district/${districtId}`,
            districtId !== 0 ? fetcher : null,
            {
                revalidateOnReconnect: false,
            }
        )

        return {
            data: data ?? [], // nếu data = undefined sẽ là mảng rỗng
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }

    const getDefaultAddress = async () => {
        try {
            const session = await getSession();
            const url = `/user/info/address/default`
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.get(url, { headers })
            return response;
        } catch (error: any) {
            throw new Error("Error get default address: " + error.message);
        }
    };
    return {
        getProvinceList,
        getDistrictList,
        getWardList,
        getDefaultAddress,
    }
}

export default useAPIAddress
