import React from 'react'
import styles from './LoadingOverLay.module.scss'

const LoadingOverLay = () => {
    return (
        <div
            id="spinner"
            className={`${styles.spinnerStyle} ${styles.show} bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center`}
        >
            <div className="spinner-border text-primary" role="status" />
        </div>
    )
}

export default LoadingOverLay
