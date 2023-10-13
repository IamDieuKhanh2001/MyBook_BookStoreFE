import React from 'react'
import styles from './UpdateInfoNotification.module.scss'
import Link from 'next/link'

const UpdateInfoNotification = () => {
    return (
        <>
            <div className='col-12'>
                <div className={`${styles.accountConfirmNotification} card mb-2`}>
                    <i className="fa fa-exclamation-triangle"></i>
                    <span>
                        <span>
                            Bạn vui lòng cập nhật thông tin tài khoản:
                        </span>
                        <Link href={'/account/edit'}>Cập nhật thông tin ngay</Link>
                    </span>
                </div>
            </div>
        </>
    )
}

export default UpdateInfoNotification
