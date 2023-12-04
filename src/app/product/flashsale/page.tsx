'use client'

import FlashSaleHeader from '@/components/product/FlashSale/FlashSaleHeader/FlashSaleHeader'
import Breadcrumb from '@/components/shared/Breadcrumb/Breadcrumb'
import React, { useState } from 'react'
import styles from './page.module.scss'
import FlashSalePageBanner from '@/components/product/FlashSale/FlashSalePageBanner/FlashSalePageBanner'
import FlashSalePeriods from '@/components/product/FlashSale/FlashSalePeriods/FlashSalePeriods'
import FlashSalePeriodProducts from '@/components/product/FlashSale/FlashSalePeriodProducts/FlashSalePeriodProducts'

const FlashSalePage = () => {
  const [periodIdActive, setPeriodIdActive] = useState(0)

  return (
    <>
      <Breadcrumb />
      <div className="container-xxl">
        <FlashSalePageBanner />
        <div className={styles.flashSalePage}>
          <FlashSaleHeader initialHours={10} initialMinutes={30} />
          <FlashSalePeriods
            periodIdActive={periodIdActive}
            setPeriodIdActive={setPeriodIdActive}
          />
          {/* page flash sale content  */}
          <div className={styles.flashSalePageContent}>
            <div className={styles.flashSalePagePeriodContent}>
              <FlashSalePeriodProducts />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FlashSalePage
