import React from 'react'
import styles from './NotificationItem.module.scss'

interface INotificationItemProps {
    notificationData: INotification
}
const NotificationItem = (props : INotificationItemProps) => {
    const { notificationData } = props
    const { id, is_read, message, created_at, title } = notificationData

    return (
        <li className={styles.notificationItem}>
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
