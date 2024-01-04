'use client'
/* 
=================Project Infomation==================
Project name: Book store
version: 0.1.0
Create day: 25/07/2023
Production release day:
Company's name (or University school): Su Pham Ki Thuat University
Company's address (or University school): 1 Vo Van Ngan Linh Chieu Thu Duc City
Manager Name (or Lecturer's name): Hoang Cong Trinh
=======================Team Member====================
Member id: 19110226
Full name (Required): Quach Dieu Khanh
Phone number:

Member id: 19110304
Full name (Required):  Nguyen Thanh Trung
Phone number:
=================******************==================
*/
import FirmVisit from '@/components/home/FirmVisit/FirmVisit'
import ClientLayout from '@/layouts/ClientLayout/ClientLayout'
import React from 'react'
import TopBanner from '@/components/home/TopBanner/TopBanner'
import MainSectionTitle from '@/components/shared/MainSectionTitle/MainSectionTitle'
import Link from 'next/link'
import useAPIGuest from '@/lib/hooks/api/useAPIGuest'
import ProductList from '@/components/product/ProductList/ProductList'
import FlashSale from '@/components/product/FlashSale/FlashSale'
import useAPIRecommendation from '@/lib/hooks/api/useAPIRecommendation'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()
  const { getBookFilterPaginated } = useAPIGuest()
  const { getRecommentProducts } = useAPIRecommendation()
  const { paginatedData } = getBookFilterPaginated()
  const { paginatedData: studentBook } = getBookFilterPaginated(undefined, undefined, undefined, undefined, undefined, undefined, undefined, '53', undefined, undefined, undefined);
  const { data: recommentBook, isLoading } = getRecommentProducts()
  
  return (
    <ClientLayout>
      {/* <Carousel /> */}
      <TopBanner />
      <FlashSale />
      <div className="container-xxl pt-5">
        <div className="container">
          {recommentBook.length !== 0 && (
            <>
              <MainSectionTitle
                title='Gợi ý dành cho bạn'
              />
              <div className='row pb-4'>
                <ProductList
                  dataList={recommentBook}
                />
              </div>
            </>
          )}
          <MainSectionTitle
            title='Xu hướng mua sắm'
            shortDescription='Các sản phẩm dưới đây có lượt doanh thu cao nhất'
          />
          <div className='row pb-4'>
            <ProductList
              dataList={paginatedData}
            />
          </div>
          <div className="col-12 text-center">
            {/* Go to product list page  */}
            <Link className="btn btn-primary rounded-pill py-3 px-5" href="/product/searchengine">
              Xem thêm
            </Link>
          </div>
          <MainSectionTitle
            title='Sách giáo Khoa'
            shortDescription='Ưu đãi cho học sinh & Sinh viên'
          />
          <div className='row pb-4'>
            <ProductList
              dataList={studentBook}
            />
          </div>
          <div className="col-12 text-center">
            {/* Go to product list page  */}
            <Link className="btn btn-primary rounded-pill py-3 px-5" href={`/product/category/53?ccategoryname=Sách%20Giáo%20Khoa&pcategoryid=7`}>
              Xem thêm
            </Link>
          </div>
        </div>
      </div>
      <FirmVisit />
    </ClientLayout>
  )
}
