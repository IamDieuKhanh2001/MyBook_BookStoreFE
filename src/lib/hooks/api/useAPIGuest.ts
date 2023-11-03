import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import useSWRInfinite from 'swr/infinite';
import { IBook } from '../../../../types/IBook';
import useSWR from 'swr';

const useAPIGuest = () => {
    const axiosAuth = useAxiosAuth()
    const URL_PREFIX = '/api'
    //Guest Access API
    const getBookFilterPaginated = (
        search: string = '',
        minPrice: string = '',
        maxPrice: string = '',
        orderBy: string = 'price,desc',
        limit: string = '5',
        langId: string = '',
        authorId: string = '',
        ccategoryId: string = '',
        publisherId: string = '',
        providerId: string = '',
        bookFormId: string = ''
    ) => {
        const getKey = (pageIndex: number, previousPageData: any) => {
            if (previousPageData && !previousPageData.length) {
                // Nếu trang trước đã trả về một trang trống, không cần gửi thêm yêu cầu
                return null;
            }
            const params = new URLSearchParams({
                search: search,
                min_price: minPrice,
                max_price: maxPrice,
                order_by: orderBy,
                page: (pageIndex + 1).toString(),
                limit: limit,
                lang_id: langId,
                author_id: authorId,
                ccategory_id: ccategoryId,
                publisher_id: publisherId,
                provider_id: providerId,
                book_form_id: bookFormId,
            });
            return `${URL_PREFIX}/book?${params.toString()}`;
        };
        const fetcher = async (url: string) => {
            try {
                const response = await axiosAuth.get(url);
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
        const paginatedData: IBook[] = data?.flat() ?? []
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

    const getCategoryList = () => {
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
            `${URL_PREFIX}/category`,
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
    return {
        getBookFilterPaginated,
        getCategoryList,
    }
}

export default useAPIGuest
