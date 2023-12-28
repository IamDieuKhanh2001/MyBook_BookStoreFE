"use client";
import { axiosAuth } from "../../axios/axiosAuth";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { AxiosError } from "axios";
import { APIRefreshJwtToken } from "../../axios/api/accountAPI";

const useAxiosAuth = () => {
    //================================
    //    INTERCEPTOR: BEFORE SENDING REQUEST & AFTER SENDING REQUEST
    //================================
    const { data: session, update } = useSession();

    //========================================
    //With 401 status error from apis 
    //Case 1: Will Refresh token if jwt has been expired
    //Case 2: Will redirect back to login page if never login before
    //Case 3: BE response with { success: false, message: 1 of 8 bellow}, will be redirect to login
    //All BE res message if success: false will be
    //"Access token valid format",
    //"Invalid token alg hash" 
    //"Refresh token does not exist", 
    //"refresh token has not yet expired"
    //"Refresh token has been used"
    //"Refresh token has been revoked"
    //"Token does not match"
    //"Something went wrong"
    //========================================
    const handle401Error = async (error: AxiosError) => {
        const session = await getSession();
        if (session) {
            //if api catch error will redirect to login
            try {
                const res = await APIRefreshJwtToken(session.user.jwtToken, session.user.refreshToken)
                if (res && res.data.success === false && res.status === 200) {
                    await signOut({ callbackUrl: '/authentication/login?isSessionExpired=true' }); // clear session
                } else if (res && res.data.success === true && res.status === 200) {
                    await update({
                        ...session,
                        user: {
                            ...session?.user,
                            jwtToken: res.data?.data.jwtToken,
                            refreshToken: res.data?.data.refreshToken,
                        }
                    })
                } else {
                    await signOut({ callbackUrl: '/authentication/login?isSessionExpired=true' }); // clear session
                }
            } catch (e) {
                await signOut({ callbackUrl: '/authentication/login?isSessionExpired=true' }); // clear session
            }
        } else {
            await signOut({ callbackUrl: '/authentication/login?isSessionExpired=true' }); // clear session
        }
    }
    useEffect(() => {
        //Request interceptor & handle error occur
        // const requestIntercept = axiosAuth.interceptors.request.use(
        //     async (config: any) => {
        //         const session = await getSession();
        //         if (session) {
        //             config.headers = config.headers || {}; // allow header for request if have session user available
        //             config.headers['Authorization'] = `Bearer ${session.user.jwtToken}`;
        //         }
        //         return config;
        //     },
        //     async (error: AxiosError) => {
        //         return Promise.reject(error);
        //     }
        // );

        //Response interceptor & handle error occur
        const responseIntercept = axiosAuth.interceptors.response.use(
            async (response: any) => response,
            async (error: AxiosError) => {
                if (error.response && error.response.status === 401) {
                    handle401Error(error)
                    return Promise.reject(error); //reject other error 401
                }
                return Promise.reject(error); //reject other error 5xx
            }
        );

        return () => { //clean up hook
            // axiosAuth.interceptors.request.eject(requestIntercept);
            axiosAuth.interceptors.response.eject(responseIntercept);
        };
    }, [session]);

    return axiosAuth;
};

export default useAxiosAuth;