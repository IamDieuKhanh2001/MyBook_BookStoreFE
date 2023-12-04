'use client'
import React from 'react'
import styles from './FlashSaleHeader.module.scss'
import Link from 'next/link'
import useCountdown from '@/lib/hooks/utils/useCountDown'

interface FlashSaleHeaderProps {
    initialHoursStart?: number
    initialMinutesStart?: number
    initialSecondsStart?: number
    initialHoursEnd?: number
    initialMinutesEnd?: number
    initialSecondEnd?: number
}
const FlashSaleHeader = (props: FlashSaleHeaderProps) => {
    const [isStarted, setIsStart] = React.useState<boolean>()
    let dateTimeNow = new Date();
    const {
        initialHoursStart = 0,
        initialMinutesStart = 0,
        initialSecondsStart = 0,
        initialHoursEnd = 0,
        initialMinutesEnd = 0,
        initialSecondEnd = 0,
    } = props
    const { hours: hoursStart, minutes: minutesStart, seconds: secondsStart } = useCountdown(
        Math.abs(initialHoursStart - dateTimeNow.getHours()),
        Math.abs(initialMinutesStart - dateTimeNow.getMinutes()),
        Math.abs(initialSecondsStart - dateTimeNow.getSeconds())
    );
    const { hours: hoursEnd, minutes: minutesEnd, seconds: secondsEnd } = useCountdown(
        Math.abs(initialHoursEnd - dateTimeNow.getHours()),
        Math.abs(initialMinutesEnd - dateTimeNow.getMinutes()),
        Math.abs(initialSecondEnd - dateTimeNow.getSeconds())
    );

    const isWithinTimeRange = (start: string, end: string): boolean => {
        const now = new Date();
        const startTime = new Date();
        const endTime = new Date();
      
        // Parse giờ và phút từ chuỗi start và end
        const [startHour, startMinute] = start.split(':').map(Number);
        const [endHour, endMinute] = end.split(':').map(Number);
      
        startTime.setHours(startHour, startMinute, 0); // Thiết lập thời gian bắt đầu
        endTime.setHours(endHour, endMinute, 59); // Thiết lập thời gian kết thúc (lấy phút cuối cùng)
      
        return now >= startTime && now <= endTime;
      }

    React.useEffect(() => {
        console.log(props)
        let currentHours = dateTimeNow.getHours()
        let currentMinutes = dateTimeNow.getMinutes()
        console.log(currentHours)
        console.log(currentMinutes)
        const startTime = new Date();
        startTime.setHours(initialHoursStart, initialMinutesStart, initialSecondsStart);
        const endTime = new Date();
        endTime.setHours(initialHoursEnd, initialMinutesEnd, initialSecondEnd);


    }, [])

    React.useEffect(() => {
        console.log(isStarted)
    }, [isStarted])

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
                {isStarted && (
                    <>
                        <span className={styles.flashSalePageCountDownLabel}>
                            {isStarted === true ? "Kết thúc trong" : "Bắt đầu lúc"}
                        </span>
                        {isStarted === true ? (
                            <div className={styles.flashSalePageCountDown}>
                                <div className={styles.flashSaleCountdown}>
                                    <span className={styles.flashSaleCountdownNumber}>
                                        {hoursEnd < 10 ? `0${hoursEnd}` : hoursEnd}
                                    </span>
                                    <span>:</span>
                                    <span className={styles.flashSaleCountdownNumber}>
                                        {minutesEnd < 10 ? `0${minutesEnd}` : minutesEnd}
                                    </span>
                                    <span>:</span>
                                    <span className={styles.flashSaleCountdownNumber}>
                                        {secondsEnd < 10 ? `0${secondsEnd}` : secondsEnd}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className={styles.flashSalePageCountDown}>
                                <div className={styles.flashSaleCountdown}>
                                    <span className={styles.flashSaleCountdownNumber}>
                                        {hoursStart < 10 ? `0${hoursStart}` : hoursStart}
                                    </span>
                                    <span>:</span>
                                    <span className={styles.flashSaleCountdownNumber}>
                                        {minutesStart < 10 ? `0${minutesStart}` : minutesStart}
                                    </span>
                                    <span>:</span>
                                    <span className={styles.flashSaleCountdownNumber}>
                                        {secondsStart < 10 ? `0${secondsStart}` : secondsStart}
                                    </span>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    )
}

export default FlashSaleHeader
