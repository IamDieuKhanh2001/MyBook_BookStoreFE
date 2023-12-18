import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import { getSession } from 'next-auth/react'
import useSWRInfinite from 'swr/infinite'

const useAPIAuthor = () => {
    const URL_PREFIX = '/admin/book/author'
    const axiosAuth = useAxiosAuth()

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

    const getAuthorTrashListPaginated = (limit: string = '5') => {
        const getKey = (pageIndex: number, previousPageData: any) => {
            if (previousPageData && !previousPageData.length) {
                // Nếu trang trước đã trả về một trang trống, không cần gửi thêm yêu cầu
                return null;
            }
            const params = new URLSearchParams({
                page: (pageIndex + 1).toString(),
                limit: limit,
            });
            return `${URL_PREFIX}/trashed?${params.toString()}`;
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
        getAuthorListPaginated,
        getAuthorTrashListPaginated,
        createNewAuthor,
        updateAuthorById,
        deleteAuthorById,
        destroyAuthorById,
        restoreAuthorById,
    }
}

export default useAPIAuthor
