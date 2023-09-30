'use client'
import useAxiosAuth from '../utils/useAxiosAuth'

const useAPICreateCategory = () => {
    const axiosAuth = useAxiosAuth()

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
    return {
        createNewCategory
    }
}

export default useAPICreateCategory
