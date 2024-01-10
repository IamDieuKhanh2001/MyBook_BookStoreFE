'use client'
import React from 'react'

interface IProductDescProps {
    desc: string
    slug: string
}
const ProductDesc = ({ desc = '', slug = '' }: IProductDescProps) => {
    const handlePreviewAudio = () => {
        const newWindow = window.open(
            `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/book/preview/audio/${slug}`,
            '_blank'
        );
    }

    return (
        <>
            <h4 className="my-3">Mô tả sản phẩm</h4>
            <div className='d-flex align-items-center'>
                <div className='pe-2'>
                    Nghe thử nội dung:
                </div>
                <button
                    type="button"
                    className="btn btn-outline-secondary rounded-circle"
                    onClick={handlePreviewAudio}
                >
                    <i className="fas fa-volume-up" />
                </button>
            </div>
            <p>
                {desc}
            </p>
        </>
    )
}

export default ProductDesc
