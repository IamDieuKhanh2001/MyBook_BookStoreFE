'use client'
import React from 'react'
import styles from './FlashSaleHeader.module.scss'
import Link from 'next/link'
import useCountdown from '@/lib/hooks/utils/useCountDown'

interface FlashSaleHeaderProps {
    initialHours?: number
    initialMinutes?: number
}
const FlashSaleHeader = (props: FlashSaleHeaderProps) => {
    const { initialHours = 0, initialMinutes = 0 } = props
    const { hours, minutes, seconds } = useCountdown(initialHours, initialMinutes);

    return (
        <>
            <div className={styles.flashSaleHeader}>
                <Link href="#">
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
                <span className={styles.flashSalePageCountDownLabel}>Kết Thúc Trong</span>
                <div className={styles.flashSalePageCountDown}>
                    <div className={styles.flashSaleCountdown}>
                        <span className={styles.flashSaleCountdownNumber}>
                            {hours < 10 ? `0${hours}` : hours}
                        </span>
                        <span>:</span>
                        <span className={styles.flashSaleCountdownNumber}>
                            {minutes < 10 ? `0${minutes}` : minutes}
                        </span>
                        <span>:</span>
                        <span className={styles.flashSaleCountdownNumber}>
                            {seconds < 10 ? `0${seconds}` : seconds}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlashSaleHeader
