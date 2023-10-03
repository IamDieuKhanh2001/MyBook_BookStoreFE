import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import useSWR from 'swr'

const useAPIBookLanguage = () => {
    const axiosAuth = useAxiosAuth()

    //API get lang list
    const getLanguageList = () => {
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
            `/admin/book_language`,
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
            const url = "/admin/book_language"
            const body = {
                language_name: nameCreate,
            };
            const response = await axiosAuth.post(url, body)
            return response.data
        }
        catch (e: any) {
            throw new Error("Error create language: " + e.message);
        }
    }

    //api update by id
    const updateLanguageById = async (id: number, nameUpdate: string) => {
        try {
            const url = "/admin/book_language"
            const body = {
                language_id: id,
                language_name: nameUpdate,
            };
            const response = await axiosAuth.put(url, body)
            return response.data;
        } catch (error: any) {
            throw new Error("Error updating language: " + error.message);
        }
    };

    //api delete by id
    const deleteLanguageById = async (id: number) => {
        try {
            const url = `/admin/book_language/delete/${id}`
            const response = await axiosAuth.delete(url)
            return response;
        } catch (error: any) {
            throw new Error("Error delete language: " + error.message);
        }
    };

    //API get all soft delete item
    const getBookLanguageTrashList = () => {
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
            `/admin/book_language/trashed`,
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
            const url = `/admin/book_language/destroy/${id}`
            const response = await axiosAuth.delete(url)
            return response
        }
        catch (error: any) {
            throw new Error("Error deleting language: " + error.message);
        }
    }

    //API restore by id
    const restoreBookLanguageById = async (id: number) => {
        try {
            const url = `/admin/book_language/restore/${id}`
            const response = await axiosAuth.patch(url)
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
