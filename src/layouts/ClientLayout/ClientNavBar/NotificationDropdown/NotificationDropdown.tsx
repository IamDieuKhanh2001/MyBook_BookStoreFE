'use client'

import React, { useState } from 'react'
import styles from './NotificationDropdown.module.scss'
import NotificationItem from './NotificationItem/NotificationItem'
import useAPINotification from '@/lib/hooks/api/useAPINotification'
import CartEmptyAlert from '@/components/cart/CartProductList/CartEmptyAlert/CartEmptyAlert'
import NotificationLoading from './NotificationLoading/NotificationLoading'

const NotificationDropdown = () => {
    const [filters, setFilters] = useState({
        limit: 4,
        // page: 2,
    });
    const { getNotificationList } = useAPINotification()
    const { paginatedData, isLoading, isReachedEnd, setSize } = getNotificationList(filters.limit)

    const handleLoadMoreNoti = () => {
        // setFilters(prevFilters => ({
        //     ...prevFilters,
        //     page: prevFilters.page + 1,
        // }));
        setSize((previousSize) => previousSize + 1)
    }

    console.log(paginatedData)
    return (
        <div className={`${styles.navItem} dropdown`}>
            <div
                className={`${styles.dropdownToggle} nav-link dropdown-toggle btn-sm-square ms-3`}
                // onClick={handleCartClick}
                role="button"
            >
                <small className="fa fa-bell fa-lg text-body position-relative">
                    {/* <span className={`${styles.badgeQty} position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger`}>
                        1
                    </span> */}
                </small>
            </div>
            <div className={`${styles.dropdownMenu} dropdown-menu dropdown-menu-start m-0`}>
                <div className={styles.notiHeader}>
                    <i className="fa fa-shopping-bag me-2"></i>
                    <span className={styles.notiListTitle}>Thông báo</span>
                    <span className={`${styles.notiListTitle} ms-2`}>({paginatedData.length})</span>
                </div>
                {/* content  */}
                <div
                    className={styles.notificationList}
                >
                    {paginatedData.map((notification) => (
                        <NotificationItem notificationData={notification} key={notification.id} />
                    ))}
                    {
                        isLoading
                        &&
                        <NotificationLoading />
                    }
                </div>
                {
                    paginatedData.length === 0
                    &&
                    <CartEmptyAlert />
                }
                {
                    !isReachedEnd
                    &&
                    !isLoading
                    &&
                    <div className={styles.loadMore} onClick={handleLoadMoreNoti}>
                        Tải thêm thông báo cũ hơn
                    </div>
                }
            </div>
        </div>

    )
}

export default NotificationDropdown
