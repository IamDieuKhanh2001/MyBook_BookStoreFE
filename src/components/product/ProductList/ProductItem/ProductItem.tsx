"use client"
import React from 'react'
import styles from "./ProductItem.module.scss"
import { IBook } from '../../../../../types/IBook'
import { truncateText } from '@/lib/utils/TextUtils'
import { useRouter } from 'next/navigation'

interface IProductItemProps {
    data: IBook
}
const ProductItem = (props: IProductItemProps) => {
    const { data } = props
    const router = useRouter()

    const onImageError = (e: any) => {
        e.target.src = '/img/book/no-image.jpg'
    }

    const handleDetailPageRedirect = (isbn_code: string) => {
        router.push(`/product/detail/${isbn_code}`)
    }

    return (
        // col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3
        <div className="col-xl-3 col-lg-3 col-md-3 col-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className={styles.productItem}>
                <div className="position-relative overflow-hidden d-flex justify-content-center">
                    <img
                        className="img-fluid w-100"
                        src={
                            data?.images[0] ?
                                data.images[0]?.image_source
                                :
                                '/img/book/no-image.jpg'
                        }
                        onError={onImageError}
                        alt={data.isbn_code}
                        onClick={() => handleDetailPageRedirect(data.isbn_code)}
                    />
                </div>
                <div className="px-4 py-2">
                    <a className={`d-block h6 mb-2 ${styles.productTitle}`} onClick={() => handleDetailPageRedirect(data.isbn_code)}>
                        {truncateText(data.name, 40)}
                    </a>
                    <div className='d-flex flex-column'>
                        isbn: {data.isbn_code}
                        <span className="text-danger fw-bold me-1">
                            {data.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                        </span>
                    </div>
                </div>
                <div className={`${styles.ratingContainer} px-3 pb-2`}>
                    <div className={styles.ratings}>
                        <div className={styles.ratingBox}>
                            <div className={styles.rating} style={{ width: '60%' }}></div>
                        </div>
                        <div className={styles.amount}>
                            (0)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
