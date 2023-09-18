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
import Testimonial from '@/components/home/Testimonial/Testimonial'
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
      <Testimonial />

      {/* Blog Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
            <h1 className="display-5 mb-3">Latest Blog</h1>
            <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <img className="img-fluid" src="img/blog-1.jpg" alt="" />
              <div className="bg-light p-4">
                <a className="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                <div className="text-muted border-top pt-4">
                  <small className="me-3"><i className="fa fa-user text-primary me-2" />Admin</small>
                  <small className="me-3"><i className="fa fa-calendar text-primary me-2" />01 Jan, 2045</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <img className="img-fluid" src="img/blog-2.jpg" alt="" />
              <div className="bg-light p-4">
                <a className="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                <div className="text-muted border-top pt-4">
                  <small className="me-3"><i className="fa fa-user text-primary me-2" />Admin</small>
                  <small className="me-3"><i className="fa fa-calendar text-primary me-2" />01 Jan, 2045</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <img className="img-fluid" src="img/blog-3.jpg" alt="" />
              <div className="bg-light p-4">
                <a className="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                <div className="text-muted border-top pt-4">
                  <small className="me-3"><i className="fa fa-user text-primary me-2" />Admin</small>
                  <small className="me-3"><i className="fa fa-calendar text-primary me-2" />01 Jan, 2045</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End */}
    </ClientLayout>
  )
}
