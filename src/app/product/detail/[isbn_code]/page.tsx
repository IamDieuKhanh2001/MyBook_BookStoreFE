import ProductDetail from '@/components/product/ProductDetail/ProductDetail'
import React from 'react'
import Breadcrumb from '@/components/shared/Breadcrumb/Breadcrumb'

interface IProductDetailPageProps {
  params: {
    isbn_code: string;
  };
}
const ProductDetailPage = ({ params }: IProductDetailPageProps) => {
  const { isbn_code } = params

  return (
    <>
      <Breadcrumb />
      <ProductDetail isbnCode={isbn_code} />
    </>
  )
}

export default ProductDetailPage
