"use client"
import React, { useEffect, useRef } from 'react'
import styles from './Voucher.module.scss'
import Link from 'next/link'
import VoucherItem from './VoucherItem/VoucherItem'

const Voucher = () => {
    return (
        <>
            <div>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className={`nav-link active`} id="pills-my-voucher-tab" data-bs-toggle="pill" data-bs-target="#pills-my-voucher" type="button" role="tab" aria-controls="pills-my-voucher" aria-selected="true">
                            Voucher của tôi
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={`nav-link`} id="pills-partner-tab" data-bs-toggle="pill" data-bs-target="#pills-partner-voucher" type="button" role="tab" aria-controls="pills-partner-voucher" aria-selected="false">
                            Voucher đối tác
                        </button>
                    </li>
                </ul>
                <hr />
                <div className="tab-content" id="partner-vouchertabContent">
                    <div className="tab-pane fade show active" id="pills-my-voucher" role="tabpanel" aria-labelledby="pills-my-voucher-tab">
                        <div className={styles.voucherList}>
                            <VoucherItem />
                            <VoucherItem />
                            <VoucherItem />
                        </div>

                    </div>
                    <div className="tab-pane fade" id="pills-partner-voucher" role="tabpanel" aria-labelledby="pills-partner-tab">
                        <div className={styles.voucherList}>
                            <VoucherItem />
                            <VoucherItem />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Voucher
