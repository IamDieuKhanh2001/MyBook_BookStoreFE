import React from 'react'

interface ILoadingReviewListProps {
    loadingRef: (node?: Element | null | undefined) => void
}
const LoadingReviewList = (props: ILoadingReviewListProps) => {
    const { loadingRef } = props

    return (
        <>
            <div ref={loadingRef} className="d-flex mt-4 justify-content-center">
                <div style={{ width: '3rem', height: '3rem' }} className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default LoadingReviewList
