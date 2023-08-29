import useSWR from 'swr';
import defaultAxios from '../axios/axiosAuth'; // Đảm bảo import axiosClient của bạn
import swrConfig from './swrConfig'; // Đảm bảo import đúng đường dẫn
//================================
//url: api get url (required)
//params: object has params (not required)
//================================
// example calling:
//   const response = useCustomSWR('/api/example/getProductWithParams', { id: 1, name: 'example' });
//   const response = useCustomSWR('/api/example/getProductNoParams');

export function useCustomSWR<Data = any>(url: string, params?: object, headers?: object) {
  const key = params ? [url, params] : url;

  const { data, mutate, error } = useSWR<Data>(key, (key) => {
    if (Array.isArray(key)) {
      return defaultAxios.get(key[0], { params: key[1], headers }).then((res) => res.data);
    }
    return defaultAxios.get(key, { headers }).then((res) => res.data);
  }, swrConfig);

  return {
    data: data ?? null,
    mutate,
    isLoading: !error && !data,
    isError: error,
  };
}

