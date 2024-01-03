import React from 'react'
import styles from './NotificationEmptyAlert.module.scss'

const NotificationEmptyAlert = () => {
    return (
        <>
            <div className={styles.emptyNoti}>
                <div className={styles.emptyNotiImg}></div>
                <div className={styles.emptyNotiMsg}>
                    Không có thông báo nào
                </div>
            </div>
        </>
    )
}

export default NotificationEmptyAlert
