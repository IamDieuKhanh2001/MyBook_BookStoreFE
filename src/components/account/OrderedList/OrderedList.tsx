'use client'
import React from 'react'
import styles from './OrderedList.module.scss'
import OrderItem from '@/components/checkout/RecheckOrder/OrderItem/OrderItem'
import OrderedItem from './OrderedItem/OrderedItem'

const OrderedList = () => {
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
                    <OrderedItem />
                    <OrderedItem />
                    <OrderedItem />
                    <OrderedItem />
                </div>
            </div>
        </>
    )
}

export default OrderedList
