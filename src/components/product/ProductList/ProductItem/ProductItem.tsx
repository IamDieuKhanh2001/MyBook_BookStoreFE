"use client"
import React from 'react'
import styles from "./ProductItem.module.scss"
import { IBook } from '../../../../../types/IBook'
import { truncateText } from '@/lib/utils/TextUtils'
import Link from 'next/link'
import StickerChayHang from './StickerChayHang/StickerChayHang'

interface IProductItemProps {
    data: IBook
}
const ProductItem = (props: IProductItemProps) => {
    const { data } = props

    const onImageError = (e: any) => {
        e.target.src = '/img/book/no-image.jpg'
    }

    const calculatePercentage = (currentStar: number, maxStar: number = 5) => {
        if (currentStar <= 0) {
            return 0;
        }
        return ((currentStar / maxStar) * 100).toFixed(2);
    };

    return (
        // col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3
        <div className="col-xl-3 col-lg-3 col-md-3 col-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className={styles.productItem}>
                <div className="position-relative overflow-hidden d-flex justify-content-center">
                    <Link
                        target='_blank'
                        href={`/product/detail/${data.slug}`}
                        className={styles.imgContainer}
                    >
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
                        />
                        {data.quantity <= 0 && <StickerChayHang />}
                    </Link>
                </div>
                <div className="px-4 py-2">
                    <Link
                        href={`/product/detail/${data.slug}`}
                        target='_blank'
                        className={`d-block h6 mb-1 ${styles.productTitle}`}
                    >
                        {truncateText(data.name, 40)}
                    </Link>
                    <div className='d-flex flex-column'>
                        <span className="text-danger fw-bold me-1">
                            {data.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                        </span>
                    </div>
                </div>
                <div className={`${styles.ratingContainer} px-3 pb-2`}>
                    <div className={styles.ratings}>
                        <div className={styles.ratingBox}>
                            <div className={styles.rating}
                                style={{ width: `${calculatePercentage(data.comment_info?.avg_star || 0)}%` }}
                            ></div>
                        </div>
                        <div className={styles.amount}>
                            ({data.comment_info?.total_comment || 0})
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
