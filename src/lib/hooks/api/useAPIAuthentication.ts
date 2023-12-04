import useAxiosAuth from "../utils/useAxiosAuth"

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

    return {
        SendMailRecoveryPassword,
        ResetPassword,
        RequestVerifyMail,
    }
}

export default useAPIAuthentication
