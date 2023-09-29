//====================================
//          Axios configuration  
//====================================
//Note: Only allow one enviroment, comment 1 of these your enviroment you are not using
// Developer environment:
const BASE_URL = "http://localhost:3333"; // https://localhost:7140;

// Production environment:
// const BASE_URL = "http://YourDomain.app.com";

import axios from "axios";
import axiosRetry from "axios-retry";

export default axios.create({
    //default instance axios config for axios calling
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
});
export const axiosAuth = axios.create({ //axios instance create
    //Stater config for axios calling
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
});
const retryDelay = (retryNumber = 0) => {
    const seconds = Math.pow(2, retryNumber) * 1000;
    const randomMs = 1000 * Math.random();
    return seconds + randomMs;
};

// Axios will retry for error responses
axiosRetry(axiosAuth, {
    retries: 1, //retry 1 time after fail (404, 500, ... etc)
    retryDelay,
    retryCondition: (error) => {
        // Thử lại nếu gặp lỗi mà không phải mã 401
        return error.response?.status !== 401;
    },
});
// Thêm interceptor để gọi API với access token và xử lý refresh token
// axiosClient.interceptors.request.use(requestInterceptor, requestErrorInterceptor);
// axiosClient.interceptors.request.use(
//     async (config) => {
//         const session = await getSession();
//         if (session) { //Thêm header xử lí api nếu có session tồn tại
//             config.headers["Authorization"] = `Bearer ${session.user.jwtToken}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );
// Thêm interceptor để xử lý lỗi 401 và refresh token
// axiosClient.interceptors.response.use(responseInterceptor, responseErrorInterceptor);

// axiosClient.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         console.log(error.response)
//         const session = await getSession();
//         if (error.response && error.response.status === 401) {
//             console.log(">>>>>>401")
//             if (session) {
//                 console.log("call refresh api")
//                 //if api catch error will redirect to login
//             } else {
//                 console.log("redirect back to login")
//                 // redirectTo('/authentication');
//                 window.location.href = '/authentication'; // Đổi đường dẫn thành đúng trang đăng nhập của bạn
//             }

//         }
//         console.log(">>>>>>other error")
//         return Promise.reject(error); //reject other error 5xx
//     }
// );


