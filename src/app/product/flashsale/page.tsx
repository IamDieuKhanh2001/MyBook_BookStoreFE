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
import { useRouter } from 'next/navigation'
const FlashSaleHeader = dynamic(() => import('@/components/product/FlashSale/FlashSaleHeader/FlashSaleHeader'), { ssr: false })

const FlashSalePage = () => {
  const [periodActive, setPeriodActive] = useState<IFlashSalePeriod>()
  const { getFlashSaleToday } = useAPIGuest()
  const { data: flashSaleTodayData, error, isLoading } = getFlashSaleToday()
  const router = useRouter()

  React.useEffect(() => {
    if (flashSaleTodayData.hours?.length > 0) {
      setPeriodActive(flashSaleTodayData.hours[0])
    }
  }, [flashSaleTodayData])

  // React.useEffect(() => {
  //   console.log(periodActive)
  // }, [periodActive])

  return (
    <>
      <Breadcrumb />
      <div className="container-xxl">
        {flashSaleTodayData && !isLoading && (
          <>
            <FlashSalePageBanner />
            <div className={styles.flashSalePage}>
              {periodActive && (
                <FlashSaleHeader
                  periodActive={periodActive}
                />
              )}
              <FlashSalePeriods
                periodActive={periodActive}
                setPeriodActive={setPeriodActive}
                periodList={flashSaleTodayData.hours}
              />

              <div className={styles.flashSalePageContent}>
                <div className={styles.flashSalePagePeriodContent}>
                  <FlashSalePeriodProducts flashSalePeriodId={47} />
                </div>
              </div>
            </div>
          </>
        )}
        {!flashSaleTodayData && !isLoading && (
          <div className='row'>
            <div className="col-12 p-5">
              <div className="text-center">
                <div className="d-flex justify-content-center mb-5 flex-column align-items-center">
                  <span className="fw-bold fs-1">Hôm nay không có diễn ra flash sale</span>
                  <small className="mt-2 fs-5">Cảm ơn bạn đã sử dụng dịch vụ.</small>
                </div>
                <button
                  className="btn btn-success btn-block"
                  onClick={() => router.push('/')}
                >
                  Về trang chủ
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default FlashSalePage
