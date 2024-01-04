'use client'

import React, { useEffect, useState } from 'react'
import styles from './NotificationDropdown.module.scss'
import NotificationItem from './NotificationItem/NotificationItem'
import useAPINotification from '@/lib/hooks/api/useAPINotification'
import NotificationLoading from './NotificationLoading/NotificationLoading'
import NotificationEmptyAlert from './NotificationEmptyAlert/NotificationEmptyAlert'
import { useInView } from 'react-intersection-observer'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const NotificationDropdown = () => {
    const [filters, setFilters] = useState({
        limit: 4,
    });
    const { ref: loadMoreRef, inView } = useInView(); // Gán ref theo dõi div Spinner
    const { getNotificationList, getNotiStatistics, checkReadAll } = useAPINotification()
    const { paginatedData, isLoading, isReachedEnd, setSize } = getNotificationList(filters.limit)
    const { data: notificationStatistics } = getNotiStatistics()
    const router = useRouter()

    useEffect(() => {
        if (inView) {
            setSize((previousSize) => previousSize + 1)
        }
    }, [inView]);

    const handleClickReadAll = async () => {
        try {
            await checkReadAll()
        } catch (e) {

        }
    }

    const handleNotiClick = () => {
        // Xử lý việc chuyển đến trang "/cart" khi nhấn icon cart trên nav
        router.push('/account/notification');
    }



    return (
        <div className={`${styles.navItem} dropdown`}>
            <div
                className={`${styles.dropdownToggle} nav-link dropdown-toggle btn-sm-square ms-3`}
                onClick={handleNotiClick}
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
                    <Link
                        className={styles.btnSeeAll}
                        href={'/account/notification'}
                    >
                        Xem tất cả
                    </Link>
                </div>
                {/* content  */}
                <div
                    className={styles.notificationList}
                >
                    {paginatedData.map((notification) => (
                        <NotificationItem notificationData={notification} key={notification.id} />
                    ))}
                    {
                        !isReachedEnd
                        &&
                        <NotificationLoading
                            loadMoreRef={loadMoreRef}
                        />
                    }
                </div>
                {
                    paginatedData.length === 0
                    &&
                    <NotificationEmptyAlert />
                }
                <div className={styles.notiListFooter}>
                    <div
                        className={styles.markReadAll}
                        onClick={handleClickReadAll}>
                        Đánh dấu đã đọc
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NotificationDropdown
