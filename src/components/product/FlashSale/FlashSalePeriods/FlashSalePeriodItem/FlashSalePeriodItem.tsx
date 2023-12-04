import React from 'react'
import styles from './FlashSalePeriodItem.module.scss'

interface IFlashSalePeriodItemProps {
    timeStart: string
    onSaleStatus: string
    isActive: boolean
}
const FlashSalePeriodItem = (props: IFlashSalePeriodItemProps) => {
    const { isActive, onSaleStatus, timeStart } = props

    return (
        <>
            <div className={`col-md-2 col-6 ${styles.flashSalePeriodItem} ${isActive && styles.flashSalePeriodActive}`}>
                <a className={styles.flashSalePeriodsLabel}>
                    <div className={styles.time}>
                        {timeStart}
                    </div>
                    <div className={styles.status}>
                        {onSaleStatus}
                    </div>
                </a>
            </div>
        </>
    )
}

export default FlashSalePeriodItem
