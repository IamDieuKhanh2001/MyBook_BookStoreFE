import React from 'react'

interface ProductManagementEditPageProps {
  params: {
    id: number;
  };
}
const ProductManagementEditPage = ({ params }: ProductManagementEditPageProps) => {
  return (
    <>
      <h1>Edit {params.id}</h1>
    </>
  )
}

export default ProductManagementEditPage
