'use client'

import React from 'react'

interface INotificationLoadingProps {
    loadMoreRef: (node?: Element | null | undefined) => void
}
const NotificationLoading = ({ loadMoreRef }: INotificationLoadingProps) => {
    return (
        <>
            <div ref={loadMoreRef} className="w-100 d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default NotificationLoading
