import React from 'react'
import styles from './FlashSalePeriods.module.scss'
import FlashSalePeriodItem from './FlashSalePeriodItem/FlashSalePeriodItem'

interface IFlashSalePeriodsProps {
    periodIdActive: number
    setPeriodIdActive: React.Dispatch<React.SetStateAction<number>>
}
const FlashSalePeriods = (props : IFlashSalePeriodsProps) => {
    return (
        <div className={`${styles.flashSalePeriods} row g-0`}>
            <FlashSalePeriodItem
                time='10:00'
                onSaleStatus='Đang bán'
                isActive={true}
            />
            <FlashSalePeriodItem
                time='12:00'
                onSaleStatus='Đang bán'
                isActive={false}
            />
            <FlashSalePeriodItem
                time='14:00'
                onSaleStatus='Đang bán'
                isActive={false}
            />
            <FlashSalePeriodItem
                time='16:00'
                onSaleStatus='Đang bán'
                isActive={false}
            />
            <FlashSalePeriodItem
                time='18:00'
                onSaleStatus='Đang bán'
                isActive={false}
            />
            <FlashSalePeriodItem
                time='20:00'
                onSaleStatus='Đang bán'
                isActive={false}
            />
        </div>
    )
}

export default FlashSalePeriods
