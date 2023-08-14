import useAxiosAuth from '@/lib/hooks/useAxiosAuth';
import { getSession } from "next-auth/react";


export const APIGetTestAdmin = async (): Promise<any> => {
    const url = `/api/Test/Admin`;
    const session = await getSession();
    // const headers = {
    //     Authorization: `Bearer ${session?.user.jwtToken}`
    // }
    const axiosAuth = useAxiosAuth();

    try {
        const response = await axiosAuth.get(url);
        return response;
    } catch (error) {
        console.log(">>>>>>", error);
        throw error
    }
};