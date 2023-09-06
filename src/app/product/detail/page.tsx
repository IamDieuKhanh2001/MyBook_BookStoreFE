import ClientHeader from '@/components/ClientHeader/ClientHeader'
import ProductImgSlider from '@/components/ProductImgSlider/ProductImgSlider'
import ProductDetail from '@/components/product/detail/ProductDetail'
import ClientLayout from '@/layouts/ClientLayout/ClientLayout'
import React, { useState } from 'react'

const ProductDetailPage = () => {

  return (
    <ClientLayout>
      <ClientHeader />
      <ProductDetail />
    </ClientLayout>
  )
}

export default ProductDetailPage
