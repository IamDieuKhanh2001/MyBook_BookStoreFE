"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './Address.module.scss'
import AddNewAddress from './AddNewAddress/AddNewAddress'
import { useConfirm } from 'material-ui-confirm'
import { toast } from 'react-toastify'
import useAPIUserAddress from '@/lib/hooks/api/useAPIUserAddress'
import UpdateAddressModal from './UpdateAddress/UpdateAddressModal'

const Address = () => {
    const confirm = useConfirm();
    const { getNonDefaultAddress, getDefaultAddress, setAddressDefaultById, deleteAddressById } = useAPIUserAddress()
    const { addressNotDefaultList, addressNotDefaultError, isLoadingNotDefaultList, mutateAddressNotDefault } = getNonDefaultAddress()
    const { addressDefault, isLoadingDefaultAddress, addressDefaultError, mutateAddressDefault } = getDefaultAddress()
    const [selectedAddressUpdate, setSelectedAddressUpdate] = useState<IUserAddress | null>(null)
    const [showModalUpdate, setShowModalUpdate] = useState(false);

    const handleSetDefaultAddress = (id: number) => {
        confirm({
            title: `Đồng ý đưa địa chỉ này thành mặc định?`,
            description: 'Bạn có chắc chắn muốn đưa địa chỉ làm mặc định?',
        })
            .then(async () => {
                try {
                    const res = await setAddressDefaultById(id)
                    mutateAddressDefault()
                    mutateAddressNotDefault()
                    toast.success(res.data.message)
                }
                catch (e) {
                    toast.error("Có lỗi xảy ra, vui lòng thử lại")
                }
            })
    }

    const handleDeleteAddress = (id: number) => {
        confirm({
            title: `Đồng ý xóa địa chỉ?`,
            description: 'Bạn có chắc chắn muốn xóa địa chỉ này',
        })
            .then(async () => {
                try {
                    const res = await deleteAddressById(id)
                    mutateAddressDefault()
                    mutateAddressNotDefault()
                    toast.success(res.data.message)
                }
                catch (e) {
                    toast.error("Có lỗi xảy ra, vui lòng thử lại")
                }
            })
    }

    const handleClickUpdate = (e: React.MouseEvent<HTMLElement>, addressUpdate: IUserAddress) => {
        setSelectedAddressUpdate(addressUpdate)
        setShowModalUpdate(true)
    }
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
                            {!isLoadingDefaultAddress ? (
                                addressDefault ? (
                                    <ol>
                                        <li className={styles.address}>
                                            <address className='mb-1'>
                                                <span className="badge rounded-pill bg-success me-1">Mặc định</span>
                                                {addressDefault?.recipient_name}
                                                <br />
                                                {addressDefault?.street}
                                                <br />
                                                {addressDefault?.wards.name},{addressDefault?.wards.district?.name},{addressDefault?.wards.district.province.name}
                                                <br />
                                                Tel: {addressDefault?.recipient_phone}
                                            </address>
                                            <p className=''>
                                                <Link href=""
                                                    className='fw-bold border border-1 border-dark border-top-0 border-bottom-0 border-start-0 px-1'
                                                    onClick={
                                                        (e) => handleClickUpdate(e, addressDefault)
                                                    }
                                                >
                                                    Sửa địa chỉ
                                                </Link>
                                            </p>
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
                            {/* address not default list  */}
                            {addressNotDefaultList.length > 0 ? (
                                addressNotDefaultList.map((addressItem: IUserAddress) => (
                                    <ol key={addressItem.id}>
                                        <li className={styles.address}>
                                            <address className='mb-1'>
                                                {addressItem.recipient_name}
                                                <br />
                                                {addressItem.street}
                                                <br />
                                                {addressItem.wards.name},{addressItem.wards.district.name},{addressItem.wards.district.province.name}
                                                <br />
                                                Tel: {addressItem.recipient_phone}
                                            </address>
                                            <p className=''>
                                                <Link href="#"
                                                    className='fw-bold border border-1 border-dark border-top-0 border-bottom-0 border-start-0 pe-1'
                                                    onClick={() => handleSetDefaultAddress(addressItem.id)}
                                                >
                                                    đặt mặc định
                                                </Link>
                                                <Link href=""
                                                    className='fw-bold border border-1 border-dark border-top-0 border-bottom-0 border-start-0 px-1'
                                                    onClick={
                                                        (e) => handleClickUpdate(e, addressItem)
                                                    }
                                                >
                                                    Sửa địa chỉ
                                                </Link>
                                                <Link
                                                    href="#"
                                                    className='fw-bold text-danger ps-1'
                                                    onClick={() => handleDeleteAddress(addressItem.id)}
                                                >
                                                    Xóa địa chỉ
                                                </Link>
                                            </p>
                                        </li>
                                    </ol>
                                ))
                            ) : (
                                isLoadingNotDefaultList ? (
                                    <div className="text-center">
                                        <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="alert alert-warning" role="alert">
                                        Bạn chưa có địa chỉ khác để thay thế, hãy thêm ngay!
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <UpdateAddressModal
                        selectedAddressUpdate={selectedAddressUpdate}
                        setSelectedAddressUpdate={setSelectedAddressUpdate}
                        showModalUpdate={showModalUpdate}
                        setShowModalUpdate={setShowModalUpdate}
                    />
                </div>
            </div>
        </>
    )
}

export default Address
