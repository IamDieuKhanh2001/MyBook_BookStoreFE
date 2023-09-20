"use client"
import React, { useEffect } from 'react'
import ProductItem from './ProductItem/ProductItem'
import styles from "./ProductList.module.scss"
import { useCustomSWR } from '@/lib/swr/useCustomSWR'
import useAxiosAuth from '@/lib/hooks/useAxiosAuth'
import { useSession } from 'next-auth/react'

const ProductList = () => {
    const { data: session } = useSession();
    const axiosAuth = useAxiosAuth();
    // const headersCategoryAPI = {
    //     Authorization: `Bearer ` + session?.user.jwtToken
    // }
    // const {data,isError,isLoading,mutate} = useCustomSWR('/address/province',undefined,headersCategoryAPI)
    const fetch = async () => {
        try {
            const res = await axiosAuth.get('/address/province');
            console.log(res)
        }
        catch (e) {
            console.log('error')
        }
    }
    useEffect(() => {
        fetch()
    }, [])
    return (
        <>
            <div className="tab-content">
                <div className="row g-2">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </>
    )
}

export default ProductList
