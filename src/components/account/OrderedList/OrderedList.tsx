'use client'
import React from 'react'
import styles from './OrderedList.module.scss'
import OrderedItem from './OrderedItem/OrderedItem'
import useAPIUserOrder from '@/lib/hooks/api/useAPIUserOrder'

const OrderedList = () => {
    const { getOrderList } = useAPIUserOrder()
    const { data, error, isLoading } = getOrderList()

    return (
        <>
            <div className="card mb-4">
                <div className={styles.headerListOrder}>
                    <div className={styles.headerIdOrder}>
                        Mã đơn
                    </div>
                    <div className={styles.headerPaymentMethod}>
                        Hình thức
                    </div>
                    <div className={styles.headerStatus}>
                        Trạng thái
                    </div>
                    <div className={styles.headerOrderTotalPrice}>
                        Tổng
                    </div>
                    <div className={styles.headerDetailRedirect}>

                    </div>
                </div>
                <div className={styles.listContent}>
                    {data.length > 0 ? (
                        data.map((item) => (
                            <OrderedItem key={item.id} data={item} />
                        ))
                    ) : (
                        <>Trống</>
                    )}
                </div>
            </div>
        </>
    )
}

export default OrderedList
