'use client'
import React from 'react'
import styles from './FlashSaleSliderItem.module.scss'
import { IFlashSaleBook } from '../../../../../../types/IFlashSaleBook'
import Link from 'next/link'
import { truncateText } from '@/lib/utils/TextUtils'
import StickerChayHang from '@/components/product/ProductList/ProductItem/StickerChayHang/StickerChayHang'

interface IFlashSaleSliderItemProps {
    data: IFlashSaleBook
}
const FlashSaleSliderItem = (props: IFlashSaleSliderItemProps) => {
    const { data } = props

    const onImageError = (e: any) => {
        e.target.src = '/img/book/no-image.jpg'
    }

    const calculatePercentage = (soldItems: number, totalItems: number) => {
        if (totalItems <= 0) {
            return 0;
        }
        return ((soldItems / totalItems) * 100).toFixed(2);
    };

    return (
        <div className={styles.flashSaleItem}>
            <div className="position-relative overflow-hidden">
                <div className='d-flex justify-content-center'>
                    <Link
                        target='_blank'
                        href={`/product/detail/${data.isbn_code}`}
                        className={styles.imgContainer}
                    >
                        <img
                            className="img-fluid"
                            src={
                                data.product_info?.images[0] ?
                                    data.product_info.images[0]?.image_source
                                    :
                                    '/img/book/no-image.jpg'
                            }
                            onError={onImageError}
                            alt={data.isbn_code}
                        />
                        {data.product_info?.quantity <= 0 && <StickerChayHang />}
                    </Link>
                </div>
                {data.product_info.flash_sale_info?.discount_percent && (
                    <div className="bg-warning fw-bold rounded text-white position-absolute end-0 top-0 m-2 px-3">
                        -{data.product_info.flash_sale_info.discount_percent}%
                    </div>
                )}
            </div>
            <div className="px-4 py-2">
                <Link className="d-block h6 mb-1" target='_blank' href={`/product/detail/${data.isbn_code}`} style={{ minHeight: '38px' }}>
                    {
                        truncateText(data.product_info?.name, 40)
                    }
                </Link>
                <div className='d-flex flex-column'>
                    <span className="text-warning fw-bold me-1">{data.product_info?.flash_sale_info?.price_after_discount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                    <span className="text-body text-decoration-line-through">
                        {data.product_info.flash_sale_info?.original_price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                    </span>
                </div>
                {data.product_info.flash_sale_info?.instock_info && (
                    <div className={styles.progress}>
                        <span className={styles.progressValue}>
                            Đã bán {data.product_info.flash_sale_info.instock_info.sold_number}
                        </span>
                        <div
                            role='progressbar'
                            className={styles.progressBar} style={{
                                width: `${calculatePercentage(
                                    data.product_info.flash_sale_info.instock_info.sold_number,
                                    data.product_info.flash_sale_info.instock_info.instock
                                )}%`,
                            }}
                        ></div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FlashSaleSliderItem
