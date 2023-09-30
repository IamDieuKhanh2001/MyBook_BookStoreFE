'use client'
import useAxiosAuth from '../utils/useAxiosAuth'


const useAPIUpdateCategory = () => {
    const axiosAuth = useAxiosAuth()

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
    return {
        updateCategoryById
    }
}

export default useAPIUpdateCategory
