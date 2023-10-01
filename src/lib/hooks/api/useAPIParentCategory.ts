import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import useSWR from 'swr'

//custom hook for calling APIS for parent category
const useAPIParentCategory = () => {
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
            `/parent_controller/`,
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
    //API get detail
    const getParentCategoryDetail = async (id: number) => {
        try {
            const url = `/parent_controller/${id}`
            const response = await axiosAuth.get(url)
            return response
        }
        catch (e: any) {
            throw new Error("Error get detail parent category: " + e.message);
        }
    }

    //API create new 
    const createNewCategory = async (nameCreate: string) => {
        try {
            const url = "/parent_controller/"
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
            const url = "/parent_controller/"
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
            const url = '/parent_controller/'
            let data = JSON.stringify({
                "pcategory_id": id
            });
            let config = {
                method: 'delete',
                maxBodyLength: Infinity,
                url: url,
                data: data
            };
            const response = await axiosAuth.request(config)
            return response
        }
        catch (error: any) {
            throw new Error("Error deleting category: " + error.message);
        }
    }

    return {
        getParentCategoryList,
        getParentCategoryDetail,
        createNewCategory,
        updateCategoryById,
        deleteCategoryById,
    };
}

export default useAPIParentCategory
