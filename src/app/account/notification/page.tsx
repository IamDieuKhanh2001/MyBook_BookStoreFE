'use client'

import React, { useEffect, useState } from 'react'
import styles from './page.module.scss'
import NotificationItem from '@/components/account/Notification/NotificationItem/NotificationItem'
import { useInView } from 'react-intersection-observer'
import useAPINotification from '@/lib/hooks/api/useAPINotification'
import NotificationLoading from '@/layouts/ClientLayout/ClientNavBar/NotificationDropdown/NotificationLoading/NotificationLoading'

const NotificationPage = () => {
    const [filters, setFilters] = useState({
        limit: 10,
    });
    const { ref: loadMoreRef, inView } = useInView(); // Gán ref theo dõi div Spinner
    const { getNotificationList } = useAPINotification()
    const { paginatedData, isLoading, isReachedEnd, setSize } = getNotificationList(filters.limit)

    useEffect(() => {
        if (inView) {
            setSize((previousSize) => previousSize + 1)
        }
    }, [inView]);

    return (
        <div className="card mb-2">
            <div className={styles.pageTitle}>
                <h1>Thông báo</h1>
            </div>
            <div className="card-body">
                <div className={styles.notificationBody}>
                    <ul className={styles.notificationBodyList}>
                        {paginatedData.map((notification) => (
                            <NotificationItem notificationData={notification} key={notification.id} />
                        ))}
                        {
                            !isReachedEnd
                            &&
                            !isLoading
                            &&
                            <NotificationLoading
                                loadMoreRef={loadMoreRef}
                            />
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NotificationPage
