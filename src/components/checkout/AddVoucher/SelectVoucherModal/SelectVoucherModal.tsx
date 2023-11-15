'use client'
import React from 'react'
import styles from './SelectVoucherModal.module.scss'
import Link from 'next/link'

const SelectVoucherModal = () => {
    return (
        <>
            {/* Button trigger modal */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Chọn
            </button>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className={styles.VoucherModalTitle}>
                                <span>
                                    <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/promotion/ico_coupon.svg?q=10310" />
                                </span>
                                <span>Chọn mã khuyến mãi</span>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className={`modal-body ${styles.modalBody}`}>
                            <div className={styles.voucherModalContent}>

                                <div className={styles.voucherList}>
                                    <div className={styles.voucherListTitle}>
                                        <span>
                                            Mã giảm giá
                                        </span>
                                        <span className={styles.labelNote}>
                                            Áp dụng tối đa: 1
                                        </span>
                                    </div>
                                    <div className={styles.voucherItem}>
                                        {/* <img className={styles.voucherBg} src="/img/voucher/voucher_bg.svg" alt="bg" /> */}
                                        <svg
                                            className={styles.voucherBg}
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink='http://www.w3.org/1999/xlink'
                                            viewBox="7.5 -2 478.7 148"
                                            style={{ filter: 'drop-shadow(rgba(0, 0, 0, 0.15) 0px 1px 3px)' }}
                                        >
                                            <g fill="none" fillRule="evenodd">
                                                <g>
                                                    <g>
                                                        <g>
                                                            <g transform="translate(-544 -3050) translate(80 2072) translate(0 930) translate(464 48)">
                                                                <path
                                                                    id="Frame_voucher_Web"
                                                                    d="M 110 144 h -98 a 12 12 0 0 1 -12 -12 v -122 a 12 12 0 0 1 12 -12 H 110 a 12.02 12 0 0 0 24 0 H 480.7 a 12 12 0 0 1 12 12 V 132 a 12 12 0 0 1 -12 12 H 134 v 0 a 12 12 0 0 0 -24 0 v 0 Z"
                                                                    transform="translate(0.5 0.5)"
                                                                    fill="#fff"
                                                                    stroke="rgba(0,0,0,0)"
                                                                    strokeMiterlimit={10}
                                                                    strokeWidth={1}
                                                                >
                                                                </path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        {/* tach com  */}
                                        <div className={styles.voucherIcon}>
                                            <img src="/img/voucher/icon_percent.svg" alt="percent icon" />
                                        </div>
                                        <div className={styles.voucherItemContent}>
                                            <div className={styles.voucherTitle}>
                                                <div className='d-flex flex-row align-items-center justify-content-between mb-2'>
                                                    <div className={styles.voucherName}>
                                                        MÃ GIẢM 10K - ĐƠN HÀNG TỪ 150K
                                                    </div>
                                                    <div className={styles.voucherDetailLink}>
                                                        Chi tiết
                                                    </div>
                                                </div>
                                                <div className={styles.voucherDesc}>
                                                    Không Áp Dụng Cho Phiếu Quà Tặng và Sách Giáo Khoa
                                                </div>
                                            </div>
                                            <div className='d-flex'>
                                                <Link href="">Mua thêm</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.voucherItem}>
                                        <img className={styles.voucherBg} src="/img/voucher/voucher_bg.svg" alt="bg" />
                                        <div className={styles.voucherIcon}>
                                            <img src="/img/voucher/icon_percent.svg" alt="percent icon" />
                                        </div>
                                        <div className={styles.voucherItemContent}>
                                            <div className={styles.voucherTitle}>
                                                <div className='d-flex flex-row align-items-center justify-content-between mb-2'>
                                                    <div className={styles.voucherName}>
                                                        MÃ GIẢM 10K - ĐƠN HÀNG TỪ 150K
                                                    </div>
                                                    <div className={styles.voucherDetailLink}>
                                                        Chi tiết
                                                    </div>
                                                </div>
                                                <div className={styles.voucherDesc}>
                                                    Không Áp Dụng Cho Phiếu Quà Tặng và Sách Giáo Khoa
                                                </div>
                                            </div>
                                            <div className='d-flex'>
                                                <Link href="">Mua thêm</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.voucherItem}>
                                        <img className={styles.voucherBg} src="/img/voucher/voucher_bg.svg" alt="bg" />
                                        <div className={styles.voucherIcon}>
                                            <img src="/img/voucher/icon_percent.svg" alt="percent icon" />
                                        </div>
                                        <div className={styles.voucherItemContent}>
                                            <div className={styles.voucherTitle}>
                                                <div className='d-flex flex-row align-items-center justify-content-between mb-2'>
                                                    <div className={styles.voucherName}>
                                                        MÃ GIẢM 10K - ĐƠN HÀNG TỪ 150K
                                                    </div>
                                                    <div className={styles.voucherDetailLink}>
                                                        Chi tiết
                                                    </div>
                                                </div>
                                                <div className={styles.voucherDesc}>
                                                    Không Áp Dụng Cho Phiếu Quà Tặng và Sách Giáo Khoa
                                                </div>
                                            </div>
                                            <div className='d-flex'>
                                                <Link href="">Mua thêm</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.voucherItem}>
                                        <img className={styles.voucherBg} src="/img/voucher/voucher_bg.svg" alt="bg" />
                                        <div className={styles.voucherIcon}>
                                            <img src="/img/voucher/icon_percent.svg" alt="percent icon" />
                                        </div>
                                        <div className={styles.voucherItemContent}>
                                            <div className={styles.voucherTitle}>
                                                <div className='d-flex flex-row align-items-center justify-content-between mb-2'>
                                                    <div className={styles.voucherName}>
                                                        MÃ GIẢM 10K - ĐƠN HÀNG TỪ 150K
                                                    </div>
                                                    <div className={styles.voucherDetailLink}>
                                                        Chi tiết
                                                    </div>
                                                </div>
                                                <div className={styles.voucherDesc}>
                                                    Không Áp Dụng Cho Phiếu Quà Tặng và Sách Giáo Khoa
                                                </div>
                                            </div>
                                            <div className='d-flex'>
                                                <Link href="">Mua thêm</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.voucherItem}>
                                        <img className={styles.voucherBg} src="/img/voucher/voucher_bg.svg" alt="bg" />
                                        <div className={styles.voucherIcon}>
                                            <img src="/img/voucher/icon_percent.svg" alt="percent icon" />
                                        </div>
                                        <div className={styles.voucherItemContent}>
                                            <div className={styles.voucherTitle}>
                                                <div className='d-flex flex-row align-items-center justify-content-between mb-2'>
                                                    <div className={styles.voucherName}>
                                                        MÃ GIẢM 10K - ĐƠN HÀNG TỪ 150K
                                                    </div>
                                                    <div className={styles.voucherDetailLink}>
                                                        Chi tiết
                                                    </div>
                                                </div>
                                                <div className={styles.voucherDesc}>
                                                    Không Áp Dụng Cho Phiếu Quà Tặng và Sách Giáo Khoa
                                                </div>
                                            </div>
                                            <div className='d-flex'>
                                                <Link href="">Mua thêm</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectVoucherModal
