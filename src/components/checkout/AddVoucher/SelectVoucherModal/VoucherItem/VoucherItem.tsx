'use client'
import React from 'react'
import styles from './VoucherItem.module.scss'
import VoucherBackground from './VoucherBackground/VoucherBackground'

interface IVoucherItemProps {
    data: IVoucher
    selectedVoucher: IVoucher | undefined;
    setSelectedVoucher: React.Dispatch<React.SetStateAction<IVoucher | undefined>>;
}
const VoucherItem = (props: IVoucherItemProps) => {
    const { data, selectedVoucher, setSelectedVoucher } = props

    const handleSelectVoucher = (voucher_id: number) => {
        setSelectedVoucher(data)
    }

    return (
        <>
            <div className={styles.voucherItem}>
                {/* <img className={styles.voucherBg} src="/img/voucher/voucher_bg.svg" alt="bg" /> */}
                <VoucherBackground />
                {/* tach com  */}
                <div className={styles.voucherIcon}>
                    <img src="/img/voucher/icon_percent.svg" alt="percent icon" />
                </div>
                <div className={styles.voucherItemContent}>
                    <div className={styles.voucherTitle}>
                        <div className='w-100 d-flex flex-row align-items-center justify-content-between mb-2'>
                            <div className={styles.voucherName}>
                                {data.voucher_name}
                            </div>
                            <div className={styles.voucherDetailLink}>
                                Chi tiết
                            </div>
                        </div>
                        <div className={styles.voucherDesc}>
                            {data.desc}
                            {data.voucher_code}
                        </div>
                    </div>
                    <div className='d-flex justify-content-end align-items-center w-100'>
                        {selectedVoucher?.id === data.id ? (
                            <span>
                                Đang áp dụng
                            </span>
                        ) : (
                            <button
                                className={`${styles.btnApplyVoucher} btn btn-success`}
                                onClick={() => handleSelectVoucher(data.id)}
                            >
                                Áp dụng
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default VoucherItem
