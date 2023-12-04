'use client'

import Breadcrumb from '@/components/shared/Breadcrumb/Breadcrumb'
import React, { useState } from 'react'
import styles from './page.module.scss'
import FlashSalePageBanner from '@/components/product/FlashSale/FlashSalePageBanner/FlashSalePageBanner'
import FlashSalePeriods from '@/components/product/FlashSale/FlashSalePeriods/FlashSalePeriods'
import FlashSalePeriodProducts from '@/components/product/FlashSale/FlashSalePeriodProducts/FlashSalePeriodProducts'
import useAPIGuest from '@/lib/hooks/api/useAPIGuest'
import FlashSaleHeader from '@/components/product/FlashSale/FlashSaleHeader/FlashSaleHeader'

const FlashSalePage = () => {
  const [periodIdActive, setPeriodIdActive] = useState(-1)
  const { getFlashSaleToday } = useAPIGuest()
  const { data: flashSaleTodayData, mutate, error, isLoading } = getFlashSaleToday()

  React.useEffect(() => {
    if (flashSaleTodayData.hours?.length > 0) {
      setPeriodIdActive(flashSaleTodayData.hours[0].id)
    }
  }, [flashSaleTodayData])

  return (
    <>
      <Breadcrumb />
      <div className="container-xxl">
        <FlashSalePageBanner />
        <div className={styles.flashSalePage}>
          <FlashSaleHeader
            initialHoursStart={13}
            initialMinutesStart={11}
            initialSecondsStart={0}
            initialHoursEnd={13}
            initialMinutesEnd={19}
            initialSecondEnd={0}
          />
          <FlashSalePeriods
            periodIdActive={periodIdActive}
            setPeriodIdActive={setPeriodIdActive}
            periodList={flashSaleTodayData.hours}
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
