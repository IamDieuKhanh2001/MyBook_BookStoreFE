'use client'

import SortSideBarCategory from '@/components/product/SortSideBar/SortSideBarCategory';
import Breadcrumb from '@/components/shared/Breadcrumb/Breadcrumb';
import MainSectionTitle from '@/components/shared/MainSectionTitle/MainSectionTitle';
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { IBookFilter } from '../../../../../types/IBookFilter';
import useAPIGuest from '@/lib/hooks/api/useAPIGuest';

interface IProductByCategoryPageProps {
    params: {
        id: number;
    };
}
const ProductByCategoryPage = (props: IProductByCategoryPageProps) => {
    const { params } = props
    const { ref, inView } = useInView(); // Gán ref theo dõi div Spinner
    const [filters, setFilters] = useState<IBookFilter>({
        limit: '5',
        search: '',
        minPrice: '',
        maxPrice: '',
        orderBy: 'price,desc',
        language: null,
        author: null,
        ccategory: null,
        publisher: null,
        provider: null,
        bookForm: null,
    });

    const { getCategoryList } = useAPIGuest()
    const { data: categoryList } = getCategoryList()

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
                        shortDescription={`id: ${params.id}`}
                    />
                    <div className='row'>
                        <div className='col-xl-3 col-sm-12 filterProduct'>
                            <SortSideBarCategory />
                        </div>
                        <div className='col-xl-9 col-sm-12'>
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
