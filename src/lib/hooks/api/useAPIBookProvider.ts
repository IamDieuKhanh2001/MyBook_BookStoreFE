import useAxiosAuth from '../utils/useAxiosAuth'
import useSWR from 'swr'
import { getSession } from 'next-auth/react'

const useAPIBookProvider = () => {
    const URL_PREFIX = '/admin/book/provider'
    const axiosAuth = useAxiosAuth()

    //closures function get API 
    const getProviderList = () => {
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

    const createNewProvider = async (nameCreate: string) => {
        try {
            const session = await getSession();
            const body = {
                provider_name: nameCreate,
            };
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.post(URL_PREFIX, body, { headers })
            return response.data
        }
        catch (e: any) {
            throw e;
        }
    }

    const updateProviderById = async (id: number, nameUpdate: string) => {
        try {
            const session = await getSession();
            const body = {
                book_provider_id: id,
                provider_name: nameUpdate,
            };
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.put(URL_PREFIX, body, { headers })
            return response.data;
        } catch (error: any) {
            throw error;
        }
    };

    const deleteProviderById = async (id: number) => {
        try {
            const session = await getSession();
            const url = `${URL_PREFIX}/delete/${id}`
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.delete(url, { headers })
            return response;
        } catch (error: any) {
            throw new Error("Error delete provider: " + error.message);
        }
    };

    //API get all soft delete item
    const getProviderTrashList = () => {
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
    const destroyProviderById = async (id: number) => {
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
            throw new Error("Error deleting provider: " + error.message);
        }
    }

    //API restore by id
    const restoreProviderById = async (id: number) => {
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
            throw new Error("Error restore provider: " + error.message);
        }
    }
    
    return {
        getProviderList,
        createNewProvider,
        updateProviderById,
        deleteProviderById,
        getProviderTrashList,
        restoreProviderById,
        destroyProviderById,
    }
}

export default useAPIBookProvider
