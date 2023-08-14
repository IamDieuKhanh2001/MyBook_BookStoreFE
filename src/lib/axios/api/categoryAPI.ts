import { useCustomSWR } from "@/lib/swr/useCustomSWR";
import { axiosAuth } from "../axiosAuth";
import { AxiosResponse } from 'axios';
import { Session } from "next-auth";
import useSWR from 'swr';

// export const APIGetAllCategory = (): Promise<AxiosResponse<any, any>> => {
//   const url = `/api/Loai`;
//   return axiosClient.get(url).catch((err) => {
//     console.log("Can't call API after 2 retries", err);
//     // Khi có lỗi, trả về một đối tượng có property data là null hoặc trống để tránh lỗi undefined
//     return { data: null } as AxiosResponse<any, any>;
//   });
// };

export function APIGetAllCategory() {
  const url = `/api/Loai`;
  // const fetcher = (url: string) => axiosClient.get(url).then((res) => res.data);
  // const swrConfig = {
  //   revalidateOnReconnect: false, //disable auto retry api (axios will handle it)
  // }
  // const { data, mutate, error } = useSWR<ICategory[]>(url, fetcher, swrConfig);
  const res = useCustomSWR(url);

  return res;
}

export const APIUpdateCategory = async (maLoai: string, tenLoai: string, session: Session | null): Promise<any> => {
  const url = `/api/Loai/${maLoai}`;
  const body = {
    maLoai: maLoai,
    tenLoai: tenLoai,
  };
  // const headers = {
  //   Authorization: `Bearer ${session?.user?.jwtToken || 'Bearer'}`
  // }
  try {
    const response = await axiosAuth.put(url, body);
    return response;
  } catch (error) {
    console.log("Can't call API after 2 retries", error);
    throw error; // Rethrow the error so it can be caught by the caller if needed
  }
};