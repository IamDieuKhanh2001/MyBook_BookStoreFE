import { axiosClient } from "../axiosClient";
import { AxiosResponse } from 'axios';

export const APIUserLogin = async (email: string = "", password: string = ""): Promise<AxiosResponse<any, any>> => {
    const url = "/api/Account/signIn";
    const body = {
        email: email,
        password: password,
    };

    try {
        const response = await axiosClient.post(url, body);
        return response;
    } catch (error) {
        console.log("Can't call API after 2 retries", error);
        throw error; // Rethrow the error so it can be caught by the caller if needed
    }
};

