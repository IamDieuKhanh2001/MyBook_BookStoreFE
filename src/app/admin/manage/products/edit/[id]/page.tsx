import React from 'react'

interface ProductManagementEditPageProps {
    params: {
      id: number;
    };
  }
const ProductManagementEditPage = ({ params }: ProductManagementEditPageProps) => {
  return (
    <div>
      <h1>Edit {params.id}</h1>
    </div>
  )
}

export default ProductManagementEditPage
