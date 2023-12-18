'use client'
import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import useSWR from 'swr'
import { getSession } from "next-auth/react";

const useAPIBookLanguage = () => {
    const URL_PREFIX = '/admin/book/language'
    const axiosAuth = useAxiosAuth()
    //API get lang list
    const getLanguageList = () => {
        const fetcher = async (url: string) => {
            try {
                const session = await getSession();
                const headers = {
                    Authorization: `Bearer ${session?.user.jwtToken}`,
                }
                const response = await axiosAuth.get(url, { headers });
                return response.data;
            }
            catch (e) {
                throw new Error("Error fetch language: " + error.message);
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
            data: data ?? [], // nếu data = undefined sẽ là mảng rỗng
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }

    //API create new 
    const createNewLanguage = async (nameCreate: string) => {
        try {
            const session = await getSession();
            const body = {
                language_name: nameCreate,
            };
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.post(URL_PREFIX, body, { headers })
            return response.data
        }
        catch (e: any) {
            throw new Error("Error create language: " + e.message);
        }
    }

    //api update by id
    const updateLanguageById = async (id: number, nameUpdate: string) => {
        try {
            const session = await getSession();
            const body = {
                language_id: id,
                language_name: nameUpdate,
            };
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.put(URL_PREFIX, body, { headers })
            return response.data;
        } catch (error: any) {
            throw new Error("Error updating language: " + error.message);
        }
    };

    //api delete by id
    const deleteLanguageById = async (id: number) => {
        try {
            const session = await getSession();
            const url = `${URL_PREFIX}/delete/${id}`
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.delete(url, { headers })
            return response;
        } catch (error: any) {
            throw new Error("Error delete language: " + error.message);
        }
    };

    //API get all soft delete item
    const getBookLanguageTrashList = () => {
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
    const destroyBookLanguageById = async (id: number) => {
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
            throw new Error("Error deleting language: " + error.message);
        }
    }

    //API restore by id
    const restoreBookLanguageById = async (id: number) => {
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
            throw new Error("Error restore language: " + error.message);
        }
    }

    return {
        getLanguageList,
        createNewLanguage,
        updateLanguageById,
        deleteLanguageById,
        getBookLanguageTrashList,
        destroyBookLanguageById,
        restoreBookLanguageById,
    }
}

export default useAPIBookLanguage
