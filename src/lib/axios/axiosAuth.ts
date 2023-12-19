//====================================
//          Axios configuration  
//====================================
//Note: Only allow one enviroment, comment 1 of these your enviroment you are not using
// Developer environment:
// const BASE_URL = "http://127.0.0.1:3333";

// Production environment:
const BASE_URL = "https://api.sachviet.top";

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
    headers: { 
        "Content-Type": "application/json" ,
    },
});
// const retryDelay = (retryNumber = 0) => {
//     const seconds = Math.pow(2, retryNumber) * 1000;
//     const randomMs = 1000 * Math.random();
//     return seconds + randomMs;
// };

// // Axios will retry for error responses
// axiosRetry(axiosAuth, {
//     retries: 1, //retry 1 time after fail (404, 500, ... etc)
//     retryDelay,
//     retryCondition: (error) => {
//         // Thử lại nếu gặp lỗi mà không phải mã 401
//         return error.response?.status !== 401;
//     },
// });


