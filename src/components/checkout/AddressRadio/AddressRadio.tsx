'use client'
import React, { useEffect } from 'react'
import styles from './AddressRadio.module.scss'
import SectionTitle from '@/components/shared/sectionTitle/SectionTitle';
import useAPIUserAddress from '@/lib/hooks/api/useAPIUserAddress';
import AddNewAddress from '@/components/account/Address/AddNewAddress/AddNewAddress';
import { useRouter } from 'next/navigation';

interface AddressRadioProps {
    selectedAddress: IUserAddress | undefined
    setSelectedAddress: React.Dispatch<React.SetStateAction<IUserAddress | undefined>>
}

const AddressRadio = (props: AddressRadioProps) => {
    const { selectedAddress, setSelectedAddress } = props
    const { getAllAddress } = useAPIUserAddress()
    const { addressList, isLoading } = getAllAddress()
    const router = useRouter()

    useEffect(() => {
        const setInitDefaultAddress = () => {
            const currentDefaultAddress = addressList.find(item => item.is_default === 1);
            if (currentDefaultAddress) {
                setSelectedAddress(currentDefaultAddress)
            }
        }
        setInitDefaultAddress()
    }, [addressList])

    const handleRadioChange = (event: any) => {
        const { checked, value } = event.target
        if(checked === true) {
            const currentSelect = addressList.find((item) => item.id === parseInt(value, 10));
            setSelectedAddress(currentSelect)
        }
    }

    return (
        <div className="row">
            <div className="col-12">
                {/* tach component title section  */}
                <SectionTitle title="Địa chỉ giao hàng" />
                <div className="p-4 section-container">
                    {/* tach component btn add address  */}
                    <button
                        type="button"
                        className="btn btn-success mb-3"
                        onClick={() => router.push('/account/address')}
                    >
                        <i className="fas fa-plus me-2"></i>
                        Thêm địa chỉ khác
                    </button>
                    {addressList.length > 0 ? (
                        addressList.map((address) => (
                            <div className="form-check" key={address.id}>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id={`address_id_${address.id}`}
                                    value={address.id}
                                    checked={selectedAddress?.id === address.id}
                                    name='radioAddress'
                                    onChange={handleRadioChange}
                                />
                                <div className='d-flex justify-content-between'>
                                    <label className="form-check-label" htmlFor={`address_id_${address.id}`}>
                                        {address.recipient_name} | {address.street}, {address.wards.name},{address.wards.district.name},{address.wards.district.province.name}, VN | {address.recipient_phone}
                                        {address.is_default && <span className="badge rounded-pill bg-success ms-1">Mặc định</span>}
                                    </label>
                                    {/* <div className='d-flex'>
                                        <span className={styles.editAddress}>Sửa</span>
                                    </div> */}
                                </div>
                            </div>
                        ))
                    ) : (
                        isLoading ? (
                            <div className="text-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            <div className="alert alert-warning" role="alert">
                                Bạn chưa thêm địa chỉ, hãy thêm ngay!
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default AddressRadio
