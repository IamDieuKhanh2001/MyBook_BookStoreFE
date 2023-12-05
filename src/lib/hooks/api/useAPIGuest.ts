import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import useSWRInfinite from 'swr/infinite';
import { IBook } from '../../../../types/IBook';
import useSWR from 'swr';
import { IFlashSaleEventDay } from '../../../../types/IFlashSaleEventDay';

const useAPIGuest = () => {
    const axiosAuth = useAxiosAuth()
    const URL_PREFIX = '/api'
    //Guest Access API
    const getBookFilterPaginated = (
        search: string = '',
        minPrice: string = '',
        maxPrice: string = '',
        orderBy: string = 'price,desc',
        limit: string = '8',
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

    const getBookSuggestion = (
        search: string = '',
        limit: string = '8',
    ) => {
        const getKey = (pageIndex: number, previousPageData: any) => {
            if (previousPageData && !previousPageData.length) {
                // Nếu trang trước đã trả về một trang trống, không cần gửi thêm yêu cầu
                return null;
            }
            const params = new URLSearchParams({
                search: search,
                page: (pageIndex + 1).toString(),
                limit: limit,
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
            search !== '' ? fetcher : null
        )
        const suggestData: IBook[] = (data?.flat() ?? []).filter(item => item !== undefined);
        const isReachedEnd = data && data[data.length - 1]?.length < limit

        return {
            suggestData: suggestData,
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

    const getParentCategoryDetail = (id: number = 0) => {
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
            `${URL_PREFIX}/category/detail/${id}`,
            id !== 0 ? fetcher : null,
            {
                revalidateOnReconnect: false,
            }
        )

        return {
            data: data ?? {},
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }

    const getBookFormList = () => {
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
            `${URL_PREFIX}/book-form`,
            fetcher,
            {
                revalidateOnReconnect: false,
            }
        )

        return {
            data: data ?? [],
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }

    const getLanguageList = () => {
        const fetcher = async (url: string) => {
            try {
                const response = await axiosAuth.get(url);
                return response.data;
            }
            catch (e) {
                console.error('Lỗi khi fetch:', e);
                return Promise.reject(e); // Trả về một Promise bị từ chối
            }
        }

        const { data, mutate, isLoading, error } = useSWR(
            `${URL_PREFIX}/book-lang`,
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

    const getProviderListPaginated = (limit: string = '5') => {
        const getKey = (pageIndex: number, previousPageData: any) => {
            if (previousPageData && !previousPageData.length) {
                // Nếu trang trước đã trả về một trang trống, không cần gửi thêm yêu cầu
                return null;
            }
            const params = new URLSearchParams({
                page: (pageIndex + 1).toString(),
                limit: limit,
            });
            return `${URL_PREFIX}/book-provider?${params.toString()}`;
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
        const paginatedData: IProvider[] = data?.flat() ?? []
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

    const getPublisherListPaginated = (limit: string = '5') => {
        const getKey = (pageIndex: number, previousPageData: any) => {
            if (previousPageData && !previousPageData.length) {
                // Nếu trang trước đã trả về một trang trống, không cần gửi thêm yêu cầu
                return null;
            }
            const params = new URLSearchParams({
                page: (pageIndex + 1).toString(),
                limit: limit,
            });
            return `${URL_PREFIX}/book-publisher?${params.toString()}`;
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
        const paginatedData: IPublisher[] = data?.flat() ?? []
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

    const getAuthorListPaginated = (limit: string = '5') => {
        const getKey = (pageIndex: number, previousPageData: any) => {
            if (previousPageData && !previousPageData.length) {
                // Nếu trang trước đã trả về một trang trống, không cần gửi thêm yêu cầu
                return null;
            }
            const params = new URLSearchParams({
                page: (pageIndex + 1).toString(),
                limit: limit,
            });
            return `${URL_PREFIX}/book-author?${params.toString()}`;
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
        const paginatedData: IAuthor[] = data?.flat() ?? []
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

    const getBookDetail = (isbnCode: string) => {
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
            `${URL_PREFIX}/book/${isbnCode}`,
            fetcher,
            {
                revalidateOnReconnect: false,
            }
        )
        const bookDetailData: IBook = data ?? {}
        return {
            data: bookDetailData,
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }

    const getProductCommentPaginated = (isbnCode: string, limit: string = '5') => {
        const getKey = (pageIndex: number, previousPageData: any) => {
            if (previousPageData && !previousPageData.length) {
                // Nếu trang trước đã trả về một trang trống, không cần gửi thêm yêu cầu
                return null;
            }
            const params = new URLSearchParams({
                page: (pageIndex + 1).toString(),
                limit: limit,
            });
            return `${URL_PREFIX}/book/comment/${isbnCode}?${params.toString()}`;
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
        const paginatedData: IProductComment[] = data?.flat() ?? []
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

    //flash sale 
    const getFlashSaleToday = () => {
        const fetcher = async (url: string) => {
            try {
                const response = await axiosAuth.get(url);
                return response;
            }
            catch (error) {
                console.error('Lỗi khi fetch:', error);
                return Promise.reject(error); // Trả về một Promise bị từ chối            }
            }
        }

        const { data, mutate, isLoading, error } = useSWR(
            `${URL_PREFIX}/flash-sale/today/accessable-periods`,
            fetcher,
            {
                revalidateOnReconnect: false,
            }
        )

        const flashSaleDayData: IFlashSaleEventDay = data?.data ?? {}
        return {
            data: flashSaleDayData ?? {},
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }


    return {
        getBookFilterPaginated,
        getBookDetail,
        getCategoryList,
        getParentCategoryDetail,
        getBookFormList,
        getLanguageList,
        getProviderListPaginated,
        getPublisherListPaginated,
        getAuthorListPaginated,
        getBookSuggestion,
        getProductCommentPaginated,
        getFlashSaleToday,
    }
}

export default useAPIGuest
