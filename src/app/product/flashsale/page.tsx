'use client'

import Breadcrumb from '@/components/shared/Breadcrumb/Breadcrumb'
import React, { useState } from 'react'
import styles from './page.module.scss'
import FlashSalePageBanner from '@/components/product/FlashSale/FlashSalePageBanner/FlashSalePageBanner'
import FlashSalePeriods from '@/components/product/FlashSale/FlashSalePeriods/FlashSalePeriods'
import FlashSalePeriodProducts from '@/components/product/FlashSale/FlashSalePeriodProducts/FlashSalePeriodProducts'
import useAPIGuest from '@/lib/hooks/api/useAPIGuest'
import dynamic from 'next/dynamic'
import { IFlashSalePeriod } from '../../../../types/IFlashSalePeriod'
const FlashSaleHeader = dynamic(() => import('@/components/product/FlashSale/FlashSaleHeader/FlashSaleHeader'), { ssr: false })

const FlashSalePage = () => {
  const [periodActive, setPeriodActive] = useState<IFlashSalePeriod>()
  const { getFlashSaleToday } = useAPIGuest()
  const { data: flashSaleTodayData, error, isLoading } = getFlashSaleToday()

  React.useEffect(() => {
    if (flashSaleTodayData.hours?.length > 0) {
      setPeriodActive(flashSaleTodayData.hours[0])
    }
  }, [flashSaleTodayData])

  const renderFlashSaleHeader = (): React.ReactNode => {
    if (periodActive) {
      const [hoursStart, minutesStart, secondsStart] = periodActive.time_start.split(':').map(Number);
      const [hoursEnd, minutesEnd, secondsEnd] = periodActive.time_end.split(':').map(Number);
      return (
        <FlashSaleHeader
          initialHoursStart={hoursStart}
          initialMinutesStart={minutesStart}
          initialSecondsStart={secondsStart}
          initialHoursEnd={hoursEnd}
          initialMinutesEnd={minutesEnd}
          initialSecondEnd={secondsEnd}
        />
      )
    }
    return (
      <></>
    )
  }

  React.useEffect(() => {
    console.log(periodActive)
  }, [periodActive])

  return (
    <>
      <Breadcrumb />
      <div className="container-xxl">
        <FlashSalePageBanner />
        <div className={styles.flashSalePage}>
          {renderFlashSaleHeader()}
          <FlashSalePeriods
            periodActive={periodActive}
            setPeriodActive={setPeriodActive}
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
