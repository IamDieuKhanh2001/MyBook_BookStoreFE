import ClientHeader from '@/components/ClientHeader/ClientHeader'
import ProductImgSlider from '@/components/product/ProductDetail/ProductImgSlider/ProductImgSlider'
import ProductDetail from '@/components/product/ProductDetail/ProductDetail'
import ClientLayout from '@/layouts/ClientLayout/ClientLayout'
import React, { useState } from 'react'
import Breadcrumb from '@/components/shared/Breadcrumb/Breadcrumb'

const ProductDetailPage = () => {

  return (
    <ClientLayout>
      <Breadcrumb />
      <ProductDetail />
    </ClientLayout>
  )
}

export default ProductDetailPage
