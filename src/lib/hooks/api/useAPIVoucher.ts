import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import { getSession } from 'next-auth/react'
import VoucherType from '@/enum/VoucherType'
import VoucherStatus from '@/enum/VoucherStatus'
import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite'

const useAPIVoucher = () => {
    const URL_PREFIX = '/admin/voucher'
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

    const getVoucherGeneral = (limit: string = '4') => {
        const getKey = (pageIndex: number, previousPageData: any) => {
            if (previousPageData && !previousPageData.length) {
                // Nếu trang trước đã trả về một trang trống, không cần gửi thêm yêu cầu
                return null;
            }
            const params = new URLSearchParams({
                page: (pageIndex + 1).toString(),
                limit: limit,
            });
            return `${URL_PREFIX}/general?${params.toString()}`;
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
        const paginatedData: IVoucher[] = data?.flat() ?? []
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

    const getVoucherPersonalized = (limit: string = '4') => {
        const getKey = (pageIndex: number, previousPageData: any) => {
            if (previousPageData && !previousPageData.length) {
                // Nếu trang trước đã trả về một trang trống, không cần gửi thêm yêu cầu
                return null;
            }
            const params = new URLSearchParams({
                page: (pageIndex + 1).toString(),
                limit: limit,
            });
            return `${URL_PREFIX}/personalized?${params.toString()}`;
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
        const paginatedData: IVoucher[] = data?.flat() ?? []
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
    const getVoucherMemberExclusive = (limit: string = '4') => {
        const getKey = (pageIndex: number, previousPageData: any) => {
            if (previousPageData && !previousPageData.length) {
                // Nếu trang trước đã trả về một trang trống, không cần gửi thêm yêu cầu
                return null;
            }
            const params = new URLSearchParams({
                page: (pageIndex + 1).toString(),
                limit: limit,
            });
            return `${URL_PREFIX}/member_exclusive?${params.toString()}`;
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
        const paginatedData: IVoucher[] = data?.flat() ?? []
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

    const getVoucherDetail = (voucherId: number) => {
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
            `${URL_PREFIX}/detail/${voucherId}`,
            fetcher,
            {
                revalidateOnReconnect: false,
            }
        )
        const voucherDetailData: IVoucher = data ?? {}
        return {
            data: voucherDetailData,
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
        getVoucherDetail,
    }
}

export default useAPIVoucher
