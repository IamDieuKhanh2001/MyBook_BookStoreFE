import { AxiosError, AxiosRequestConfig } from "axios";
import { getSession } from "next-auth/react";
//================================
//    INTERCEPTOR: BEFORE SENDING REQUEST & AFTER SENDING REQUEST
//================================
//Request interceptor & handle error occur
export const requestInterceptor = async (config: any) => {
    const session = await getSession();
    if (session) {
        config.headers = config.headers || {}; // allow header for request if have session user available
        config.headers['Authorization'] = `Bearer ${session.user.jwtToken}`;
    }
    return config;
};

export const requestErrorInterceptor = async (error: AxiosError) => {
    console.log('No session found');
    return Promise.reject(error);
};

//Response interceptor & handle error occur
export const responseInterceptor = async (response: any) => response;

export const responseErrorInterceptor = async (error: AxiosError) => {
    console.log(error.response)
    if (error.response && error.response.status === 401) {
        handle401Error()
    }
    console.log(">>>>>>other error")
    return Promise.reject(error); //reject other error 5xx
}
//========================================
//With 401 status error from apis 
//Case 1: Will Refresh token if jwt has been expired
//Case 2: Will redirect back to login page if never login before
//========================================
const handle401Error = async () => {
    const session = await getSession();
    console.log(">>>>>>401")
    if (session) {
        console.log("call refresh api")
        //if api catch error will redirect to login
        
    } else {
        console.log("redirect back to login")
        // redirectTo('/authentication');
        // window.location.href = '/authentication'; // Đổi đường dẫn thành đúng trang đăng nhập của bạn
    }
}