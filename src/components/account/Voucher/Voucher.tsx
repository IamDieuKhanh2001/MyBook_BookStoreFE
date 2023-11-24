"use client"
import React from 'react'
import styles from './Voucher.module.scss'
import useAPIUserVoucher from '@/lib/hooks/api/useAPIUserVoucher'
import VoucherList from './VoucherList/VoucherList'

const Voucher = () => {
    const { getVoucherPersonalized, getVoucherPartner } = useAPIUserVoucher()
    const { paginatedData: voucherPersonalizedList, isLoading: isLoadingPersonalizedList, isReachedEnd: isPersonalizedReachEnd, setSize: setSizePersonalized } = getVoucherPersonalized()
    const { paginatedData: voucherPartnerList, isLoading: isLoadingPartnerList, isReachedEnd: isPartnerReachedEnd, setSize: setSizePartner } = getVoucherPartner()

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
                        <VoucherList
                            data={voucherPersonalizedList}
                            isReachedEnd={isPersonalizedReachEnd}
                            setSize={setSizePersonalized}
                        />
                    </div>
                    <div className="tab-pane fade" id="pills-partner-voucher" role="tabpanel" aria-labelledby="pills-partner-tab">
                        <VoucherList
                            data={voucherPartnerList}
                            isReachedEnd={isPartnerReachedEnd}
                            setSize={setSizePartner}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Voucher
