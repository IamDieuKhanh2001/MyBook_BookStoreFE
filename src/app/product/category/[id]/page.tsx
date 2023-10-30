'use client'

import SortSideBarCategory from '@/components/product/Category/SortSideBar/SortSideBarCategory';
import FilterCurrentActive from '@/components/product/FilterCurrentActive/FilterCurrentActive';
import Breadcrumb from '@/components/shared/Breadcrumb/Breadcrumb';
import MainSectionTitle from '@/components/shared/MainSectionTitle/MainSectionTitle';
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';

interface IProductByCategoryPageProps {
    params: {
        id: number;
    };
}
const ProductByCategoryPage = (props: IProductByCategoryPageProps) => {
    const { params } = props
    const { ref, inView } = useInView(); // Gán ref theo dõi div Spinner
    const [filters, setFilters] = useState({
        limit: '5',
        search: '',
        minPrice: '',
        maxPrice: '',
        orderBy: 'price,desc',
    });

    //     useEffect(() => {
    //       if (inView) {
    //           setSize((previousSize) => previousSize + 1)
    //       }
    //   }, [inView]);
    return (
        <>
            <Breadcrumb />
            <div className="container-xxl mt-2 section-container">
                <div className="container py-4">
                    {/* Title start */}
                    <MainSectionTitle
                        title='Tên Category'
                        shortDescription='Short des cho category'
                    />
                    <div className='row'>
                        <div className='col-xl-3 col-sm-12 filterProduct'>
                            <SortSideBarCategory />
                        </div>
                        <div className='col-xl-9 col-sm-12'>
                            <FilterCurrentActive />
                            {/* product list  */}
                            <div ref={ref} className="d-flex mt-4 justify-content-center">
                                <div style={{ width: '3rem', height: '3rem' }} className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Title End */}
                </div>
            </div>
        </>
    )
}

export default ProductByCategoryPage
