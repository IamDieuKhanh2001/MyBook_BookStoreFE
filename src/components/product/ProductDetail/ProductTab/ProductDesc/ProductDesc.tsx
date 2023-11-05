'use client'
import React from 'react'

interface IProductDescProps {
    desc: string
}
const ProductDesc = ({ desc = '' }: IProductDescProps) => {
    return (
        <>
            <h4 className="my-3">Mô tả sản phẩm</h4>
            <p>
                {desc}
            </p>
        </>
    )
}

export default ProductDesc
