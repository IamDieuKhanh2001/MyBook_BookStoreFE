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
import Carousel from '@/components/home/Carousel'
import FirmVisit from '@/components/home/FirmVisit'
import Product from '@/components/product/Product'
import Testimonial from '@/components/home/Testimonial'
import BtnBackToTop from '@/layouts/ClientLayout/BtnBackToTop/BtnBackToTop'
import ClientLayout from '@/layouts/ClientLayout/ClientLayout'
import { Metadata } from 'next'
import React from 'react'
import ProductList from '@/components/product/ProductList/ProductList'

export const metadata: Metadata = {
  // title: 'My App Title',
}

export default function Home() {
  return (
    <ClientLayout>

      <Carousel />
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <img className="img-fluid w-100" src="img/about/about2.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-5 mb-4">Best Organic Fruits And Vegetables</h1>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <p><i className="fa fa-check text-primary me-3" />Tempor erat elitr rebum at clita</p>
              <p><i className="fa fa-check text-primary me-3" />Aliqu diam amet diam et eos</p>
              <p><i className="fa fa-check text-primary me-3" />Clita duo justo magna dolore erat amet</p>
              <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      <div>
        {/* Feature Start */}
        <div className="container-fluid bg-light bg-icon my-5 py-6">
          <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
              <h1 className="display-5 mb-3">Our Features</h1>
              <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="bg-white text-center h-100 p-4 p-xl-5">
                  <img className="img-fluid mb-4" src="img/icon-1.png" alt="icon1" />
                  <h4 className="mb-3">Natural Process</h4>
                  <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                  <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="bg-white text-center h-100 p-4 p-xl-5">
                  <img className="img-fluid mb-4" src="img/icon-2.png" alt="icon2" />
                  <h4 className="mb-3">Organic Products</h4>
                  <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                  <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="bg-white text-center h-100 p-4 p-xl-5">
                  <img className="img-fluid mb-4" src="img/icon-3.png" alt="icon3" />
                  <h4 className="mb-3">Biologically Safe</h4>
                  <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                  <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature End */}
        <div className="container-xxl py-5">
          <div className="container">
            {/* Title start */}
            <div className="row g-0 gx-5 align-items-end">
              <div className="col-lg-6">
                <div className="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                  <h1 className="display-5 mb-3">Our Products</h1>
                  <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
              </div>
            </div>
            <div className='row'>
              <ProductList />
            </div>
            {/* Title End */}
          </div>
        </div>
        <div className="col-12 text-center">
          {/* Go to product list page  */}
          <a className="btn btn-primary rounded-pill py-3 px-5" href="">
            Browse More Products
          </a>
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

      </div>
    </ClientLayout>
  )
}
