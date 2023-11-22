import useAxiosAuth from "../utils/useAxiosAuth"

const useAPIAuthentication = () => {
    const URL_PREFIX = '/auth'
    const axiosAuth = useAxiosAuth()

    //API create new 
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

    return {
        ResetPassword,
    }
}

export default useAPIAuthentication
