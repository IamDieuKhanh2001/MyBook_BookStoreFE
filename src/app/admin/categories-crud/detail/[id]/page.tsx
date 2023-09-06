import React from 'react'

interface CategoryDetailProps {
    params: {
      id: number;
    };
  }
const CategoryDetail = ({ params }: CategoryDetailProps) => {
  return (
    <div>
      <h1>Info category of id: {params.id}</h1>
    </div>
  )
}

export default CategoryDetail
