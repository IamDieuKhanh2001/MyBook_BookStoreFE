'use client'
import React, { useEffect, useState } from 'react'
import styles from './FlashSaleHeader.module.scss'
import Link from 'next/link'
import useCountdown from '@/lib/hooks/utils/useCountDown'

interface FlashSaleHeaderProps {
    initialHours: number
    initialMinutes: number
    initialSeconds: number
    flashSaleLabel: string
}
const FlashSaleHeader = (props: FlashSaleHeaderProps) => {
    const {
        initialHours,
        initialMinutes,
        initialSeconds,
        flashSaleLabel,
    } = props

    const { hours: hoursLeft, minutes: minutesLeft, seconds: secondsLeft } = useCountdown(
        initialHours,
        initialMinutes,
        initialSeconds
    );

    return (
        <>
            <div className={styles.flashSaleHeader}>
                <Link href="/product/flashsale">
                    <img
                        style={{
                            width: '25px',
                            height: '25px',
                            marginLeft: '10px',
                        }}
                        src="/img/flashSale/ico_flashsale.png"
                        alt="FSIcon"
                    />
                    <span className={styles.flashSaleHeaderTitle}>FLASH SALE</span>
                </Link>
                <span>
                    <div className={styles.split}></div>
                </span>
                <span className={styles.flashSalePageCountDownLabel}>
                    {flashSaleLabel}
                </span>
                <div className={styles.flashSalePageCountDown}>
                    <div className={styles.flashSaleCountdown}>
                        <span className={styles.flashSaleCountdownNumber}>
                            {hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft}
                        </span>
                        <span>:</span>
                        <span className={styles.flashSaleCountdownNumber}>
                            {minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft}
                        </span>
                        <span>:</span>
                        <span className={styles.flashSaleCountdownNumber}>
                            {secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlashSaleHeader
