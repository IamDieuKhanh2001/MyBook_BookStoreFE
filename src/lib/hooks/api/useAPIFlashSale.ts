import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import { getSession } from 'next-auth/react'
import useSWRInfinite from 'swr/infinite'
import useSWR from 'swr'

const useAPIFlashSale = () => {
    const axiosAuth = useAxiosAuth()
    const URL_PREFIX = '/admin/flash-sale'

    const getFlashSaleDayListPaginated = (
        limit: string = '5',
    ) => {
        const getKey = (pageIndex: number, previousPageData: any) => {
            if (previousPageData && !previousPageData.length) {
                // Nếu trang trước đã trả về một trang trống, không cần gửi thêm yêu cầu
                return null;
            }
            const params = new URLSearchParams({
                page: (pageIndex + 1).toString(),
                limit: limit,
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
        const paginatedData: IFlashSaleEventDay[] = data?.flat() ?? []
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

    const createNewFlashSaleEvent = async (
        eventName: string,
        eventDate: string,// Format: dd-MM-yyyy
    ) => {
        try {
            const session = await getSession();
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const url = `${URL_PREFIX}/create`
            const body = {
                event_name: eventName,
                event_date: eventDate,
            };
            const response = await axiosAuth.post(url, body, { headers })
            return response
        }
        catch (e: any) {
            throw e
        }
    }

    const createNewFlashSalePeriod = async (
        flashSaleId: number,
        percentDiscount: number,
        timeStart: string, // Format: HH:mm:ss
        timeEnd: string, // Format: HH:mm:ss
    ) => {
        try {
            const session = await getSession();
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const url = `${URL_PREFIX}/hour/create`
            const body = {
                flash_sale_id: flashSaleId,
                percent_discount: percentDiscount,
                time_start: timeStart,
                time_end: timeEnd,
            };
            const response = await axiosAuth.post(url, body, { headers })
            return response
        }
        catch (e: any) {
            throw e
        }
    }

    const getFlashSalePeriods = (
        flashSaleId: number
    ) => {
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
                return Promise.reject(error); // Trả về một Promise bị từ chối            }
            }
        }

        const { data, mutate, isLoading, error } = useSWR(
            `${URL_PREFIX}/${flashSaleId}/hour`,
            fetcher,
            {
                revalidateOnReconnect: false,
            }
        )

        const flashSalePeriodsData: IFlashSalePeriod[] = data?.data ?? []
        return {
            data: flashSalePeriodsData ?? [], // nếu data = undefined sẽ là mảng rỗng
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }

    return {
        getFlashSaleDayListPaginated,
        createNewFlashSaleEvent,
        createNewFlashSalePeriod,
        getFlashSalePeriods,
    }
}

export default useAPIFlashSale
