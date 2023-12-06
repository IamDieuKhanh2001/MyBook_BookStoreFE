import React from 'react'
import styles from './FlashSaleProduct.module.scss'
import Link from 'next/link'
import StickerChayHang from '@/components/product/ProductList/ProductItem/StickerChayHang/StickerChayHang'
import { IFlashSaleBook } from '../../../../../../types/IFlashSaleBook'
import { truncateText } from '@/lib/utils/TextUtils'

interface IFlashSaleProductProps {
    data: IFlashSaleBook
}
const FlashSaleProduct = (props: IFlashSaleProductProps) => {
    const { data } = props

    const onImageError = (e: any) => {
        e.target.src = '/img/book/no-image.jpg'
    }

    return (
        <div className='col-md-3 col-4 wow fadeInUp' data-wow-delay="0.3s">
            <div className={styles.flashSaleItem}>
                <div className="position-relative overflow-hidden">
                    <div className='d-flex justify-content-center'>
                        <Link
                            target='_blank'
                            href={``}
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
                            {data.product_info.quantity <= 0 && <StickerChayHang />}
                        </Link>
                    </div>
                    <div className="bg-warning fw-bold rounded text-white position-absolute end-0 top-0 m-2 px-3">
                        -10% (cứng)
                    </div>
                </div>
                <div className="px-4 py-2">
                    <Link className="d-block h6 mb-1" href="" style={{minHeight: '38px'}}>
                        {
                            truncateText(data.product_info.name, 40)
                        }
                    </Link>
                    <div className='d-flex flex-column'>
                        <span className="text-warning fw-bold me-1">{data.product_info.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                        <span className="text-body text-decoration-line-through">$29.00 (cứng)</span>
                    </div>
                    <div className={styles.progress}>
                        <span className={styles.progressValue}>Đã bán 100 (cứng)</span>
                        <div
                            role='progressbar'
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={72}
                            className={styles.progressBar} style={{
                                width: '72%',
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlashSaleProduct
