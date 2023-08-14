import { axiosClient } from '../axiosClient';
import { AxiosResponse } from 'axios';
import { getSession } from "next-auth/react";


export const APIGetTestAdmin = async (): Promise<any> => {
    const url = `/api/Test/Admin`;
    const session = await getSession();
    // const headers = {
    //     Authorization: `Bearer ${session?.user.jwtToken}`
    // }

    try {
        const response = await axiosClient.get(url);
        return response;
    } catch (error) {
        console.log(">>>>>>", error);
        throw error
    }
};