'use client'
import React from 'react'
import styles from './FlashSalePeriods.module.scss'
import FlashSalePeriodItem from './FlashSalePeriodItem/FlashSalePeriodItem'
import { IFlashSalePeriod } from '../../../../../types/IFlashSalePeriod'

interface IFlashSalePeriodsProps {
    periodIdActive: number
    setPeriodIdActive: React.Dispatch<React.SetStateAction<number>>
    periodList: IFlashSalePeriod[]
}
const FlashSalePeriods = (props: IFlashSalePeriodsProps) => {
    const { periodIdActive, setPeriodIdActive, periodList } = props

    return (
        <div className={`${styles.flashSalePeriods} row g-0`}>
            {periodList?.map((period) => (
                <FlashSalePeriodItem
                    key={period.id}
                    timeStart={period.time_start}
                    onSaleStatus='Đang bán'
                    isActive={periodIdActive === period.id}
                />
            ))}
        </div>
    )
}

export default FlashSalePeriods
