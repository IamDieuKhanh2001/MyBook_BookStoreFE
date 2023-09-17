'use client'
import React from 'react'
import styles from './FlashSaleCountDown.module.scss'
import useCountdown from '@/lib/hooks/useCountDown';

interface FlashSaleCountDownProps {
    initialHours?: number
    initialMinutes?: number
    numProductTotal?: number
    numProductSold?: number
}

const FlashSaleCountDown = (props: FlashSaleCountDownProps) => {
    const {initialHours  = 0, initialMinutes = 0, numProductTotal = 0, numProductSold = 0} = props
    const { hours, minutes, seconds } = useCountdown(initialHours, initialMinutes);
    const percentageSold = (numProductSold / numProductTotal) * 100;

    return (
        <>
            <div className={styles.flashSaleProductInfo}>
                <div className={styles.flashSaleProduct}>
                    <div className={styles.flashSaleProductBanner}>
                        <img
                            src="/img/flashSale/label-flashsale.svg"
                            alt="fashSaleBanner"
                        />
                        <div className={styles.flashSaleCountdown}>
                            <span className={styles.flashSaleCountdownNumber}>
                                {hours < 10 ? `0${hours}` : hours}
                            </span>
                            <span className={styles.flashSaleCountdownSeparateNumber}>:</span>
                            <span className={styles.flashSaleCountdownNumber}>
                                {minutes < 10 ? `0${minutes}` : minutes}
                            </span>
                            <span className={styles.flashSaleCountdownSeparateNumber}>:</span>
                            <span className={styles.flashSaleCountdownNumber}>
                                {seconds < 10 ? `0${seconds}` : seconds}
                            </span>
                        </div>
                    </div>
                    <div className={styles.flashSaleProductLast}>
                        <div className={styles.flashSaleProgress}>
                            <div style={{ width: `${percentageSold}%` }} className={styles.flashSaleProgressBar}></div>
                            <div className={styles.flashSaleProgressValue}>
                                Đã bán:
                                <span className={styles.flashSaleSoldNumber}>{numProductSold}/{numProductTotal}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlashSaleCountDown
