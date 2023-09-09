import ClientHeader from '@/components/ClientHeader/ClientHeader'
import Product from '@/components/product/Product'
import ClientLayout from '@/layouts/ClientLayout/ClientLayout'
import React from 'react'

const ProductListPage = () => {
  return (
    <>
      <ClientLayout>
        <ClientHeader />
        <Product />
      </ClientLayout>
    </>
  )
}

export default ProductListPage
