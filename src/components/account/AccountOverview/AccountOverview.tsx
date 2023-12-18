"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './AccountOverview.module.scss'
import { useSession } from 'next-auth/react'
import ChangeAvatarModal from './ChangeAvatarModal/ChangeAvatarModal'
import useAPIUserAddress from '@/lib/hooks/api/useAPIUserAddress'

const AccountOverview = () => {
    const { data: session } = useSession();
    const { getDefaultAddress } = useAPIUserAddress()
    const { addressDefault, isLoadingDefaultAddress } = getDefaultAddress()

    const onImageAvatarError = (e: any) => {
        e.target.src = '/img/avatar/default.png'
    }

    return (
        <>
            <div className="card mb-2">
                <div className="card-body d-flex flex-column align-items-center">
                    <div className={styles.avatar}>
                        <img
                            src={
                                session?.user.userInfo.profile?.avatar_source ?
                                    session.user.userInfo.profile?.avatar_source
                                    :
                                    '/img/avatar/default.png'
                            }
                            alt="avatar"
                            className={`rounded-circle img-fluid`}
                            onError={onImageAvatarError}
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
                            <p className="mb-0">Họ Tên</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">
                                {session?.user.userInfo.profile?.firstname}
                                &nbsp;
                                {session?.user.userInfo.profile?.lastname}
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Số điện thoại</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">
                                {session?.user.userInfo.profile?.phone_number}
                            </p>
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
                            <p className="mb-0">Số credit</p>
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
                            <p className="">
                                <span className="text-primary font-italic">Mặc định</span> Địa chỉ thanh toán
                            </p>
                        </div>
                        <div className="card-body">
                            {!isLoadingDefaultAddress ? (
                                addressDefault ? (
                                    <ol>
                                        <li className={styles.address}>
                                            <address>
                                                {addressDefault?.recipient_name}
                                                <br />
                                                {addressDefault?.street}
                                                <br />
                                                {addressDefault?.wards?.name},{addressDefault?.wards.district?.name},{addressDefault?.wards.district.province?.name}
                                                <br />
                                                Tel: {addressDefault?.recipient_phone}
                                            </address>
                                            <Link href="/account/address">Thay đổi địa chỉ giao hàng</Link>
                                        </li>
                                    </ol>
                                ) : (
                                    <div className="alert alert-warning" role="alert">
                                        Bạn chưa có địa chỉ mặc định, hãy thêm ngay!
                                    </div>
                                )
                            ) : (
                                <div className="text-center">
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div >
                </div >
            </div >
        </>
    )
}

export default AccountOverview
