import { useCustomSWR } from "@/lib/swr/useCustomSWR";


const useFetchBeer = (page: number, perPage: number) => {
    console.log(">>>>Call fetch beer")
    const apiUrl = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`;
    const { data, mutate, isLoading, isError } = useCustomSWR(apiUrl);

    // Handle data being undefined or not iterable
    const processedData = Array.isArray(data) ? data : [];
    console.log(isError)
    return {
        data: processedData,
        mutate,
        isLoading,
        isError,
    };
};

export default useFetchBeer;
