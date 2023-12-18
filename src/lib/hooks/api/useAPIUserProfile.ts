import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import { getSession } from 'next-auth/react'

const useAPIUserProfile = () => {
    const URL_PREFIX = '/user/profile'
    const axiosAuth = useAxiosAuth()

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
        updateUserProfile,
        changeAccountPassword,
        uploadProfileAvatar,
    }
}

export default useAPIUserProfile
