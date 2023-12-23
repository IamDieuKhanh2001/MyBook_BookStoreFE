import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import { getSession } from 'next-auth/react'
import useSWR from 'swr'

const useAPIUserProfile = () => {
    const URL_PREFIX = '/user/profile'
    const axiosAuth = useAxiosAuth()

    const getUserInfo = () => {
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
            `${URL_PREFIX}/my-info`,
            fetcher,
            {
                revalidateOnReconnect: false,
            }
        )
        const userData: UserInfo = data ?? {}
        return {
            data: userData,
            mutate: mutate,
            isLoading: !error && !data,
            error: error,
        }
    }

    const updateUserProfile = async (firstname: string, lastname: string, phone_number: string, gender: string = 'male') => {
        try {
            const session = await getSession();
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const body = {
                firstname,
                lastname,
                phone_number,
                gender,
            }
            const response = await axiosAuth.post(URL_PREFIX, body, { headers })
            return response;
        } catch (error: any) {
            throw new Error(error.message);
        }
    };

    const changeAccountPassword = async (currentPassword: string, newPassword: string, newPasswordConfirmation: string) => {
        const session = await getSession();
        const headers = {
            Authorization: `Bearer ${session?.user.jwtToken}`,
        }
        const body = {
            current_password: currentPassword,
            new_password: newPassword,
            new_password_confirmation: newPasswordConfirmation
        }
        const response = await axiosAuth.patch(`${URL_PREFIX}/password`, body, { headers })
        return response;
    };

    const uploadProfileAvatar = async (bodyFormData: FormData) => {
        try {
            const session = await getSession();
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
                "Content-Type": "multipart/form-data",
            }
            const response = await axiosAuth.post(
                `${URL_PREFIX}/upload-avatar`,
                bodyFormData,
                { headers, maxBodyLength: Infinity, }
            )
            return response
        }
        catch (e: any) {
            throw e
        }
    }

    return {
        getUserInfo,
        updateUserProfile,
        changeAccountPassword,
        uploadProfileAvatar,
    }
}

export default useAPIUserProfile
