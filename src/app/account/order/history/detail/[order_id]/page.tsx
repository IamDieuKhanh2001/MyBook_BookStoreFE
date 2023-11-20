import React from 'react'
import styles from './page.module.scss'
import ProductListOrdered from '@/components/account/OrderDetail/ProductListOrdered/ProductListOrdered';
import OrderOverview from '@/components/account/OrderDetail/OrderOverview/OrderOverview';

interface IOrderedDetailPageProps {
    params: {
        order_id: number;
    };
}
const OrderedDetailPage = (props: IOrderedDetailPageProps) => {
    const { params } = props

    return (
        <>
            <OrderOverview />
            <ProductListOrdered />
        </>
    )
}

export default OrderedDetailPage
