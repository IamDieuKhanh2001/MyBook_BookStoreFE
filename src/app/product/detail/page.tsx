import ClientHeader from '@/components/ClientHeader/ClientHeader'
import ProductImgSlider from '@/components/ProductImgSlider/ProductImgSlider'
import LoadingOverLay from '@/components/loadingOverLay/loadingOverLay'
import ProductDetail from '@/components/product/ProductDetail/ProductDetail'
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
