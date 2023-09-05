"use client"
import Link from 'next/link'
import React from 'react'

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
                                <li className='' style={{
                                    listStyle: 'none',
                                    // padding: '0px 13px',
                                    margin: '0px 0px',
                                    fontSize: '13px',
                                }}>
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
                            <button type="button" className="btn btn-success">
                                Thêm địa chỉ mới
                            </button>
                        </div>
                        <div className="card-body">
                            {/* address item  */}
                            <ol>
                                <li className='' style={{
                                    listStyle: 'none',
                                    // padding: '0px 13px',
                                    margin: '0px 0px',
                                    fontSize: '13px',
                                }}>
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
                                <li className='' style={{
                                    listStyle: 'none',
                                    // padding: '0px 13px',
                                    margin: '0px 0px',
                                    fontSize: '13px',
                                }}>
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
