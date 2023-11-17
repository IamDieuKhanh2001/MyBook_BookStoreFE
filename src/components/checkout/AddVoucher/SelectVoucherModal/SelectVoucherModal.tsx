'use client'
import React from 'react'
import styles from './SelectVoucherModal.module.scss'
import VoucherItem from './VoucherItem/VoucherItem'

interface ISelectVoucherModalProps {
    voucherList: IVoucher[] | undefined;
    selectedVoucher: IVoucher | undefined;
    setSelectedVoucher: React.Dispatch<React.SetStateAction<IVoucher | undefined>>;
}
const SelectVoucherModal = (props: ISelectVoucherModalProps) => {
    const { voucherList, selectedVoucher, setSelectedVoucher } = props

    return (
        <>
            {/* Button trigger modal */}
            <a className={styles.linkModalTrigger} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Chọn mã khuyến mãi
            </a>
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
                                    {voucherList && (
                                        voucherList.map((voucherItem) => (
                                            <VoucherItem
                                                key={voucherItem.id}
                                                data={voucherItem}
                                                selectedVoucher={selectedVoucher}
                                                setSelectedVoucher={setSelectedVoucher}
                                            />
                                        ))
                                    )}
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
