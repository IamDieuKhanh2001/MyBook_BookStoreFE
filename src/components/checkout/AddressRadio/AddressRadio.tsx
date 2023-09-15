'use client'
import React from 'react'
import styles from './AddressRadio.module.scss'

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
                <h5 className={`${styles.sectionTitle} position-relative text-uppercase my-3`}>
                    <span className="bg-white pe-3">Địa chỉ giao hàng</span>
                </h5>
                <div className="bg-light p-4">
                    {/* tach component btn add address  */}
                    <button type="button" className="btn btn-success mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fas fa-plus me-2"></i>
                        Thêm 1 địa chỉ khác
                    </button>
                    {/* Modal */}
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* tach component radio dia chi  */}
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
                    {/* tach component radio dia chi  */}
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
