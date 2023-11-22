'use client'

import React from 'react'
import styles from './page.module.scss'
import ProductListOrdered from '@/components/account/OrderDetail/ProductListOrdered/ProductListOrdered';
import OrderOverview from '@/components/account/OrderDetail/OrderOverview/OrderOverview';
import useAPIUserOrder from '@/lib/hooks/api/useAPIUserOrder';

interface IOrderedDetailPageProps {
    params: {
        order_id: number;
    };
}
const OrderedDetailPage = (props: IOrderedDetailPageProps) => {
    const { params } = props
    const { getOrderDetail } = useAPIUserOrder()
    const { data, error, isLoading } = getOrderDetail(params.order_id)

    return (
        <>
            <OrderOverview data={data} />
            <ProductListOrdered data={data} />
        </>
    )
}

export default OrderedDetailPage
