'use client'
import React from 'react'
import styles from './FlashSale.module.scss'
import FlashSaleHeader from './FlashSaleHeader/FlashSaleHeader'
import Link from 'next/link'
import FlashSaleSlider from './FlashSaleSlider/FlashSaleSlider'
import useAPIGuest from '@/lib/hooks/api/useAPIGuest'
import { convertMillisecondsToHours, convertMillisecondsToMinutes, convertMillisecondsToSeconds } from '@/lib/utils/DateTimeUtils'
import isEmpty from 'lodash.isempty';

const FlashSale = () => {
    const { getFlashSaleNow } = useAPIGuest()
    const { data: flashSalePeriodCurrent, error, isLoading } = getFlashSaleNow()

    const renderFlashSaleHeader = () => {
        if (!flashSalePeriodCurrent.time_end || isLoading) {
            return <></>
        }
        const [initialHoursEnd, initialMinutesEnd, initialSecondEnd] = flashSalePeriodCurrent.time_end?.split(':').map(Number);
        const endTime = new Date();
        let dateTimeNow = new Date();
        endTime.setHours(initialHoursEnd, initialMinutesEnd, initialSecondEnd);
        const timeDifferenceToEnd = endTime.getTime() - dateTimeNow.getTime();
        switch (true) {
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
    if (isEmpty(flashSalePeriodCurrent)) {
        return (
            <></>
        )
    }

    return (
        <>
            <div className="container-xxl pt-5">
                {flashSalePeriodCurrent && !isLoading && renderFlashSaleHeader()}
                <div className='row pb-4'>
                    <FlashSaleSlider productList={flashSalePeriodCurrent.products} />
                </div>
                <div className="col-12 text-center">
                    {/* Go to flash sale list page  */}
                    <Link className="btn btn-primary rounded-pill py-3 px-5" href="/product/flashsale">
                        Xem thêm
                    </Link>
                </div>
            </div>
        </>
    )
}

export default FlashSale
