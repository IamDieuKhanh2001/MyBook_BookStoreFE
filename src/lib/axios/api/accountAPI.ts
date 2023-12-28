import { AxiosResponse } from 'axios';
import defaultAxios from "../axiosAuth"

export const APIUserLogin = async (email: string = "", password: string = ""): Promise<AxiosResponse<any, any>> => {
    const url = "/auth/login";
    const body = {
        email: email,
        password: password,
    };

    try {
        const response = await defaultAxios.post(url, body);
        return response;
    } catch (error) {
        throw error; // Rethrow the error so it can be caught by the caller if needed
    }
};

export const APIUserRegister = async (email: string = "", password: string = "", passwordConfirm: string = ""): Promise<AxiosResponse<any, any>>  => {
    const url = "/auth/register";
    const body = {
        email: email,
        password: password,
        password_confirmation: passwordConfirm,
    };

    try {
        const response = await defaultAxios.post(url, body);
        return response;
    } catch (error) {
        throw error; // Rethrow the error so it can be caught by the caller if needed
    }
}

export const APIRefreshJwtToken = async (jwtToken: string = "", refreshToken: string = ""): Promise<AxiosResponse<any, any>> => {
    //{ success: false, message: 1 of 8 bellow} status code 200
    //All BE res message if success: false will be
    //"Access token valid format",
    //"Invalid token alg hash" 
    //"Refresh token does not exist", 
    //"refresh token has not yet expired"
    //"Refresh token has been used"
    //"Refresh token has been revoked"
    //"Token does not match"
    //"Something went wrong"

    //All BE res message if success: true
    //{ success: true, message: "Renew token success"} status code 200
    const url = "/auth/refresh_token";
    const body = {
        jwtToken: jwtToken,
        refreshToken: refreshToken,
    };
    try {
        const response = await defaultAxios.post(url, body);
        return response;
    } catch (error) {
        throw error; // Rethrow the error so it can be caught by the caller if needed
    }
};

