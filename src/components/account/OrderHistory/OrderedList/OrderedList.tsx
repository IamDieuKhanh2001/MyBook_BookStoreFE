'use client'
import React, { useEffect } from 'react'
import styles from './OrderedList.module.scss'
import OrderedItem from './OrderedItem/OrderedItem'
import { useInView } from 'react-intersection-observer'
import LoadingList from './LoadingList/LoadingList'

interface IOrderedListProps {
    dataList: IMyOrder[]
    display?: boolean
    isReachedEnd: boolean | undefined
    setSize: (size: number | ((_size: number) => number)) => Promise<any[] | undefined>
}
const OrderedList = (props: IOrderedListProps) => {    
    const { dataList = [], display = false, isReachedEnd, setSize } = props
    const { ref, inView } = useInView(); // Gán ref theo dõi div Spinner

    useEffect(() => {
        if (inView) {
          setSize((previousSize) => previousSize + 1)
        }
      }, [inView]);

    return (
        <>
            <div className="card mb-4" style={{ display: `${display ? 'block' : 'none'}` }}>
                <div className={styles.headerListOrder}>
                    <div className={styles.headerIdOrder}>
                        Mã đơn
                    </div>
                    <div className={styles.headerPaymentMethod}>
                        Hình thức
                    </div>
                    <div className={styles.headerStatus}>
                        Trạng thái đơn
                    </div>
                    <div className={styles.headerStatus}>
                        Thanh toán
                    </div>
                    <div className={styles.headerOrderTotalPrice}>
                        Tổng
                    </div>
                    <div className={styles.headerDetailRedirect}>

                    </div>
                </div>
                <div className={styles.listContent}>
                    {dataList.length > 0 && (
                        dataList.map((item) => (
                            <OrderedItem key={item.id} data={item} />
                        ))
                    )}
                    {isReachedEnd === false && <LoadingList loadingRef={ref} />}
                </div>
            </div>
        </>
    )
}

export default OrderedList
