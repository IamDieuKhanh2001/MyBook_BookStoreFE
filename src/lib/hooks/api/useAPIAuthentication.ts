import useSWR from "swr"
import useAxiosAuth from "../utils/useAxiosAuth"
import { getSession } from "next-auth/react"

const useAPIAuthentication = () => {
    const URL_PREFIX = '/auth'
    const axiosAuth = useAxiosAuth()

    const SendMailRecoveryPassword = async (email: string) => {
        try {
            const url = `${URL_PREFIX}/request-recovery`
            const body = {
                email: email,
            };
            const response = await axiosAuth.post(url, body)
            return response.data
        }
        catch (e) {
            throw e
        }
    }

    //API reset password from link Gmail 
    const ResetPassword = async (resetPasswordToken: string, newPassword: string) => {
        try {
            const url = `${URL_PREFIX}/verify/email/reset_password`
            const body = {
                token: resetPasswordToken,
                password: newPassword,
            };
            const response = await axiosAuth.post(url, body)
            return response.data
        }
        catch (e) {
            throw e
        }
    }

    const RequestVerifyMail = async (email: string) => {
        try {
            const url = `${URL_PREFIX}/request-verify`
            const body = {
                email: email,
            };
            const response = await axiosAuth.post(url, body)
            return response.data
        }
        catch (e) {
            throw e
        }
    }

    const checkIsVerifiedEmail = async () => {
        try {
            const session = await getSession();
            const headers = {
                Authorization: '',
            }
            if(session) {
                headers.Authorization = `Bearer ${session?.user.jwtToken}`
            }
            const url = `${URL_PREFIX}/check/is-verified`
            const response = await axiosAuth.get(url, { headers })
            return response
        } catch (e) {
            throw e
        }
    }

    return {
        SendMailRecoveryPassword,
        ResetPassword,
        RequestVerifyMail,
        checkIsVerifiedEmail,
    }
}

export default useAPIAuthentication
