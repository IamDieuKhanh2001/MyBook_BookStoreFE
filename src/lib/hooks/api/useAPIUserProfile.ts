import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import { getSession } from 'next-auth/react'

const useAPIUserProfile = () => {
    const URL_PREFIX = '/user/profile'
    const axiosAuth = useAxiosAuth()

    const getUserProfile = async () => {
        try {
            const session = await getSession();
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.get(URL_PREFIX, { headers })
            return response;
        } catch (error: any) {
            throw new Error(error.message);
        }
    };
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
    return {
        getUserProfile,
        updateUserProfile,
    }
}

export default useAPIUserProfile
