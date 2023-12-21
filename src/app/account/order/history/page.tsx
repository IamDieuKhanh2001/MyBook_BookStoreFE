'use client'
import React, { useState } from 'react'
import styles from './page.module.scss'
import OrderedList from '@/components/account/OrderHistory/OrderedList/OrderedList';
import OrderHistoryHeader from '@/components/account/OrderHistory/OrderHistoryHeader/OrderHistoryHeader';
import useAPIUserOrder from '@/lib/hooks/api/useAPIUserOrder';
import OrderStatus from '@/enum/OrderStatus';

const OrderPage = () => {
    const [activeTab, setActiveTab] = useState('all') //all,pending,confirmed,delivering,completed,canceled
    const { getAllOrderPaginated, getOrderByStatus } = useAPIUserOrder()
    const { paginatedData: allOrder, setSize: setSizeAll, isReachedEnd: isAllReachedEnd } = getAllOrderPaginated()
    const { paginatedData: pendingOrder, setSize: setSizePending, isReachedEnd: isPendingReachedEnd } = getOrderByStatus(OrderStatus.PENDING)
    const { paginatedData: confirmedOrder, setSize: setSizeConfirmed, isReachedEnd: isConfimedReachedEnd } = getOrderByStatus(OrderStatus.CONFIRMED)
    const { paginatedData: deliveringOrder, setSize: setSizeDelivering, isReachedEnd: isDeliveringReachedEnd } = getOrderByStatus(OrderStatus.DELIVERING)
    const { paginatedData: completedOrder, setSize: setSizeCompleted, isReachedEnd: isCompletedReachedEnd } = getOrderByStatus(OrderStatus.COMPLETED)
    const { paginatedData: cancelOrder, setSize: setSizeCancel, isReachedEnd: isCancelReachedEnd } = getOrderByStatus(OrderStatus.CANCELED)

    return (
        <>
            <OrderHistoryHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            <OrderedList
                dataList={allOrder}
                display={activeTab === 'all'}
                isReachedEnd={isAllReachedEnd}
                setSize={setSizeAll}
            />
            <OrderedList
                dataList={pendingOrder}
                display={activeTab === OrderStatus.PENDING}
                isReachedEnd={isPendingReachedEnd}
                setSize={setSizePending}
            />
            <OrderedList
                dataList={confirmedOrder}
                display={activeTab === OrderStatus.CONFIRMED}
                isReachedEnd={isConfimedReachedEnd}
                setSize={setSizeConfirmed}
            />
            <OrderedList
                dataList={deliveringOrder}
                display={activeTab === OrderStatus.DELIVERING}
                isReachedEnd={isDeliveringReachedEnd}
                setSize={setSizeDelivering}
            />
            <OrderedList
                dataList={completedOrder}
                display={activeTab === OrderStatus.COMPLETED}
                isReachedEnd={isCompletedReachedEnd}
                setSize={setSizeCompleted}
            />
            <OrderedList
                dataList={cancelOrder}
                display={activeTab === OrderStatus.CANCELED}
                isReachedEnd={isCancelReachedEnd}
                setSize={setSizeCancel}
            />
        </>
    )
}

export default OrderPage
