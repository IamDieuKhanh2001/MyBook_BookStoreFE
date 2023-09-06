import Link from 'next/link'
import React from 'react'

const BtnBackToTop = () => {
    return (
        <>
            {/* Back to Top */}
            <Link
                href="#"
                className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
            >
                <i className="bi bi-arrow-up" />
            </Link>
        </>
    )
}

export default BtnBackToTop
