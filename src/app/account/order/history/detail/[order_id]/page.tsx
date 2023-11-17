import ProductListOrdered from '@/components/account/ProductListOrdered/ProductListOrdered';
import Link from 'next/link';
import React from 'react'

interface IOrderedDetailPageProps {
    params: {
        order_id: number;
    };
}
const OrderedDetailPage = (props: IOrderedDetailPageProps) => {
    const { params } = props

    return (
        <>
            <Link href={'/account/order/history'} type="button" className="btn btn-primary mb-2">
                <i className="fas fa-arrow-left"></i>
                Trở về
            </Link>
            <ProductListOrdered />
        </>
    )
}

export default OrderedDetailPage
