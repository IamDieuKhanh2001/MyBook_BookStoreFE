'use client'

import SortSideBarCategory from '@/components/product/SortSideBar/SortSideBarCategory';
import Breadcrumb from '@/components/shared/Breadcrumb/Breadcrumb';
import MainSectionTitle from '@/components/shared/MainSectionTitle/MainSectionTitle';
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { IBookFilter } from '../../../../../types/IBookFilter';
import useAPIGuest from '@/lib/hooks/api/useAPIGuest';
import { useSearchParams } from 'next/navigation';
import ProductList from '@/components/product/ProductList/ProductList';
import LoadingList from '@/components/product/ProductList/LoadingList/LoadingList';
import FilterCurrentActive from '@/components/product/FilterCurrentActive/FilterCurrentActive';

interface IProductByCategoryPageProps {
    params: {
        ccategory_id: number;
    };
}
const ProductByCategoryPage = (props: IProductByCategoryPageProps) => {
    const searchParams = useSearchParams();
    const { params } = props
    const { ref, inView } = useInView(); // Gán ref theo dõi div Spinner
    let ccategoryName = searchParams && searchParams.get('ccategoryname')
    let pcategoryId = searchParams && searchParams.get('pcategoryid') || '0'
    const [filters, setFilters] = useState<IBookFilter>({
        limit: '5',
        search: '',
        minPrice: '',
        maxPrice: '',
        orderBy: 'price,desc',
        language: null,
        author: null,
        ccategory: {
            id: params.ccategory_id,
            name: ccategoryName ?? '',
            parent_category_id: parseInt(pcategoryId, 10)
        },
        publisher: null,
        provider: null,
        bookForm: null,
    });
    const { getBookFilterPaginated } = useAPIGuest()
    const { paginatedData, setSize, error, isLoading, isReachedEnd } = getBookFilterPaginated(
        filters.search,
        filters.minPrice,
        filters.maxPrice,
        filters.orderBy,
        filters.limit,
        filters.language?.id.toString(),
        filters.author?.id.toString(),
        filters.ccategory?.id.toString(),
        filters.publisher?.id.toString(),
        filters.provider?.id.toString(),
        filters.bookForm?.id.toString(),
    )

    useEffect(() => {
        if (inView) {
            setSize((previousSize) => previousSize + 1)
        }
    }, [inView]);
    console.log('categoryName ' + ccategoryName)
    console.log('pcategoryid ' + pcategoryId)
    return (
        <>
            {/* <Breadcrumb /> */}
            <div className="container-xxl mt-2 section-container">
                <div className="container py-4">
                    {/* Title start */}
                    <MainSectionTitle
                        title={filters.ccategory?.name || 'Undefined name category'}
                        shortDescription={`id: ${filters.ccategory?.parent_category_id}`}
                    />
                    <div className='row'>
                        <div className='col-xl-3 col-sm-12 filterProduct'>
                            <SortSideBarCategory
                                filters={filters}
                                setFilters={setFilters}
                            />
                        </div>
                        <div className='col-xl-9 col-sm-12'>
                            <FilterCurrentActive
                                filters={filters}
                                setFilters={setFilters}
                            />
                            {/* product list  */}
                            <ProductList
                                dataList={paginatedData}
                            />
                            {!isReachedEnd && <LoadingList loadingRef={ref} />}
                        </div>
                    </div>
                    {/* Title End */}
                </div>
            </div>
        </>
    )
}

export default ProductByCategoryPage
