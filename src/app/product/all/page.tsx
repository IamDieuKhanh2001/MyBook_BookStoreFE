import Product from '@/components/product/Product'
import Breadcrumb from '@/components/shared/Breadcrumb/Breadcrumb'
import ClientLayout from '@/layouts/ClientLayout/ClientLayout'
import React from 'react'

const ProductListPage = () => {
  return (
    <>
      <ClientLayout>
        <Breadcrumb />
        <Product />
      </ClientLayout>
    </>
  )
}

export default ProductListPage
