import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import { getSession } from 'next-auth/react'
import VoucherType from '@/enum/VoucherType'
import VoucherStatus from '@/enum/VoucherStatus'
import useSWR from 'swr'

const useAPIUserVoucher = () => {
    const URL_PREFIX = '/admin/voucher/'
    const axiosAuth = useAxiosAuth()

    const createVoucherGeneral = async (
        voucherName: string = 'unset name voucher',
        voucherCode: string,
        requireOrderMinPrice: number,
        discountPercentage: number,
        discountMaxPrice: number,
        limited: number = 1,
        desc: string = 'unset description',
        startDate: string,
        endDate: string,
        status: string = VoucherStatus.ACTIVE,
    ) => {
        try {
            const session = await getSession();
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const url = URL_PREFIX
            const body = {
                voucher_name: voucherName,
                voucher_type: VoucherType.GENERAL,
                voucher_code: voucherCode,
                require_order_min_price: requireOrderMinPrice,
                discount_percentage: discountPercentage,
                discount_max_price: discountMaxPrice,
                limited: limited,
                desc: desc,
                start_date: startDate,
                end_date: endDate,
                status: status,
            };
            const response = await axiosAuth.post(url, body, { headers })
            return response.data
        }
        catch (e: any) {
            throw e
        }
    }
    const createVoucherPersonalized = async (
        voucherName: string = 'unset name voucher',
        voucherCode: string,
        requireOrderMinPrice: number,
        discountPercentage: number,
        discountMaxPrice: number,
        limited: number = 1,
        desc: string = 'unset description',
        startDate: string,
        endDate: string,
        status: string = VoucherStatus.ACTIVE,
        userEmail: string,
    ) => {
        try {
            const session = await getSession();
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const url = URL_PREFIX
            const body = {
                voucher_name: voucherName,
                voucher_type: VoucherType.PERSONALIZED,
                voucher_code: voucherCode,
                require_order_min_price: requireOrderMinPrice,
                discount_percentage: discountPercentage,
                discount_max_price: discountMaxPrice,
                limited: limited,
                desc: desc,
                start_date: startDate,
                end_date: endDate,
                status: status,
                user_email: userEmail,
            };
            const response = await axiosAuth.post(url, body, { headers })
            return response.data
        }
        catch (e: any) {
            throw e
        }
    }
    const createVoucherMemberExclusive = async (
        voucherName: string = 'unset name voucher',
        voucherCode: string,
        requireOrderMinPrice: number,
        discountPercentage: number,
        discountMaxPrice: number,
        limited: number = 1,
        desc: string = 'unset description',
        startDate: string,
        endDate: string,
        status: string = VoucherStatus.ACTIVE,
        userLevelId: number,
    ) => {
        try {
            const session = await getSession();
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const url = URL_PREFIX
            const body = {
                voucher_name: voucherName,
                voucher_type: VoucherType.MEMBER_EXCLUSIVE,
                voucher_code: voucherCode,
                require_order_min_price: requireOrderMinPrice,
                discount_percentage: discountPercentage,
                discount_max_price: discountMaxPrice,
                limited: limited,
                desc: desc,
                start_date: startDate,
                end_date: endDate,
                status: status,
                user_level_id: userLevelId,
            };
            const response = await axiosAuth.post(url, body, { headers })
            return response.data
        }
        catch (e: any) {
            throw e
        }
    }

    const getVoucherGeneral = () => {
        const fetcher = async (url: string) => {
            try {
                const session = await getSession();
                const headers = {
                    Authorization: `Bearer ${session?.user.jwtToken}`,
                }
                const response = await axiosAuth.get(url, { headers });
                return response.data;
            }
            catch (error) {
                console.error('Lỗi khi fetch:', error);
                return Promise.reject(error); // Trả về một Promise bị từ chối            }
            }
        }

        const { data, mutate, isLoading, error } = useSWR(
            `${URL_PREFIX}general`,
            fetcher,
            {
                revalidateOnReconnect: false,
            }
        )

        const voucherItem: IVoucher[] = data?.data ?? []
        return {
            data: voucherItem ?? [], // nếu data = undefined sẽ là mảng rỗng
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }

    const getVoucherPersonalized = () => {
        const fetcher = async (url: string) => {
            try {
                const session = await getSession();
                const headers = {
                    Authorization: `Bearer ${session?.user.jwtToken}`,
                }
                const response = await axiosAuth.get(url, { headers });
                return response.data;
            }
            catch (error) {
                console.error('Lỗi khi fetch:', error);
                return Promise.reject(error); // Trả về một Promise bị từ chối            }
            }
        }

        const { data, mutate, isLoading, error } = useSWR(
            `${URL_PREFIX}personalized`,
            fetcher,
            {
                revalidateOnReconnect: false,
            }
        )

        const voucherItem: IVoucher[] = data?.data ?? []
        return {
            data: voucherItem ?? [], // nếu data = undefined sẽ là mảng rỗng
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }

    const getVoucherMemberExclusive = () => {
        const fetcher = async (url: string) => {
            try {
                const session = await getSession();
                const headers = {
                    Authorization: `Bearer ${session?.user.jwtToken}`,
                }
                const response = await axiosAuth.get(url, { headers });
                return response.data;
            }
            catch (error) {
                console.error('Lỗi khi fetch:', error);
                return Promise.reject(error); // Trả về một Promise bị từ chối            }
            }
        }

        const { data, mutate, isLoading, error } = useSWR(
            `${URL_PREFIX}member_exclusive`,
            fetcher,
            {
                revalidateOnReconnect: false,
            }
        )

        const voucherItem: IVoucher[] = data?.data ?? []
        return {
            data: voucherItem ?? [], // nếu data = undefined sẽ là mảng rỗng
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }

    return {
        createVoucherGeneral,
        createVoucherPersonalized,
        createVoucherMemberExclusive,
        getVoucherGeneral,
        getVoucherPersonalized,
        getVoucherMemberExclusive,
    }
}

export default useAPIUserVoucher
