"use client"
import React, { useState } from 'react'
import styles from './VoucherItem.module.scss'
import Link from 'next/link'
import { toast } from 'react-toastify'

const VoucherItem = () => {
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
                            <div>09.09 - Tặng Bạn Mã Giảm Giá 50K</div>
                            <div>Mã giảm 50K - Giảm Toàn Sàn dành cho ĐH 500K</div>
                            <div className={styles.voucherCode}>Mã voucher - FHS50KT09</div>
                            <div className={styles.voucherExpiry}>HSD: 30/09/2023</div>
                        </div>
                        <div className={styles.btnActionContainer}>
                            <Link href={'#'} className={styles.linkToVoucherDetail}>Chi tiết</Link>
                            <div className={styles.copyBtnContainer}>
                                <button
                                    className={'btn btn-primary'}
                                    onClick={() => handleCopyClick('FHS50KT091')}
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
