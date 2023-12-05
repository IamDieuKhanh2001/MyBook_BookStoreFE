import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import { getSession } from 'next-auth/react'

const useProductComment = () => {
    const URL_PREFIX = '/user/comment'
    const axiosAuth = useAxiosAuth()

    const createNewComment = async (isbnCode: string, content: string) => {
        try {
            const session = await getSession();
            const body = {
                isbn_code: isbnCode,
                content: content,
            };
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.post(
                `${URL_PREFIX}/write`,
                body,
                { headers }
            )
            return response.data
        }
        catch (e: any) {
            throw e
        }
    }

    return {
        createNewComment,
    }
}

export default useProductComment
