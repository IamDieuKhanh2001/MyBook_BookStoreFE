'use client'
import React, { useEffect } from 'react'
import styles from './VoucherList.module.scss'
import VoucherItem from '../VoucherItem/VoucherItem'
import { useInView } from 'react-intersection-observer'
import VoucherEmpty from '../VoucherEmpty/VoucherEmpty'
import VoucherSpinnerLoading from '../VoucherSpinnerLoading/VoucherSpinnerLoading'

interface IVoucherListProps {
    data: IVoucher[]
    isReachedEnd: boolean | undefined
    setSize: (size: number | ((_size: number) => number)) => Promise<any[] | undefined>
}
const VoucherList = (props: IVoucherListProps) => {
    const { ref: loadMoreRef, inView } = useInView(); // Gán ref theo dõi div Spinner
    const { data, isReachedEnd, setSize } = props

    useEffect(() => {
        if (inView) {
            setSize((previousSize) => previousSize + 1)
        }
    }, [inView]);

    return (
        <>
            <div className={styles.voucherList}>
                {data && data.length > 0 ? (
                    data.map((voucherItem) => (
                        <VoucherItem
                            key={voucherItem.id}
                            data={voucherItem}
                        />
                    ))
                ) : (
                    <VoucherEmpty />
                )}
                {!isReachedEnd && <VoucherSpinnerLoading loadMoreRef={loadMoreRef} />}
            </div>
        </>
    )
}

export default VoucherList
