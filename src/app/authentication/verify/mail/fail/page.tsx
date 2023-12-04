'use client'
import React, { useState } from 'react'
import styles from './page.module.scss'

const VerifyEmailSuccessPage = () => {

    return (
        <>
            <div className='row'>
                <div className="col-12 p-5">
                    <div className="text-center">
                        <div className="d-flex justify-content-center mb-5 flex-column align-items-center">
                            <span className={styles.checkFail}>
                                <i className="fa fa-times" />
                            </span>
                            <span className="fw-bold fs-1">
                                Xác thực mail thất bại, liên kết đã hết hạn
                                </span>
                            <small className="mt-2 fs-5"></small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerifyEmailSuccessPage
