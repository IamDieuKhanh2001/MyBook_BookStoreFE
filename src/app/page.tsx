/* 
=================Project Infomation==================
Project name:
version: 0.1.0
Create day:
Production release day:
Company's name (or University school):
Company's address (or University school):
Manager Name (or Lecturer's name):
=======================Team Member====================
Member id: 1
Full name (Required):
Phone number:

Member id: 2
Full name (Required):
Phone number:
=================******************==================
*/
import FirmVisit from '@/components/home/FirmVisit/FirmVisit'
import ClientLayout from '@/layouts/ClientLayout/ClientLayout'
import { Metadata } from 'next'
import React from 'react'
import ProductList from '@/components/product/ProductList/ProductList'
import TopBanner from '@/components/home/TopBanner/TopBanner'
import MainSectionTitle from '@/components/shared/MainSectionTitle/MainSectionTitle'
import Link from 'next/link'
import FlashSale from '@/components/home/FlashSale/FlashSale'

export const metadata: Metadata = {
  // title: 'My App Title',
}


export default function Home() {
  return (
    <ClientLayout>
      {/* <Carousel /> */}
      <TopBanner />
      <FlashSale />
      <div className="container-xxl pt-5">
        <div className="container">
          <MainSectionTitle
            title='Xu hướng mua sắm'
            shortDescription='Các sản phẩm dưới đây có lượt doanh thu cao nhất'
          />
          <div className='row pb-4'>
            <ProductList />
          </div>
          <div className="col-12 text-center">
            {/* Go to product list page  */}
            <Link className="btn btn-primary rounded-pill py-3 px-5" href="">
              Xem thêm
            </Link>
          </div>
          <MainSectionTitle
            title='Sách giáo khoa'
          />
          <div className='row pb-4'>
            <ProductList />
          </div>
          <div className="col-12 text-center">
            {/* Go to product list page  */}
            <Link className="btn btn-primary rounded-pill py-3 px-5" href="">
              Xem thêm
            </Link>
          </div>
        </div>
      </div>
      <FirmVisit />
    </ClientLayout>
  )
}
