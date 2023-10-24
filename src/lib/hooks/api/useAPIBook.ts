import { getSession } from 'next-auth/react';
import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth';
import useSWR from 'swr';

const useAPIBook = () => {
    const axiosAuth = useAxiosAuth()
    const URL_PREFIX = '/admin/book/product'

    const getBookList = (page: number = 1, limit: number = 10) => {
        const params = [];
        params.push(`page=${page}`)
        params.push(`limit=${limit}`)
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
            `${URL_PREFIX}?${params.join('&')}`,
            fetcher,
            {
                revalidateOnReconnect: false,
                onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
                    // Never retry on 404.
                    if (error.status === 404) return

                    // Only retry up to 2 times.
                    if (retryCount >= 2) return

                    // Retry after 5 seconds.
                    setTimeout(() => revalidate({ retryCount }), 5000)
                }
            }
        )

        return {
            data: data?.data ?? [], // nếu data = undefined sẽ là mảng rỗng
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
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
            return response.data
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
    return {
        getBookList,
        createNewBook,
        deleteBook,
    }
}

export default useAPIBook
