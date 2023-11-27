"use client"
import React, { useState } from 'react'
import styles from './VoucherItem.module.scss'
import Link from 'next/link'
import { toast } from 'react-toastify'

interface IVoucherItemProps {
    data: IVoucher
}
const VoucherItem = (props: IVoucherItemProps) => {
    const { data } = props
    const [isCopiedCode, setIsCopiedCode] = useState(false);

    const copyTextToClipboard = async (text: string) => {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    const handleCopyClick = (copyText: string) => {
        copyTextToClipboard(copyText)
            .then(() => {
                // If successful, update the isCopied state value
                setIsCopiedCode(true);
                setTimeout(() => {
                    setIsCopiedCode(false);
                }, 1500);
            })
            .catch((err) => {
                toast.error("Không thể copy")
            });
    }
    return (
        <>
            <div className={styles.voucherListItem}>
                <div>
                    <img src="/img/voucher/ico_coupongreen.svg" alt="" />
                </div>
                <div>
                    <div>
                        <div className={styles.voucherDetail} >
                            <div>{data.voucher_name}</div>
                            <div>{data.desc}</div>
                            <div className={styles.voucherCode}>
                                Mã voucher - {data.voucher_code}
                            </div>
                            <div className={styles.voucherExpiry}>
                                HSD: {data.end_date}
                            </div>
                        </div>
                        <div className={styles.btnActionContainer}>
                            <Link href={'#'} className={styles.linkToVoucherDetail}>Chi tiết</Link>
                            <div className={styles.copyBtnContainer}>
                                <button
                                    className={'btn btn-primary'}
                                    onClick={() => handleCopyClick(data.voucher_code)}
                                    disabled={isCopiedCode}
                                >
                                    {isCopiedCode ? (
                                        <>
                                            <i className="fa fa-clipboard-check me-2"></i>
                                            Đã sao chép mã
                                        </>
                                    ) : (
                                        <>
                                            <i className="far fa-clipboard me-2"></i>
                                            Sao chép mã
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VoucherItem
