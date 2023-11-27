import React from 'react'

interface IVoucherSpinnerLoadingProps {
    loadMoreRef: (node?: Element | null | undefined) => void
}
const VoucherSpinnerLoading = ({ loadMoreRef }: IVoucherSpinnerLoadingProps) => {
    return (
        <>
            <div ref={loadMoreRef} className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default VoucherSpinnerLoading
