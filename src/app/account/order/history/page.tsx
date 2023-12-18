'use client'
import React from 'react'
import styles from './page.module.scss'
import OrderedList from '@/components/account/OrderHistory/OrderedList/OrderedList';
import OrderHistoryHeader from '@/components/account/OrderHistory/OrderHistoryHeader/OrderHistoryHeader';

const OrderPage = () => {

    return (
        <>
            <OrderHistoryHeader />
            <OrderedList />
        </>
    )
}

export default OrderPage
