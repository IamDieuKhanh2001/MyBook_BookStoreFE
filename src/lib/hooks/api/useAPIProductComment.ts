import React from 'react'
import useAxiosAuth from '../utils/useAxiosAuth'
import { getSession } from 'next-auth/react'

const useAPIProductComment = () => {
    const URL_PREFIX = '/user/comment'
    const axiosAuth = useAxiosAuth()

    const createNewComment = async (isbnCode: string, rateStar: number, content: string) => {
        try {
            const session = await getSession();
            const body = {
                isbn_code: isbnCode,
                rate_star: rateStar,
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

    const editComment = async (commentId: number, rateStar: number, content: string) => {
        try {
            const session = await getSession();
            const body = {
                comment_id: commentId,
                rate_star: rateStar,
                content: content,
            };
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.put(
                `${URL_PREFIX}/edit`,
                body,
                { headers }
            )
            return response.data
        }
        catch (e: any) {
            throw e
        }
    }

    const deleteComment = async (commentId: number) => {
        try {
            const session = await getSession();
            const headers = {
                Authorization: `Bearer ${session?.user.jwtToken}`,
            }
            const response = await axiosAuth.delete(
                `${URL_PREFIX}/delete/${commentId}`,
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
        editComment,
        deleteComment,
    }
}

export default useAPIProductComment
