import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import useSWR from 'swr'
import { getSession } from 'next-auth/react'

const useAPIUserAddress = () => {
    const URL_PREFIX = '/user/info/address'
    const axiosAuth = useAxiosAuth()

    const getNonDefaultAddress = () => {
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
            `${URL_PREFIX}/not_default`,
            fetcher,
            {
                revalidateOnReconnect: false,
            }
        )

        return {
            addressNotDefaultList: data ?? [], // nếu data = undefined sẽ là mảng rỗng
            mutateAddressNotDefault: mutate,
            isLoadingNotDefaultList: !error && !data,
            addressNotDefaultError: error,
        }
    }

    const getDefaultAddress = () => {
        const fetcher = async (url: string) => {
            try {
                const session = await getSession();
                const headers = {
                    Authorization: `Bearer ${session?.user.jwtToken}`,
                }
                const response = await axiosAuth.get(url, { headers });
                return response;
            } catch (error) {
                console.error('Lỗi khi fetch:', error);
                return Promise.reject(error); // Trả về một Promise bị từ chối
            }
        }

        const { data, mutate, isLoading, error } = useSWR(
            `${URL_PREFIX}/default`,
            fetcher,
            {
                revalidateOnReconnect: false,
            }
        )

        if (data?.status !== 200) {
            return {
                addressDefault: undefined,
                mutateAddressDefault: mutate,
                isLoadingDefaultAddress: !error && !data,
                addressDefaultError: error,
            }
        }

        return {
            addressDefault: data?.data,
            mutateAddressDefault: mutate,
            isLoadingDefaultAddress: !error && !data,
            addressDefaultError: error,
        }
    }

    const setAddressDefaultById = async (id: number) => {
        try {
            const session = await getSession();
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.put(
                `${URL_PREFIX}/set_default/${id}`,
                undefined,
                { headers })
            return response;
        } catch (error: any) {
            throw new Error(error);
        }
    };

    const addNewAddress = async (
        recipientName: string,
        recipientPhone: string,
        street: string,
        wards_id: number,
        addressDefault: boolean = false
    ) => {
        try {
            const session = await getSession();
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const body = {
                recipient_name: recipientName,
                recipient_phone: recipientPhone,
                street: street,
                wards_id: wards_id,
                address_default: addressDefault
            }
            const response = await axiosAuth.post(
                `${URL_PREFIX}`,
                body,
                { headers })
            return response;
        } catch (error: any) {
            throw new Error(error);
        }
    };

    const updateAddress = async (
        addressId: number,
        recipientName: string,
        recipientPhone: string,
        street: string,
        wards_id: number,
        addressDefault: boolean = true
    ) => {
        try {
            const session = await getSession();
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const body = {
                recipient_name: recipientName,
                recipient_phone: recipientPhone,
                street: street,
                wards_id: wards_id,
                address_default: addressDefault
            }
            const response = await axiosAuth.put(
                `${URL_PREFIX}/${addressId}`,
                body,
                { headers })
            return response;
        } catch (error: any) {
            throw new Error(error);
        }
    };

    const deleteAddressById = async (id: number) => {
        try {
            const session = await getSession();
            const url = `${URL_PREFIX}/destroy/${id}`
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.delete(url, { headers })
            return response;
        } catch (error: any) {
            throw new Error("Error delete address: " + error.message);
        }
    };

    return {
        getNonDefaultAddress,
        getDefaultAddress,
        setAddressDefaultById,
        addNewAddress,
        updateAddress,
        deleteAddressById,
    }
}

export default useAPIUserAddress
