'use client'
import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from './OrderHistoryHeader.module.scss'
import useAPIUserOrder from '@/lib/hooks/api/useAPIUserOrder';

interface IOrderHistoryHeaderProps {
    activeTab: string
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
}
const OrderHistoryHeader = (props: IOrderHistoryHeaderProps) => {
    const { activeTab, setActiveTab } = props
    const { getMyOrderStatistics } = useAPIUserOrder()
    const { data, isLoading } = getMyOrderStatistics()

    const sliderOptions = {
        perPage: 5,
        perMove: 3,
        pagination: false,
        height: '65px',
        width: '100%',
        breakpoints: {
            600: {
                perPage: 2,
                perMove: 2,
            },
            800: {
                perPage: 3,
                perMove: 2,
            },
            1000: {
                perPage: 4,
                perMove: 2,
            },
        }
    };

    const handleChangeTab = (tabName: string = 'all') => {
        setActiveTab(tabName)
    }

    const tabNameByStatus = (status: string) => {
        switch (status) {
            case 'pending': {
                return 'Chờ xác nhận'
            }
            case 'confirmed': {
                return 'Đã xác nhận'
            }
            case 'delivering': {
                return 'Đang vận chuyển'
            }
            case 'completed': {
                return 'Hoàn thành'
            }
            case 'canceled': {
                return 'Đã hủy'
            }
            default: {
                return 'Unname tab'
            }
        }
    }

    return (
        <div className="card mb-4">
            <div className={styles.pageTitle}>
                <h1>Đơn hàng của tôi</h1>
            </div>
            <div className={styles.orderHistoryContainer}>
                <Splide options={sliderOptions}>
                    <SplideSlide>
                        <div
                            className={`${styles.tabHistoryItem} ${activeTab === 'all' && styles.active}`}
                            onClick={() => handleChangeTab('all')}
                        >
                            <div className={styles.tabHistoryItemNumber}>
                                {data.reduce((accumulator, currentValue) => {
                                    return accumulator + currentValue.total;
                                }, 0)}
                            </div>
                            <div className={styles.tabHistoryItemText}>
                                Tất cả
                            </div>
                            <div className={styles.tabHistoryItemBorderRight}></div>
                        </div>
                    </SplideSlide>
                    {data.map((item, index) => (
                        <SplideSlide key={index}>
                            <div
                                className={`${styles.tabHistoryItem} ${activeTab === item.status && styles.active}`}
                                onClick={() => handleChangeTab(item.status)}
                            >
                                <div className={styles.tabHistoryItemNumber}>
                                    {item.total}
                                </div>
                                <div className={styles.tabHistoryItemText}>
                                    {tabNameByStatus(item.status)}
                                </div>
                                <div className={styles.tabHistoryItemBorderRight}></div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    )
}

export default OrderHistoryHeader
