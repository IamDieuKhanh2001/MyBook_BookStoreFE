"use client"
import ProductImgSlider from '@/components/ProductImgSlider/ProductImgSlider'
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
    <div>
      <h1>Product detail</h1>
      <ProductImgSlider imgList={productImages}/>
    </div>
  )
}

export default ProductDetailPage
