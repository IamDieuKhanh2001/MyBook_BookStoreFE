"use client"
import ClientHeader from '@/components/ClientHeader/ClientHeader'
import ProductImgSlider from '@/components/ProductImgSlider/ProductImgSlider'
import ClientLayout from '@/layouts/ClientLayout/ClientLayout'
import React, { useState } from 'react'

const ProductDetailPage = () => {
  const [productImages, SetProductImages] = useState([
    '/img/book/sach1.jpg',
    '/img/book/sach2.jpg',
    '/img/book/sach3.jpg',
    '/img/book/sach4.jpg',
    '/img/book/sach5.jpg'

  ])
  return (
    <ClientLayout>
      <ClientHeader />
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <ProductImgSlider imgList={productImages} />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-5 mb-4">Dummy Book Tilte</h1>
              <h2>
                <span className="text-body text-decoration-line-through me-2">30.000</span>
                <span className="text-primary me-1">15.000 VND</span>
              </h2>
              <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempora atque et culpa, modi minima magni cupiditate mollitia est, laborum maxime id autem esse veniam eveniet voluptas? Error, numquam aperiam.</p>
              <p><i className="fa fa-check text-primary me-3" />Đổi trả trong vòng 7 ngày</p>
              <p><i className="fa fa-check text-primary me-3" />Cam kết sản phẩm chính hãng</p>
              <p><i className="fa fa-check text-primary me-3" />Vận chuyển trên toàn quốc</p>
              <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">
                <i className="fas fa-cart-plus me-3" />
                Thêm vào giỏ hàng
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </ClientLayout>
  )
}

export default ProductDetailPage
