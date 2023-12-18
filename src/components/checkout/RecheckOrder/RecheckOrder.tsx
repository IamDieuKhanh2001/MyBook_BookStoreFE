'use client'

import React from 'react'
import styles from './RecheckOrder.module.scss'
import SectionTitle from '@/components/shared/sectionTitle/SectionTitle'
import OrderItem from './OrderItem/OrderItem'
import { ICartItem } from '../../../../types/ICartItem'

interface IRecheckOrderProps {
    productOrderList: ICartItem[] | undefined;
}
const RecheckOrder = (props: IRecheckOrderProps) => {
    const { productOrderList } = props

    return (
        <>
            <div className='row'>
                <div className="col-12">
                    <SectionTitle title='Kiểm tra lại đơn hàng' />
                    <div className="section-container p-4">
                        <div className={styles.checkoutProductContent}>
                            {productOrderList?.map((productOrderItem) => (
                                <OrderItem key={productOrderItem.isbn_code} data={productOrderItem} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecheckOrder
