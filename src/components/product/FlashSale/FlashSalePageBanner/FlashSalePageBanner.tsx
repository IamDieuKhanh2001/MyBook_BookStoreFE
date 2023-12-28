'use client'
import Link from 'next/link'
import React from 'react'
import styles from './FlashSalePageBanner.module.scss'

const FlashSalePageBanner = () => {
  return (
    <>
      <div className={styles.pageBanner}>
        <Link href={''}>
          <img
            src={'https://cdn0.fahasa.com/media/wysiwyg/Thang-12-2023/NeolDayT1223_Flashsale_Banner_1920x400.jpg'}
            alt="flash-sale-banner" />
          {/* <img src={'/img/flashsale/flash-sale-banner.jpg'} alt="flash-sale-banner" /> */}
        </Link>
      </div>
    </>
  )
}

export default FlashSalePageBanner
