import { getSession } from 'next-auth/react';
import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth';
import { IBook } from '../../../../types/IBook';
import useSWRInfinite from 'swr/infinite';
import useSWR from 'swr';

const useAPIBook = () => {
    const axiosAuth = useAxiosAuth()
    const URL_PREFIX = '/admin/book/product'
    //Admin Access API

    const getBookListPaginated = (
        limit: string = '10',
        search: string = '',
    ) => {
        const getKey = (pageIndex: number, previousPageData: any) => {
            if (previousPageData && !previousPageData.length) {
                // Nếu trang trước đã trả về một trang trống, không cần gửi thêm yêu cầu
                return null;
            }
            const params = new URLSearchParams({
                page: (pageIndex + 1).toString(),
                limit: limit,
                search: search,
            });
            return `${URL_PREFIX}?${params.toString()}`;
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

    const createNewBook = async (
        ccategoryId: number,
        isbnCode: string,
        name: string,
        price: number,
        quantity: number,
        desc: string,
        weight: number,
        numberOfPages: number,
        publishingYear: number,
        authorId: number,
        providerId: number,
        publisherId: number,
        langId: number,
        bookFormId: number,
    ) => {
        try {
            const session = await getSession();
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const url = URL_PREFIX
            const body = {
                ccategory_id: ccategoryId,
                isbn_code: isbnCode,
                name: name,
                price: price,
                quantity: quantity,
                desc: desc,
                weight: weight,
                number_of_pages: numberOfPages,
                publishing_year: publishingYear,
                author_id: authorId,
                provider_id: providerId,
                publisher_id: publisherId,
                language_id: langId,
                book_form_id: bookFormId
            };
            const response = await axiosAuth.post(url, body, { headers })
            return response
        }
        catch (e: any) {
            throw e
        }
    }

    const updateBookInfo = async (
        ccategoryId: number,
        isbnCode: string,
        name: string,
        price: number,
        quantity: number,
        desc: string,
        weight: number,
        numberOfPages: number,
        publishingYear: number,
        authorId: number,
        providerId: number,
        publisherId: number,
        langId: number,
        bookFormId: number,
    ) => {
        try {
            const session = await getSession();
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const url = URL_PREFIX
            const body = {
                ccategory_id: ccategoryId,
                isbn_code: isbnCode,
                name: name,
                price: price,
                quantity: quantity,
                desc: desc,
                weight: weight,
                number_of_pages: numberOfPages,
                publishing_year: publishingYear,
                author_id: authorId,
                provider_id: providerId,
                publisher_id: publisherId,
                language_id: langId,
                book_form_id: bookFormId
            };
            const response = await axiosAuth.put(url, body, { headers })
            return response
        }
        catch (e: any) {
            throw e
        }
    }
    const deleteBook = async (isbn_code: string) => {
        try {
            const session = await getSession();
            const url = `${URL_PREFIX}/delete/${isbn_code}`
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.delete(url, { headers })
            return response;
        } catch (error: any) {
            throw error;
        }
    };

    const getBookDetail = (isbnCode: string) => {
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
            `${URL_PREFIX}/${isbnCode}`,
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

    const addListImage = async (bodyFormData: FormData, isbnCode: string = '') => {
        try {
            const session = await getSession();
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
                "Content-Type": "multipart/form-data",
            }
            const response = await axiosAuth.post(
                `${URL_PREFIX}/image/${isbnCode}`,
                bodyFormData,
                { headers, maxBodyLength: Infinity, }
            )
            return response
        }
        catch (e: any) {
            throw e
        }
    }
    const deleteImg = async (bookImgID: number) => {
        try {
            const session = await getSession();
            const url = `${URL_PREFIX}/image/${bookImgID}`
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.delete(url, { headers })
            return response;
        } catch (error: any) {
            throw error;
        }
    };


    return {
        getBookListPaginated,
        createNewBook,
        updateBookInfo,
        deleteBook,
        getBookDetail,
        addListImage,
        deleteImg,
    }
}

export default useAPIBook
