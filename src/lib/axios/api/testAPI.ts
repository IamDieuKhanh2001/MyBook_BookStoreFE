import { AxiosResponse } from "axios";
import defaultAxios from "../axiosAuth"

export const APITest = async (email: string = "", password: string = ""): Promise<AxiosResponse<any, any>> => {
    const url = "/address/province";
    const body = {
        
    };

    try {
        const response = await defaultAxios.get(url, body);
        return response;
    } catch (error) {
        console.log("Can't call API after 1 retries", error);
        throw error; // Rethrow the error so it can be caught by the caller if needed
    }
};