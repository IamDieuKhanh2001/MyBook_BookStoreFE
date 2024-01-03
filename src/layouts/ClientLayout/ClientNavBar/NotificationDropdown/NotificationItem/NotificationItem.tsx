'use client'

import Link from 'next/link'
import React from 'react'
import styles from './NotificationItem.module.scss'
import useAPINotification from '@/lib/hooks/api/useAPINotification'

interface INotificationItemProps {
    notificationData: INotification
}
const NotificationItem = (props: INotificationItemProps) => {
    const { notificationData } = props
    const { id, is_read, message, created_at, title } = notificationData
    const { checkReadedById } = useAPINotification()


    const handleCheckReadedById = async (notiId: number) => {
        try {
            await checkReadedById(notiId)
        } catch (e) {

        }
    }
    return (
        <Link
            className={styles.notificationItem}
            style={is_read === 0 ? { backgroundColor: "#F7F9FA" } : {}}
            href=""
            onClick={is_read === 0 ? () => handleCheckReadedById(id) : undefined} //Allow set status while unread
        >
            <div className={styles.notificationItemContainer}>
                <div className={styles.contentLeft} style={{ marginRight: 12 }}>
                    <div className={styles.iconNoti} />
                </div>
                <div
                    className={styles.contentRight}
                >
                    <div
                        className={styles.notiTitle}
                        style={{ fontWeight: "bold" }}
                    >
                        {title}
                    </div>
                    <div className={styles.notiContent}>
                        {message}
                    </div>
                    <div className={styles.notiCreateAt}>
                        {created_at}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default NotificationItem
