import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import useSWR from 'swr'
import { getSession } from "next-auth/react";

const useAPIBookPublisher = () => {
    const URL_PREFIX = '/admin/book/publisher'
    const axiosAuth = useAxiosAuth()

    const getPublisherList = (page: number = 1, limit: number = 10) => {
        const fetcher = async (url: string) => {
            try {
                const session = await getSession();
                const headers = {
                    Authorization: `Bearer ${session?.user.jwtToken}`,
                }
                const params = {
                    page,
                    limit,
                }
                const response = await axiosAuth.get(url, { headers, params });
                return response.data;
            }
            catch (e) {
                throw new Error("Error fetch publisher list: " + error.message);
            }
        }

        const { data, mutate, isLoading, error } = useSWR(
            URL_PREFIX,
            fetcher,
            {
                revalidateOnReconnect: false,
            }
        )

        return {
            data: data?.data ?? [], // nếu data = undefined sẽ là mảng rỗng
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }

    const createNewPublisher = async (nameCreate: string) => {
        try {
            const session = await getSession();
            const body = {
                publisher_name: nameCreate,
            };
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.post(URL_PREFIX, body, { headers })
            return response.data
        }
        catch (e: any) {
            throw new Error("Error create publisher: " + e.message);
        }
    }

    //api update by id
    const updatePublisherById = async (id: number, nameUpdate: string) => {
        try {
            const session = await getSession();
            const body = {
                book_publisher_id: id,
                publisher_name: nameUpdate,
            };
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.put(URL_PREFIX, body, { headers })
            return response.data;
        } catch (error: any) {
            throw new Error("Error updating publisher: " + error.message);
        }
    };

    //api delete by id
    const deletePublisherById = async (id: number) => {
        try {
            const session = await getSession();
            const url = `${URL_PREFIX}/delete/${id}`
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.delete(url, { headers })
            return response;
        } catch (error: any) {
            throw new Error("Error delete publisher: " + error.message);
        }
    };

    //API get all soft delete item
    const getPublisherTrashList = () => {
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
    const destroyPublisherById = async (id: number) => {
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
            throw new Error("Error deleting publisher: " + error.message);
        }
    }

    //API restore by id
    const restorePublisherById = async (id: number) => {
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
            throw new Error("Error restore publisher: " + error.message);
        }
    }

    return {
        getPublisherList,
        getPublisherTrashList,
        createNewPublisher,
        updatePublisherById,
        deletePublisherById,
        destroyPublisherById,
        restorePublisherById,
    }
}

export default useAPIBookPublisher
