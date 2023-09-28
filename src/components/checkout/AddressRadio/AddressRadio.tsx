'use client'
import React from 'react'
import styles from './AddressRadio.module.scss'
import ModalAddAddress from './ModalAddAddress/ModalAddAddress';
import SectionTitle from '@/components/shared/sectionTitle/SectionTitle';

interface AddressRadioProps {
    selectedAddressId: number;
    handleRadioChange: (event: any) => void;
}

const AddressRadio = (props: AddressRadioProps) => {
    const { selectedAddressId, handleRadioChange } = props
    return (
        <div className="row">
            <div className="col-12">
                {/* tach component title section  */}
                <SectionTitle title="Địa chỉ giao hàng" />
                <div className="p-4 section-container">
                    {/* tach component btn add address  */}
                    <ModalAddAddress />
                    {/* address radio items  */}
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="1"
                            value={1}
                            defaultChecked={selectedAddressId === 1}
                            name='radioAddress'
                            onChange={handleRadioChange}
                        />
                        <div className='d-flex justify-content-between'>
                            <label className="form-check-label" htmlFor="1">
                                Quach Khanh | 12/6/8 Hoang Hoa Tham, Phường 07, Quận Bình Thạnh, Hồ Chí Minh, VN | 0938427896
                            </label>
                            <div className='d-flex'>
                                <span className={styles.editAddress}>Sửa</span>
                                <span className={styles.deleteAddress}>Xóa</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="2"
                            value={2}
                            defaultChecked={selectedAddressId === 2}
                            name='radioAddress'
                            onChange={handleRadioChange}
                        />
                        <div className='d-flex justify-content-between'>
                            <label className="form-check-label" htmlFor="1">
                                Quach Khanh | 12/6/8 Hoang Hoa Tham, Phường 07, Quận Bình Thạnh, Hồ Chí Minh, VN | 0938427896
                            </label>
                            <div className='d-flex'>
                                <span className={styles.editAddress}>Sửa</span>
                                <span className={styles.deleteAddress}>Xóa</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressRadio
