'use client'
import SortSideBarAll from '@/components/product/All/SortSideBar/SortSideBarAll'
import FilterCurrentActive from '@/components/product/FilterCurrentActive/FilterCurrentActive'
import LoadingList from '@/components/product/ProductList/LoadingList/LoadingList'
import ProductList from '@/components/product/ProductList/ProductList'
import Breadcrumb from '@/components/shared/Breadcrumb/Breadcrumb'
import useAPIGuest from '@/lib/hooks/api/useAPIGuest'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const ProductListAllPage = () => {
  const { ref, inView } = useInView(); // Gán ref theo dõi div Spinner
    const [filters, setFilters] = useState({
        limit: '5',
        search: '',
        minPrice: '',
        maxPrice: '',
        orderBy: 'price,desc',
    });
    const { getBookFilterPaginated } = useAPIGuest()
    const { paginatedData, mutate, setSize, error, isLoading, isReachedEnd } = getBookFilterPaginated()

    useEffect(() => {
      if (inView) {
          setSize((previousSize) => previousSize + 1)
      }
  }, [inView]);
  return (
    <>
      <Breadcrumb />
      <div className="container-xxl mt-2 section-container">
        <div className="container py-4">
          <div className='row'>
            <div className='col-xl-3 col-sm-12 filterProduct'>
              <SortSideBarAll />
            </div>
            <div className='col-xl-9 col-sm-12'>
              <FilterCurrentActive />
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

export default ProductListAllPage
