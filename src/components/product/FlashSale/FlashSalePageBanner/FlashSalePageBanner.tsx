import Link from 'next/link'
import React from 'react'
import styles from './FlashSalePageBanner.module.scss'

const FlashSalePageBanner = () => {
  return (
    <>
      <div className={styles.pageBanner}>
          <Link href={''}>
            <img src={'/img/flashsale/flash-sale-banner.jpg'} alt="flash-sale-banner" />
          </Link>
        </div>
    </>
  )
}

export default FlashSalePageBanner
