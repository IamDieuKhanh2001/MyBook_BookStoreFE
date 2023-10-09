"use client"
import Link from 'next/link'
import React from 'react'
import styles from './AccountOverview.module.scss'
import { useSession } from 'next-auth/react'
import ChangeAvatarModal from './ChangeAvatarModal/ChangeAvatarModal'

const AccountOverview = () => {
    const { data: session } = useSession();

    return (
        <>
            <div className='col-12'>
                <div className={`${styles.accountConfirmNotification} card mb-2`}>
                    <i className="fa fa-exclamation-triangle"></i>
                    <span>
                        <span>
                            Bạn vui lòng cập nhật thông tin tài khoản:
                        </span>
                        <Link href={'/account/edit'}>Cập nhật thông tin ngay</Link>
                    </span>
                </div>
            </div>
            <div className="card mb-2">
                <div className="card-body d-flex flex-column align-items-center">
                    <div className={styles.avatar}>
                        <img
                            src="/img/avatar/default.png"
                            alt="avatar"
                            className={`rounded-circle img-fluid`}
                        />
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <h5 className="my-3">{session?.user.userInfo.email}</h5>
                        <p className="text-muted mb-4">Cấp bậc: {session?.user.userInfo.userLevel.level_name}</p>
                        <div className="d-flex justify-content-center mb-2">
                            <ChangeAvatarModal />
                            <Link href={'/account/edit'} type="button" className="btn btn-outline-primary ms-1">
                                Thay đổi thông tin cá nhân
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Full Name</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{session?.user.userInfo.fullname}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{session?.user.userInfo.email}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Phone</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{session?.user.userInfo.phone_number}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Credit</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{session?.user.userInfo.money} VND</p>
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
                                <li className={styles.address}>
                                    <address>
                                        Quach Khanh
                                        <br />
                                        12/6/8 Hoang Hoa Tham
                                        <br />
                                        Phường 07, Quận Bình Thạnh,  Hồ Chí Minh,  Việt Nam
                                        <br />
                                        Tel: 0938427896
                                    </address>
                                    <Link href="/account/address">Thay đổi địa chỉ giao hàng</Link>
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
