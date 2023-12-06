'use client'
import React from 'react'
import styles from './FlashSaleHeader.module.scss'
import Link from 'next/link'
import useCountdown from '@/lib/hooks/utils/useCountDown'
import { convertMillisecondsToHours, convertMillisecondsToMinutes, convertMillisecondsToSeconds } from '@/lib/utils/DateTimeUtils'
import { IFlashSalePeriod } from '../../../../../types/IFlashSalePeriod'

interface FlashSaleHeaderProps {
    periodActive: IFlashSalePeriod
}
const FlashSaleHeader = (props: FlashSaleHeaderProps) => {
    const [isStarted, setIsStarted] = React.useState<boolean>()
    const {
        periodActive,
    } = props
    const [initialHoursStart, initialMinutesStart, initialSecondsStart] = periodActive.time_start.split(':').map(Number);
    const [initialHoursEnd, initialMinutesEnd, initialSecondEnd] = periodActive.time_end.split(':').map(Number);

    const startTime = new Date();
    const endTime = new Date();
    let dateTimeNow = new Date();
    startTime.setHours(initialHoursStart, initialMinutesStart, initialSecondsStart);
    endTime.setHours(initialHoursEnd, initialMinutesEnd, initialSecondEnd);
    const timeDifferenceToEnd = endTime.getTime() - dateTimeNow.getTime();
    const timeDifferenceToStart = startTime.getTime() - dateTimeNow.getTime();
    console.log("timeDifferenceToStart " + timeDifferenceToStart)
    console.log("timeDifferenceToEnd " + timeDifferenceToEnd)

    const { hours: hoursStart, minutes: minutesStart, seconds: secondsStart } = useCountdown(
        convertMillisecondsToHours(timeDifferenceToStart),
        convertMillisecondsToMinutes(timeDifferenceToStart),
        convertMillisecondsToSeconds(timeDifferenceToStart)
    );
    const { hours: hoursEnd, minutes: minutesEnd, seconds: secondsEnd } = useCountdown(
        convertMillisecondsToHours(timeDifferenceToEnd),
        convertMillisecondsToMinutes(timeDifferenceToEnd),
        convertMillisecondsToSeconds(timeDifferenceToEnd)
    );

    React.useEffect(() => {
        if (dateTimeNow.getTime() > endTime.getTime()) {
            setIsStarted(undefined)
            return
        }
        if (dateTimeNow.getTime() >= startTime.getTime() && dateTimeNow.getTime() <= endTime.getTime()) {
            console.log('In sale')
            setIsStarted(true)
        } else {
            console.log('not sale')
            setIsStarted(false)
        }
        console.log(isStarted)
    }, [periodActive])

    // React.useEffect(() => {
    //     console.log(isStarted)
    // }, [isStarted])

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
                {isStarted !== undefined && (
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
