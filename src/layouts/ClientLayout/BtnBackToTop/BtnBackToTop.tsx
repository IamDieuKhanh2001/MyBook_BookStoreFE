import Link from 'next/link'
import React from 'react'
import styles from './BtnBackToTop.module.scss'

const BtnBackToTop = () => {
    return (
        <>
            {/* Back to Top */}
            <Link
                href="#"
                className={`${styles.backToTop} back-to-top btn btn-lg btn-primary btn-lg-square rounded-circle`}
            >
                <i className="bi bi-arrow-up" />
            </Link>
        </>
    )
}

export default BtnBackToTop
