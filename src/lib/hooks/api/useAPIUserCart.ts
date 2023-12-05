
import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import { getSession, useSession } from 'next-auth/react'
import useSWR from 'swr'

const useAPIUserCart = () => {
    const URL_PREFIX = '/user/cart'
    const axiosAuth = useAxiosAuth()
    //API get lang list
    const getMyCartList = () => {
        const { data: session } = useSession();
        const fetcher = async (url: string) => {
            try {
                const headers = {
                    Authorization: `Bearer ${session?.user.jwtToken}`,
                }
                const response = await axiosAuth.get(url, { headers });
                return response;
            }
            catch (error) {
                console.error('Lỗi khi fetch:', error);
                return Promise.reject(error); // Trả về một Promise bị từ chối            }
            }
        }

        const { data, mutate, isLoading, error } = useSWR(
            `${URL_PREFIX}`,
            session ? fetcher : null,
            {
                revalidateOnReconnect: false,
            }
        )

        const cartItemsWithSelected: ICartItem[] = data?.data ?? []
        return {
            data: cartItemsWithSelected ?? [], // nếu data = undefined sẽ là mảng rỗng
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }

    const increaseQty = async (cartItemId: number) => {
        try {
            const session = await getSession();
            const url = `${URL_PREFIX}/increase/${cartItemId}`
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.put(url, undefined, { headers })
            return response;
        } catch (error: any) {
            throw error;
        }
    };

    const decreaseQty = async (cartItemId: number) => {
        try {
            const session = await getSession();
            const url = `${URL_PREFIX}/decrease/${cartItemId}`
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.put(url, undefined, { headers })
            return response;
        } catch (error: any) {
            throw error;
        }
    };

    const deleteCartItem = async (isbn_code: string) => {
        try {
            const session = await getSession();
            const url = `${URL_PREFIX}/${isbn_code}`
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.delete(url, { headers })
            return response;
        } catch (error: any) {
            throw error;
        }
    };

    //API create new child category
    const addBookToCart = async (isbnCode: string, quantity: number = 1) => {
        try {
            const session = await getSession();
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const url = URL_PREFIX
            const body = {
                isbn_code: isbnCode,
                quantity: quantity,
            };
            const response = await axiosAuth.post(url, body, { headers })
            return response.data
        }
        catch (e: any) {
            throw e
        }
    }

    const preOrder = async (listIdProductOrder: number[], voucherCode: string = '') => {
        try {
            const session = await getSession();
            const url = `${URL_PREFIX}/pre_order`
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const body = {
                ids: listIdProductOrder,
                voucherCode: voucherCode
            }
            const response = await axiosAuth.post(url, body, { headers })
            return response;
        } catch (error: any) {
            throw error;
        }
    };

    return {
        getMyCartList,
        increaseQty,
        decreaseQty,
        deleteCartItem,
        addBookToCart,
        preOrder,
    }
}

export default useAPIUserCart
