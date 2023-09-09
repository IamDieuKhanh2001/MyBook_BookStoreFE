import Link from 'next/link'
import React from 'react'

const AccountOverview = () => {
    return (
        <>
            <div className="card mb-4">
                <div className="card-body text-center">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ width: 150 }} />
                    <h5 className="my-3">Quach Khanh</h5>
                    <p className="text-muted mb-4">Thành viên</p>
                    <div className="d-flex justify-content-center mb-2">
                        <button type="button" className="btn btn-primary">Thay đổi avatar</button>
                        <button type="button" className="btn btn-outline-primary ms-1">Thay đổi thông tin cá nhân</button>
                    </div>
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Full Name</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">Johnatan Smith</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">example@example.com</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Phone</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">(097) 234-5678</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-4 mb-md-0">
                        <div className="card-header">
                            <p className=""><span className="text-primary font-italic">Mặc định</span> Địa chỉ thanh toán
                            </p>
                        </div>
                        <div className="card-body">

                            <ol>
                                <li className='' style={{
                                    listStyle: 'none',
                                    // padding: '0px 13px',
                                    margin: '0px 0px 10px',
                                    fontSize: '13px',
                                }}>
                                    <address>
                                        Quach Khanh
                                        <br />
                                        12/6/8 Hoang Hoa Tham
                                        <br />
                                        Phường 07, Quận Bình Thạnh,  Hồ Chí Minh,  Việt Nam
                                        <br />
                                        Tel: 0938427896
                                    </address>
                                    <Link href="#">Thay đổi địa chỉ giao hàng</Link>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountOverview
