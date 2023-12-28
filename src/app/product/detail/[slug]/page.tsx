import ProductDetail from '@/components/product/ProductDetail/ProductDetail'
import React from 'react'
import Breadcrumb from '@/components/shared/Breadcrumb/Breadcrumb'

interface IProductDetailPageProps {
  params: {
    slug: string;
  };
}
const ProductDetailPage = ({ params }: IProductDetailPageProps) => {
  const { slug } = params

  return (
    <>
      <Breadcrumb />
      <ProductDetail slug={slug} />
    </>
  )
}

export default ProductDetailPage
