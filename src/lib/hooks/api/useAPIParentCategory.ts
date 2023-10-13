import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import useSWR from 'swr'

//custom hook for calling APIS for parent category
const useAPIParentCategory = () => {
    const URL_PREFIX = '/admin/category/parent'
    const axiosAuth = useAxiosAuth()

    //closures function get API 
    const getParentCategoryList = () => {
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

    //closures function API get detail
    const getParentCategoryDetail = (id: number) => {
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
            `${URL_PREFIX}/${id}`,
            fetcher,
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

    //API create new 
    const createNewCategory = async (nameCreate: string) => {
        try {
            const url = URL_PREFIX
            const body = {
                name: nameCreate,
            };
            const response = await axiosAuth.post(url, body)
            return response.data
        }
        catch (e: any) {
            throw new Error("Error create category: " + e.message);
        }
    }

    //api update by id
    const updateCategoryById = async (id: number, nameUpdate: string) => {
        try {
            const url = URL_PREFIX
            const body = {
                pcategory_id: id,
                name: nameUpdate,
            };
            const response = await axiosAuth.put(url, body)
            return response.data;
        } catch (error: any) {
            throw new Error("Error updating category: " + error.message);
        }
    };

    //API delete by id
    const deleteCategoryById = async (id: number) => {
        try {
            const url = `${URL_PREFIX}/delete/${id}`
            const response = await axiosAuth.delete(url)
            return response
        }
        catch (error: any) {
            throw new Error("Error deleting category: " + error.message);
        }
    }

    //API get all soft delete item
    const getCategoryTrashList = () => {
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
    const destroyCategoryById = async (id: number) => {
        try {
            const url = `${URL_PREFIX}/destroy/${id}`
            const response = await axiosAuth.delete(url)
            return response
        }
        catch (error: any) {
            throw new Error("Error deleting category: " + error.message);
        }
    }
    //API restore by id
    const restoreCategoryById = async (id: number) => {
        try {
            const url = `${URL_PREFIX}/restore/${id}`
            const response = await axiosAuth.patch(url)
            return response
        }
        catch (error: any) {
            throw new Error("Error restore category: " + error.message);
        }
    }

    return {
        getParentCategoryList,
        getParentCategoryDetail,
        getCategoryTrashList,
        createNewCategory,
        updateCategoryById,
        deleteCategoryById,
        destroyCategoryById,
        restoreCategoryById,
    };
}

export default useAPIParentCategory
