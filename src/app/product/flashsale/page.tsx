import FlashSaleHeader from '@/components/product/FlashSale/FlashSaleHeader/FlashSaleHeader'
import Breadcrumb from '@/components/shared/Breadcrumb/Breadcrumb'
import React from 'react'
import styles from './page.module.scss'
import Link from 'next/link'
import StickerChayHang from '@/components/product/ProductList/ProductItem/StickerChayHang/StickerChayHang'
import FlashSalePageBanner from '@/components/product/FlashSale/FlashSalePageBanner/FlashSalePageBanner'

const FlashSalePage = () => {
  return (
    <>
      <Breadcrumb />
      <div className="container-xxl">
        <FlashSalePageBanner />
        <div className={styles.flashSalePage}>
          <FlashSaleHeader initialHours={10} initialMinutes={30} />
          <div className={`${styles.flashSalePeriods} row g-0`}>
            <div className={`col-md-2 col-6 ${styles.flashSalePeriodItem} ${styles.flashSalePeriodActive}`}>
              <a className={styles.flashSalePeriodsLabel}>
                <div className={styles.time}>
                  14:00
                </div>
                <div className={styles.status}>
                  Đang Bán
                </div>
              </a>
            </div>
            <div className={`col-md-2 col-6 ${styles.flashSalePeriodItem}`}>
              <a className={styles.flashSalePeriodsLabel}>
                <div className={styles.time}>
                  16:00
                </div>
                <div className={styles.status}>
                  Sắp Bán
                </div>
              </a>
            </div>
            <div className={`col-md-2 col-6 ${styles.flashSalePeriodItem}`}>
              <a className={styles.flashSalePeriodsLabel}>
                <div className={styles.time}>
                  18:00
                </div>
                <div className={styles.status}>
                  Sắp Bán
                </div>
              </a>
            </div>
            <div className={`col-md-2 col-6 ${styles.flashSalePeriodItem}`}>
              <a className={styles.flashSalePeriodsLabel}>
                <div className={styles.time}>
                  20:00
                </div>
                <div className={styles.status}>
                  Sắp Bán
                </div>
              </a>
            </div>
            <div className={`col-md-2 col-6 ${styles.flashSalePeriodItem}`}>
              <a className={styles.flashSalePeriodsLabel}>
                <div className={styles.time}>
                  22:00
                </div>
                <div className={styles.status}>
                  Sắp Bán
                </div>
              </a>
            </div>
            <div className={`col-md-2 col-6 ${styles.flashSalePeriodItem}`}>
              <a className={styles.flashSalePeriodsLabel}>
                <div className={styles.time}>
                  24:00
                </div>
                <div className={styles.status}>
                  Sắp Bán
                </div>
              </a>
            </div>
          </div>
          {/* content  */}
          <div className={styles.flashSalePageContent}>
            <div className={styles.flashSalePagePeriodContent}>
              <div className={styles.flashSalePageProducts} style={{ display: 'block' }}>
                <div className='row g-2'>
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
                              // src={
                              //   data?.images[0] ?
                              //     data.images[0]?.image_source
                              //     :
                              //     '/img/book/no-image.jpg'
                              // }
                              src={'/img/book/sach2.jpg'}
                              // onError={onImageError}
                              alt={'anh'}
                            />
                            <StickerChayHang />
                            {/* {data.quantity <= 0 && <StickerChayHang />} */}
                          </Link>
                        </div>
                        <div className="bg-warning fw-bold rounded text-white position-absolute end-0 top-0 m-2 px-3">
                          -16%
                        </div>
                      </div>
                      <div className="px-4 py-2">
                        <a className="d-block h6 mb-2" href="">Dummy book title tile 2</a>
                        <div className='d-flex flex-column'>
                          <span className="text-warning fw-bold me-1">$19.00</span>
                          <span className="text-body text-decoration-line-through">$29.00</span>
                        </div>
                        <div className={styles.progress}>
                          <span className={styles.progressValue}>Đã bán 100</span>
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
                              // src={
                              //   data?.images[0] ?
                              //     data.images[0]?.image_source
                              //     :
                              //     '/img/book/no-image.jpg'
                              // }
                              src={'/img/book/sach2.jpg'}
                              // onError={onImageError}
                              alt={'anh'}
                            />
                            <StickerChayHang />
                            {/* {data.quantity <= 0 && <StickerChayHang />} */}
                          </Link>
                        </div>
                        <div className="bg-warning fw-bold rounded text-white position-absolute end-0 top-0 m-2 px-3">
                          -16%
                        </div>
                      </div>
                      <div className="px-4 py-2">
                        <a className="d-block h6 mb-2" href="">Dummy book title tile 2</a>
                        <div className='d-flex flex-column'>
                          <span className="text-warning fw-bold me-1">$19.00</span>
                          <span className="text-body text-decoration-line-through">$29.00</span>
                        </div>
                        <div className={styles.progress}>
                          <span className={styles.progressValue}>Đã bán 100</span>
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
                              // src={
                              //   data?.images[0] ?
                              //     data.images[0]?.image_source
                              //     :
                              //     '/img/book/no-image.jpg'
                              // }
                              src={'/img/book/sach2.jpg'}
                              // onError={onImageError}
                              alt={'anh'}
                            />
                            <StickerChayHang />
                            {/* {data.quantity <= 0 && <StickerChayHang />} */}
                          </Link>
                        </div>
                        <div className="bg-warning fw-bold rounded text-white position-absolute end-0 top-0 m-2 px-3">
                          -16%
                        </div>
                      </div>
                      <div className="px-4 py-2">
                        <a className="d-block h6 mb-2" href="">Dummy book title tile 2</a>
                        <div className='d-flex flex-column'>
                          <span className="text-warning fw-bold me-1">$19.00</span>
                          <span className="text-body text-decoration-line-through">$29.00</span>
                        </div>
                        <div className={styles.progress}>
                          <span className={styles.progressValue}>Đã bán 100</span>
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
                              // src={
                              //   data?.images[0] ?
                              //     data.images[0]?.image_source
                              //     :
                              //     '/img/book/no-image.jpg'
                              // }
                              src={'/img/book/sach2.jpg'}
                              // onError={onImageError}
                              alt={'anh'}
                            />
                            <StickerChayHang />
                            {/* {data.quantity <= 0 && <StickerChayHang />} */}
                          </Link>
                        </div>
                        <div className="bg-warning fw-bold rounded text-white position-absolute end-0 top-0 m-2 px-3">
                          -16%
                        </div>
                      </div>
                      <div className="px-4 py-2">
                        <a className="d-block h6 mb-2" href="">Dummy book title tile 2</a>
                        <div className='d-flex flex-column'>
                          <span className="text-warning fw-bold me-1">$19.00</span>
                          <span className="text-body text-decoration-line-through">$29.00</span>
                        </div>
                        <div className={styles.progress}>
                          <span className={styles.progressValue}>Đã bán 100</span>
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
                              // src={
                              //   data?.images[0] ?
                              //     data.images[0]?.image_source
                              //     :
                              //     '/img/book/no-image.jpg'
                              // }
                              src={'/img/book/sach2.jpg'}
                              // onError={onImageError}
                              alt={'anh'}
                            />
                            <StickerChayHang />
                            {/* {data.quantity <= 0 && <StickerChayHang />} */}
                          </Link>
                        </div>
                        <div className="bg-warning fw-bold rounded text-white position-absolute end-0 top-0 m-2 px-3">
                          -16%
                        </div>
                      </div>
                      <div className="px-4 py-2">
                        <a className="d-block h6 mb-2" href="">Dummy book title tile 2</a>
                        <div className='d-flex flex-column'>
                          <span className="text-warning fw-bold me-1">$19.00</span>
                          <span className="text-body text-decoration-line-through">$29.00</span>
                        </div>
                        <div className={styles.progress}>
                          <span className={styles.progressValue}>Đã bán 100</span>
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
                              // src={
                              //   data?.images[0] ?
                              //     data.images[0]?.image_source
                              //     :
                              //     '/img/book/no-image.jpg'
                              // }
                              src={'/img/book/sach2.jpg'}
                              // onError={onImageError}
                              alt={'anh'}
                            />
                            <StickerChayHang />
                            {/* {data.quantity <= 0 && <StickerChayHang />} */}
                          </Link>
                        </div>
                        <div className="bg-warning fw-bold rounded text-white position-absolute end-0 top-0 m-2 px-3">
                          -16%
                        </div>
                      </div>
                      <div className="px-4 py-2">
                        <a className="d-block h6 mb-2" href="">Dummy book title tile 2</a>
                        <div className='d-flex flex-column'>
                          <span className="text-warning fw-bold me-1">$19.00</span>
                          <span className="text-body text-decoration-line-through">$29.00</span>
                        </div>
                        <div className={styles.progress}>
                          <span className={styles.progressValue}>Đã bán 100</span>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FlashSalePage
