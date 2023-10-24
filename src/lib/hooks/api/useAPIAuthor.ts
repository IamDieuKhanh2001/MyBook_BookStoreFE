import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import { getSession } from 'next-auth/react'
import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite'

const useAPIAuthor = () => {
    const URL_PREFIX = '/admin/book/author'
    const axiosAuth = useAxiosAuth()
    const PAGE_SIZE = 4

    const getAuthorListPaginated = () => {
        // const params = [];
        // params.push(`page=${page}`)
        // params.push(`limit=${limit}`)
        // console.log("page " + page)
        // console.log("limit " + limit)
        const getKey = (pageIndex: number, previousPageData: any) => {
            pageIndex = pageIndex + 1
            if (previousPageData && !previousPageData.length) {
                // Nếu trang trước đã trả về một trang trống, không cần gửi thêm yêu cầu
                return null;
            }

            return `${URL_PREFIX}?page=${pageIndex}&limit=${PAGE_SIZE}`;
        };
        const fetcher = async (url: string) => {
            try {
                const session = await getSession();
                const headers = {
                    Authorization: `Bearer ${session?.user.jwtToken}`,
                }
                // const params = {
                //     page,
                //     limit,
                // }
                // console.log(params)
                const response = await axiosAuth.get(url, { headers });
                return response.data.data;
            } catch (error) {
                console.error('Lỗi khi fetch:', error);
                return Promise.reject(error); // Trả về một Promise bị từ chối
            }
        }
        const { data, size, setSize, error, isLoading, mutate } = useSWRInfinite(
            getKey,
            fetcher,
            { 
                revalidateFirstPage: false 
            }
        )
        const paginatedData = data?.flat() ?? []
        const isReachedEnd = data && data[data.length - 1]?.length < PAGE_SIZE
        console.log(paginatedData)
        console.log('size: ' + size)
        console.log('isReachedEnd: ' + isReachedEnd)

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

    const getAuthorList = (page: number = 1, limit: number = 10) => {
        const params = [];
        params.push(`page=${page}`)
        params.push(`limit=${limit}`)
        // console.log("page " + page)
        // console.log("limit " + limit)

        const fetcher = async (url: string) => {
            try {
                const session = await getSession();
                const headers = {
                    Authorization: `Bearer ${session?.user.jwtToken}`,
                }
                // const params = {
                //     page,
                //     limit,
                // }
                // console.log(params)
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

    const createNewAuthor = async (nameCreate: string) => {
        try {
            const session = await getSession();
            const body = {
                author_name: nameCreate,
            };
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.post(URL_PREFIX, body, { headers })
            return response.data
        }
        catch (e: any) {
            throw new Error("Error create author: " + e.message);
        }
    }

    const updateAuthorById = async (id: number, nameUpdate: string) => {
        try {
            const session = await getSession();
            const body = {
                book_author_id: id,
                author_name: nameUpdate,
            };
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.put(URL_PREFIX, body, { headers })
            return response.data;
        } catch (error: any) {
            throw new Error("Error updating author: " + error.message);
        }
    };

    const deleteAuthorById = async (id: number) => {
        try {
            const session = await getSession();
            const url = `${URL_PREFIX}/delete/${id}`
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.delete(url, { headers })
            return response;
        } catch (error: any) {
            throw new Error("Error delete author: " + error.message);
        }
    };

    const getAuthorTrashList = () => {
        const fetcher = async (url: string) => {
            const session = await getSession();
            const config = {
                headers: {
                    Authorization: `Bearer ${session?.user.jwtToken}`,
                }
            };
            try {
                const response = await axiosAuth.get(url, config);
                return response.data;
            } catch (error) {
                console.error('Lỗi khi fetch:', error);
                return Promise.reject(error); // Trả về một Promise bị từ chối
            }
        }

        const { data, mutate, isLoading, error } = useSWR(
            `${URL_PREFIX}/trashed`,
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

    //API delete by id
    const destroyAuthorById = async (id: number) => {
        try {
            const session = await getSession();
            const config = {
                headers: {
                    Authorization: `Bearer ${session?.user.jwtToken}`,
                }
            };
            const url = `${URL_PREFIX}/destroy/${id}`
            const response = await axiosAuth.delete(url, config)
            return response
        }
        catch (error: any) {
            throw new Error("Error deleting author: " + error.message);
        }
    }

    //API restore by id
    const restoreAuthorById = async (id: number) => {
        try {
            const session = await getSession();
            const url = `${URL_PREFIX}/restore/${id}`
            const config = {
                headers: {
                    Authorization: `Bearer ${session?.user.jwtToken}`,
                }
            };
            const response = await axiosAuth.patch(url, undefined, config)
            return response
        }
        catch (error: any) {
            throw new Error("Error restore author: " + error.message);
        }
    }

    return {
        getAuthorList,
        getAuthorListPaginated,
        getAuthorTrashList,
        createNewAuthor,
        updateAuthorById,
        deleteAuthorById,
        destroyAuthorById,
        restoreAuthorById,
    }
}

export default useAPIAuthor
