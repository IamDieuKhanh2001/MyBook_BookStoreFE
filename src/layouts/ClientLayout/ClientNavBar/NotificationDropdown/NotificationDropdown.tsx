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
    const { getNotificationList, getNotiStatistics, checkReadAll } = useAPINotification()
    const { paginatedData, isLoading, isReachedEnd, setSize } = getNotificationList(filters.limit)
    const { data: notificationStatistics } = getNotiStatistics()

    const handleLoadMoreNoti = () => {
        // setFilters(prevFilters => ({
        //     ...prevFilters,
        //     page: prevFilters.page + 1,
        // }));
        setSize((previousSize) => previousSize + 1)
    }

    const handleClickReadAll = async () => {
        try {
            await checkReadAll()
        } catch(e) {

        }
    }

    return (
        <div className={`${styles.navItem} dropdown`}>
            <div
                className={`${styles.dropdownToggle} nav-link dropdown-toggle btn-sm-square ms-3`}
                // onClick={handleCartClick}
                role="button"
            >
                <small className="fa fa-bell fa-lg text-body position-relative">
                    {
                        notificationStatistics?.countUnread > 0
                        &&
                        <span className={`${styles.badgeQty} position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger`}>
                            {notificationStatistics?.countUnread || 0}
                        </span>
                    }
                </small>
            </div>
            <div className={`${styles.dropdownMenu} dropdown-menu dropdown-menu-start m-0`}>
                <div className={styles.notiHeader}>
                    <div className={styles.centerLeft}>
                        <i className="fa fa-shopping-bag me-2"></i>
                        <span className={styles.notiListTitle}>Thông báo</span>
                        <span className={`${styles.notiListTitle} ms-2`}>({notificationStatistics?.countTotal || 0})</span>
                    </div>
                    <a className={styles.btnSeeAll}>
                        Xem tất cả
                    </a>
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
                <div className={styles.notiListFooter}>
                    <div
                        style={
                            !isReachedEnd
                                &&
                                !isLoading
                                ?
                                { visibility: 'visible' }
                                :
                                { visibility: 'hidden' }
                        }
                        className={styles.loadMore}
                        onClick={handleLoadMoreNoti}
                    >
                        Tải thêm
                    </div>
                    <div className={styles.markReadAll} onClick={handleClickReadAll}>Đã xem hết</div>
                </div>

            </div>
        </div>

    )
}

export default NotificationDropdown
