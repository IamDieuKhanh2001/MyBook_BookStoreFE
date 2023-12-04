'use client'
import React, { useState } from 'react'
import styles from './page.module.scss'
import { useSession } from 'next-auth/react';

const VerifyEmailSuccessPage = () => {
    // const { data: session, update } = useSession();

    // const updateSessionVerifyStatus = async () => {
    //     try {
    //         await update({
    //             ...session,
    //             user: {
    //                 ...session?.user,
    //                 userInfo: {
    //                     ...session?.user.userInfo,
    //                     is_email_verified: 1
    //                 }
    //             }
    //         });
    //         console.log("update sesssion")
    //     } catch (e) {
    //         console.log("Can not update session")
    //     }
    // }

    // React.useEffect(() => {
    //     if (session && session.user.userInfo.is_email_verified === 0) {
    //         updateSessionVerifyStatus()
    //     }
    //     console.log("no sesssion")
    // }, [session])

    return (
        <>
            <div className='row'>
                <div className="col-12 p-5">
                    <div className="text-center">
                        <div className="d-flex justify-content-center mb-5 flex-column align-items-center">
                            <span className={styles.checkSuccess}>
                                <i className="fa fa-check" />
                            </span>
                            <span className="fw-bold fs-1">Xác thực mail thành công</span>
                            <small className="mt-2 fs-5"></small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerifyEmailSuccessPage
