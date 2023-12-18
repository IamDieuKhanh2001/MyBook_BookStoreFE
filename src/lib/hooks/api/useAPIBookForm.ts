import useAxiosAuth from '../utils/useAxiosAuth'
import useSWR from 'swr'
import { getSession } from 'next-auth/react'

const useAPIBookForm = () => {
    const URL_PREFIX = '/admin/book/form'
    const axiosAuth = useAxiosAuth()

    //closures function get API 
    const getBookFormList = () => {
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

    const createNewBookForm = async (nameCreate: string) => {
        try {
            const session = await getSession();
            const body = {
                form_name: nameCreate,
            };
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.post(URL_PREFIX, body, { headers })
            return response.data
        }
        catch (e: any) {
            throw new Error("Error create form: " + e.message);
        }
    }

    const updateBookFormById = async (id: number, nameUpdate: string) => {
        try {
            const session = await getSession();
            const body = {
                book_form_id: id,
                form_name: nameUpdate,
            };
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.put(URL_PREFIX, body, { headers })
            return response.data;
        } catch (error: any) {
            throw new Error("Error updating form: " + error.message);
        }
    };

    //api delete by id
    const deleteBookFormById = async (id: number) => {
        try {
            const session = await getSession();
            const url = `${URL_PREFIX}/delete/${id}`
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.delete(url, { headers })
            return response;
        } catch (error: any) {
            throw new Error("Error delete form: " + error.message);
        }
    };

    //API get all soft delete item
    const getBookFormTrashList = () => {
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
    const destroyBookFormById = async (id: number) => {
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
            throw new Error("Error deleting form: " + error.message);
        }
    }

    //API restore by id
    const restoreBookFormById = async (id: number) => {
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
            throw new Error("Error restore form: " + error.message);
        }
    }

    return {
        getBookFormList,
        createNewBookForm,
        updateBookFormById,
        deleteBookFormById,
        getBookFormTrashList,
        restoreBookFormById,
        destroyBookFormById,
    }
}

export default useAPIBookForm
