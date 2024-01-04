import React from 'react'
import styles from './NotificationItem.module.scss'
import { KeyedMutator } from 'swr'

interface INotificationItemProps {
    notificationData: INotification
    handleCheckReaded: (notiId: number) => Promise<void>
}
const NotificationItem = (props: INotificationItemProps) => {
    const { notificationData, handleCheckReaded } = props
    const { id, is_read, message, created_at, title } = notificationData

    return (
        <li
            className={styles.notificationItem}
            style={is_read === 0 ? { backgroundColor: "#F9FFD6" } : {}}
            onClick={is_read === 0 ? () => handleCheckReaded(id) : undefined} //Allow set status while unread
        >
            <div className={styles.notificationItemHeader}>
                <div className={styles.notificationItemTitle}>
                    {title}
                </div>
                <div className={styles.notificationItemDate}>
                    {created_at}
                </div>
                <br style={{ clear: "both" }} />
            </div>
            <div className={styles.notificationItemText}>
                {message}
            </div>
        </li>
    )
}

export default NotificationItem
