'use client'
import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import { getSession } from 'next-auth/react'
import useSWR from 'swr'
import { useDispatch } from 'react-redux'
import { cartActions } from '@/redux/slices/cartSlice'

const useAPIUserCart = () => {
    const URL_PREFIX = '/user/cart'
    const axiosAuth = useAxiosAuth()
    const dispatch = useDispatch()
    //API get lang list
    const getMyCartList = () => {
        const fetcher = async (url: string) => {
            try {
                const session = await getSession();
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
            fetcher,
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
    const addBookToCart = async (isbnCode: string, quantity: number) => {
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

    return {
        getMyCartList,
        increaseQty,
        decreaseQty,
        deleteCartItem,
        addBookToCart,
    }
}

export default useAPIUserCart
