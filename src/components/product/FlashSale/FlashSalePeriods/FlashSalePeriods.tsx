'use client'
import React from 'react'
import styles from './FlashSalePeriods.module.scss'
import FlashSalePeriodItem from './FlashSalePeriodItem/FlashSalePeriodItem'
import { IFlashSalePeriod } from '../../../../../types/IFlashSalePeriod'

interface IFlashSalePeriodsProps {
    periodActive: IFlashSalePeriod | undefined
    setPeriodActive: React.Dispatch<React.SetStateAction<IFlashSalePeriod | undefined>>
    periodList: IFlashSalePeriod[]
}
const FlashSalePeriods = (props: IFlashSalePeriodsProps) => {
    const { periodActive, setPeriodActive, periodList } = props

    const isCurrentTimeBetteen = (
        startTime: string,
        endTime: string,
    ) => {
        let dateTimeNow = new Date();
        let startDateTime = new Date()
        let endDateTime = new Date()
        const [hoursStart, minutesStart, secondsStart] = startTime.split(':').map(Number);
        startDateTime.setHours(hoursStart)
        startDateTime.setMinutes(minutesStart);
        startDateTime.setSeconds(secondsStart);
        const [hoursEnd, minutesEnd, secondsEnd] = endTime.split(':').map(Number);
        endDateTime.setHours(hoursEnd)
        endDateTime.setMinutes(minutesEnd);
        endDateTime.setSeconds(secondsEnd);

        if (dateTimeNow.getTime() >= startDateTime.getTime() && dateTimeNow.getTime() <= endDateTime.getTime()) {
            return true
        } else {
            return false
        }
    }

    const handleSetTabActive = (period : IFlashSalePeriod) => {
        setPeriodActive(period)
    }

    return (
        <div className={`${styles.flashSalePeriods} row g-0`}>
            {periodList?.map((period) => (
                <FlashSalePeriodItem
                    key={period.id}
                    timeStart={period.time_start}
                    onSaleStatus={
                        isCurrentTimeBetteen(period.time_start, period.time_end) ? 
                        "Đang bán" : "Chưa bán"
                    }
                    isActive={periodActive?.id === period.id}
                    handleSetTabActive={() => handleSetTabActive(period)}
                />
            ))}
        </div>
    )
}

export default FlashSalePeriods
