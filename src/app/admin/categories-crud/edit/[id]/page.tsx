"use client"

import React from 'react'

interface CategoryEditProps {
    params: {
      id: number;
    };
  }
const CategoryEdit = ({ params }: CategoryEditProps) => {
  return (
    <div>
      <h1>Edit category of id: {params.id}</h1>
    </div>
  )
}

export default CategoryEdit