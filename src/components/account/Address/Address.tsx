"use client"
import Link from 'next/link'
import React from 'react'
import styles from './Address.module.scss'
import AddNewAddress from './AddNewAddress/AddNewAddress'

const AddressEdit = () => {
    return (
        <>
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="card mb-4 mb-md-0">
                        <div className="card-header">
                            <p className=""><span className="text-primary font-italic">Mặc định</span> Địa chỉ thanh toán
                            </p>
                        </div>
                        <div className="card-body">
                            {/* default address  */}
                            <ol>
                                <li className={styles.address}>
                                    <address className='mb-1'>
                                        Quach Khanh
                                        <br />
                                        12/6/8 Hoang Hoa Tham
                                        <br />
                                        Phường 07, Quận Bình Thạnh,  Hồ Chí Minh,  Việt Nam
                                        <br />
                                        Tel: 0938427896
                                    </address>
                                    <p className=''>
                                        <Link href="#"
                                            className='fw-bold'
                                        >
                                            Sửa địa chỉ
                                        </Link>
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-4 mb-md-0">
                        <div className="card-header d-flex justify-content-between">
                            <p className="">
                                Địa chỉ khác
                            </p>
                            <AddNewAddress />
                        </div>
                        <div className="card-body">
                            {/* address item  */}
                            <ol>
                                <li className={styles.address}>
                                    <address className='mb-1'>
                                        Quach Khanh
                                        <br />
                                        12/6/8 Hoang Hoa Tham
                                        <br />
                                        Phường 07, Quận Bình Thạnh,  Hồ Chí Minh,  Việt Nam
                                        <br />
                                        Tel: 0938427896
                                    </address>
                                    <p className=''>
                                        <Link href="#"
                                            className='fw-bold border border-1 border-dark border-top-0 border-bottom-0 border-start-0 pe-1'
                                        >
                                            đặt mặc định
                                        </Link>
                                        <Link href="#"
                                            className='fw-bold border border-1 border-dark border-top-0 border-bottom-0 border-start-0 px-1'
                                        >
                                            Sửa địa chỉ
                                        </Link>
                                        <Link href="#" className='fw-bold text-danger ps-1'>Xóa địa chỉ</Link>
                                    </p>
                                </li>
                            </ol>
                            <ol>
                                <li className={styles.address}>
                                    <address className='mb-1'>
                                        Quach Khanh
                                        <br />
                                        12/6/8 Hoang Hoa Tham
                                        <br />
                                        Phường 07, Quận Bình Thạnh,  Hồ Chí Minh,  Việt Nam
                                        <br />
                                        Tel: 0938427896
                                    </address>
                                    <p className=''>
                                        <Link href="#"
                                            className='fw-bold border border-1 border-dark border-top-0 border-bottom-0 border-start-0 pe-1'
                                        >
                                            đặt mặc định
                                        </Link>
                                        <Link href="#"
                                            className='fw-bold border border-1 border-dark border-top-0 border-bottom-0 border-start-0 px-1'
                                        >
                                            Sửa địa chỉ
                                        </Link>
                                        <Link href="#" className='fw-bold text-danger ps-1'>Xóa địa chỉ</Link>
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddressEdit
