'use client'
import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from './OrderHistoryHeader.module.scss'

const OrderHistoryHeader = () => {
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

    return (
        <div className="card mb-4">
            <div className={styles.pageTitle}>
                <h1>Đơn hàng của tôi</h1>
            </div>
            <div className={styles.orderHistoryContainer}>
                <Splide options={sliderOptions}>
                    <SplideSlide>
                        <div className={styles.tabHistoryItem}>
                            <div className={styles.tabHistoryItemNumber}>
                                2
                            </div>
                            <div className={styles.tabHistoryItemText}>
                                Tất cả
                            </div>
                            <div className={styles.tabHistoryItemBorderRight}></div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={styles.tabHistoryItem}>
                            <div className={styles.tabHistoryItemNumber}>
                                2
                            </div>
                            <div className={styles.tabHistoryItemText}>
                                Tất cả
                            </div>
                            <div className={styles.tabHistoryItemBorderRight}></div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={styles.tabHistoryItem}>
                            <div className={styles.tabHistoryItemNumber}>
                                2
                            </div>
                            <div className={styles.tabHistoryItemText}>
                                Tất cả
                            </div>
                            <div className={styles.tabHistoryItemBorderRight}></div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={styles.tabHistoryItem}>
                            <div className={styles.tabHistoryItemNumber}>
                                2
                            </div>
                            <div className={styles.tabHistoryItemText}>
                                Tất cả
                            </div>
                            <div className={styles.tabHistoryItemBorderRight}></div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={styles.tabHistoryItem}>
                            <div className={styles.tabHistoryItemNumber}>
                                2
                            </div>
                            <div className={styles.tabHistoryItemText}>
                                Tất cả
                            </div>
                            <div className={styles.tabHistoryItemBorderRight}></div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    )
}

export default OrderHistoryHeader
