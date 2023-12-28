'use client'

import Breadcrumb from '@/components/shared/Breadcrumb/Breadcrumb'
import React, { useState, useEffect } from 'react'
import styles from './page.module.scss'
import FlashSalePageBanner from '@/components/product/FlashSale/FlashSalePageBanner/FlashSalePageBanner'
import FlashSalePeriods from '@/components/product/FlashSale/FlashSalePeriods/FlashSalePeriods'
import FlashSalePeriodProducts from '@/components/product/FlashSale/FlashSalePeriodProducts/FlashSalePeriodProducts'
import useAPIGuest from '@/lib/hooks/api/useAPIGuest'
import { IFlashSalePeriod } from '../../../../types/IFlashSalePeriod'
import { useRouter } from 'next/navigation'
import { convertMillisecondsToHours, convertMillisecondsToMinutes, convertMillisecondsToSeconds } from '@/lib/utils/DateTimeUtils'
import FlashSaleHeader from '@/components/product/FlashSale/FlashSaleHeader/FlashSaleHeader'

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

  const renderFlashSaleHeader = () => {
    if (!periodActive) {
      return <></>
    }
    const [initialHoursStart, initialMinutesStart, initialSecondsStart] = periodActive.time_start.split(':').map(Number);
    const [initialHoursEnd, initialMinutesEnd, initialSecondEnd] = periodActive.time_end.split(':').map(Number);
    const startTime = new Date();
    const endTime = new Date();
    let dateTimeNow = new Date();
    startTime.setHours(initialHoursStart, initialMinutesStart, initialSecondsStart);
    endTime.setHours(initialHoursEnd, initialMinutesEnd, initialSecondEnd);
    const timeDifferenceToEnd = endTime.getTime() - dateTimeNow.getTime();
    const timeDifferenceToStart = startTime.getTime() - dateTimeNow.getTime();
    switch (true) {
      case timeDifferenceToStart > 0:
        return (
          <FlashSaleHeader
            flashSaleLabel='Sẽ bắt đầu trong'
            initialHours={convertMillisecondsToHours(timeDifferenceToStart)}
            initialMinutes={convertMillisecondsToMinutes(timeDifferenceToStart)}
            initialSeconds={convertMillisecondsToSeconds(timeDifferenceToStart)}
          />
        )
      case timeDifferenceToEnd > 0:
        return (
          <FlashSaleHeader
            flashSaleLabel='Kết thúc trong'
            initialHours={convertMillisecondsToHours(timeDifferenceToEnd)}
            initialMinutes={convertMillisecondsToMinutes(timeDifferenceToEnd)}
            initialSeconds={convertMillisecondsToSeconds(timeDifferenceToEnd)}
          />
        )
      default:
        return (
          <FlashSaleHeader
            flashSaleLabel='Khung giờ sự kiện đã kết thúc'
            initialHours={0}
            initialMinutes={0}
            initialSeconds={0}
          />
        )
    }
  }

  useEffect(() => {
    // Gọi lại renderFlashSaleHeader khi periodActive thay đổi
    if (periodActive) {
      renderFlashSaleHeader();
    }
  }, [periodActive]); // Theo dõi sự thay đổi của periodActive

  return (
    <>
      <Breadcrumb />
      <div className="container-xxl">
        {flashSaleTodayData && !isLoading && (
          <>
            <FlashSalePageBanner />
            <div className={styles.flashSalePage}>
              {periodActive && renderFlashSaleHeader()}
              <FlashSalePeriods
                periodActive={periodActive}
                setPeriodActive={setPeriodActive}
                periodList={flashSaleTodayData.hours}
              />

              <div className={styles.flashSalePageContent}>
                <div className={styles.flashSalePagePeriodContent}>
                  {flashSaleTodayData.hours.length > 0 && flashSaleTodayData.hours.map((period) => (
                    <FlashSalePeriodProducts key={period.id} flashSalePeriodId={period.id} periodActive={periodActive} />
                  ))}
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
