'use client'
import FilterCurrentActive from '@/components/product/FilterCurrentActive/FilterCurrentActive'
import LoadingList from '@/components/product/ProductList/LoadingList/LoadingList'
import ProductList from '@/components/product/ProductList/ProductList'
import SortSideBarAll from '@/components/product/SortSideBar/SortSideBarAll'
import Breadcrumb from '@/components/shared/Breadcrumb/Breadcrumb'
import useAPIGuest from '@/lib/hooks/api/useAPIGuest'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { IBookFilter } from '../../../../types/IBookFilter'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { productActions } from '@/redux/slices/ProductSlice'

const ProductListAllPage = () => {
  const { ref, inView } = useInView(); // Gán ref theo dõi div Spinner
  const dispatch = useDispatch();
  const searchKeyword = useSelector((state: RootState) => state.product.searchKeyword);

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

  useEffect(() => {
    console.log(filters)
  }, [filters])

  useEffect(() => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      search: searchKeyword,
    }));
  }, [searchKeyword])

  useEffect(() => {
    return () => {
      console.log("call cleanup")
      dispatch(productActions.updateKeyword(''))
    }
  }, [])

  return (
    <>
      {/* <Breadcrumb /> */}
      <div className="container-xxl mt-2 section-container">
        <div className="container py-4">
          <div className='row'>
            <div className='col-xl-3 col-sm-12 filterProduct'>
              <SortSideBarAll
                filters={filters}
                setFilters={setFilters}
              />
            </div>
            <div className='col-xl-9 col-sm-12'>
              <FilterCurrentActive
                filters={filters}
                setFilters={setFilters}
              />
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
