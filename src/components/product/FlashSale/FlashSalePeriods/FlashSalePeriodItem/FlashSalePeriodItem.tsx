import React from 'react'
import styles from './FlashSalePeriodItem.module.scss'

interface IFlashSalePeriodItemProps {
    time: string
    onSaleStatus: string
    isActive: boolean
}
const FlashSalePeriodItem = (props: IFlashSalePeriodItemProps) => {
    const { isActive, onSaleStatus, time } = props

    return (
        <>
            <div className={`col-md-2 col-6 ${styles.flashSalePeriodItem} ${isActive && styles.flashSalePeriodActive}`}>
                <a className={styles.flashSalePeriodsLabel}>
                    <div className={styles.time}>
                        {time}
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