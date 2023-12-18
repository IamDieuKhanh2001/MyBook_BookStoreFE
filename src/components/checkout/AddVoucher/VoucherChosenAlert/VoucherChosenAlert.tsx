'use client'
import React from 'react'
import styles from './VoucherChosenAlert.module.scss'
import { truncateText } from '@/lib/utils/TextUtils';

interface IVoucherChosenAlertProps {
    selectedVoucher: IVoucher | undefined;
    setSelectedVoucher: React.Dispatch<React.SetStateAction<IVoucher | undefined>>;
}
const VoucherChosenAlert = (props: IVoucherChosenAlertProps) => {
    const { selectedVoucher, setSelectedVoucher } = props

    const handleRemoveVoucher = () => {
        setSelectedVoucher(undefined)
    }
    return (
        <>
            <div className={`${styles.voucherChoosenItem} alert alert-warning alert-dismissible fade show`} role="alert">
                <span>
                    Nhập mã thành công - {truncateText(selectedVoucher?.voucher_name, 50)}
                </span>
                <button
                    type="button"
                    className="btn-close"
                    onClick={handleRemoveVoucher}
                />
            </div>
        </>
    )
}

export default VoucherChosenAlert
