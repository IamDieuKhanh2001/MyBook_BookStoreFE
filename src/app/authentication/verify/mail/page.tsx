'use client'
import React from 'react'
import styles from './page.module.scss'
import { useRouter, useSearchParams } from 'next/navigation'

const VerifyEmailPage = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    let confirmEmailToken: string = '';

    if (searchParams && searchParams.has('token')) {
        const token = searchParams.get('token');
        token !== null && (confirmEmailToken = token)
    } else {
        router.push('/404')
    }

    React.useEffect(() => {
        console.log("Call verify")
    }, [])

    return (
        <>
            <div className='row'>
                <div className="col-12 p-5">
                    <div className="text-center">
                        <div className="d-flex justify-content-center mb-5 flex-column align-items-center">
                            <span className={styles.checkSuccess}>
                                <i className="fa fa-check" />
                            </span>
                            <span className="fw-bold fs-1">Đã xác thực mail thành công</span>
                            <small className="mt-2 fs-5"></small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerifyEmailPage
