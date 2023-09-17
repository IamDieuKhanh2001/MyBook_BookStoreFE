"use client";

import { useEffect, useState } from "react";
import Beers from "./beers";
import Spinner from "./spinner";
import { useInView } from "react-intersection-observer";
import { Beer } from "../../../types/test/beers";
import useFetchBeer from "./useFetchBeer";

export function LoadMore() {
    const [beers, setBeers] = useState<Beer[]>([]);
    const [page, setPage] = useState(1);
    const perPage = 60; // Số sản phẩm trên mỗi trang
    const { ref, inView } = useInView(); // Gán ref theo dõi div Spinner

    const delay = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));

    const { data, mutate, isLoading, isError } = useFetchBeer(page, perPage);
    const [isLastPage, setIsLastPage] = useState(false)

    const loadMoreBeers = async () => {
        const nextPage = page + 1;
        // Once the page 8 is reached repeat the process all over again.
        await delay(2000);
        setPage(nextPage);
        console.log("Load beer page number :" + page)
        console.log(data)
        if (data.length === 0) {
            console.log(isError)
            setIsLastPage(true)
        } else {
            setBeers((prevProducts: Beer[]) => [...prevProducts, ...data]);
        }
    };

    useEffect(() => {
        if (inView) { //Khi xuất hiện div Spinner sẽ Load API
            loadMoreBeers()
        }
    }, [inView]);
    return (
        <>
            <Beers beers={beers} />
            {isError && (
                <div className="alert alert-danger" role="alert">
                    Error <a href="#" className="alert-link">Check your connection</a>. ERROR
                </div>
            )}
            {!isLastPage && (
                <div
                    className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
                    ref={ref}
                >
                    <Spinner />
                </div>
            )}
        </>
    );
}