import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import { getSession } from 'next-auth/react'
import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite'

const useAPIStatistic = () => {
    const URL_PREFIX = '/admin/statistic'
    const axiosAuth = useAxiosAuth()

    const getYearStatistic = (year: number) => {
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
            `${URL_PREFIX}/revenue?year=${year}`,
            fetcher,
            {
                revalidateOnReconnect: false,
            }
        )
        const monthStatistics: IMonthStatistics[] = data

        return {
            data: monthStatistics ?? [], // nếu data = undefined sẽ là mảng rỗng
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }

    const getRecentTransactions = (limit: number = 5) => {
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
            `${URL_PREFIX}/recent-transactions?limit=${limit}`,
            fetcher,
            {
                revalidateOnReconnect: false,
            }
        )
        const recentTransactions: IRecentTransaction[] = data

        return {
            data: recentTransactions ?? [], // nếu data = undefined sẽ là mảng rỗng
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }

    const getProductStatistics = (
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
            return `${URL_PREFIX}/top-product?${params.toString()}`;
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
        const paginatedData: IProductStatistics[] = data?.flat() ?? []
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

    const getMonthStatisticDetail = () => {
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
            `${URL_PREFIX}/revenue/current-month`,
            fetcher,
            {
                revalidateOnReconnect: false,
            }
        )
        const monthStatistics: IMonthStatisticsDetail = data

        return {
            data: monthStatistics ?? {}, // nếu data = undefined sẽ là mảng rỗng
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }

    const getCompareYear = (fromYear: number, toYear: number) => {
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
            `${URL_PREFIX}/revenue/compare-year?current_year=${fromYear}&previous_year=${toYear}`,
            fetcher,
            {
                revalidateOnReconnect: false,
            }
        )
        const dataStatistics: ICompareYear = data

        return {
            data: dataStatistics ?? {}, // nếu data = undefined sẽ là mảng rỗng
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }

    return {
        getYearStatistic,
        getProductStatistics,
        getRecentTransactions,
        getMonthStatisticDetail,
        getCompareYear,
    }
}

export default useAPIStatistic
