"use client"
import React from 'react'

const AddressForm = () => {
    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Tên</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Họ</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Số điện thọai</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Địa chỉ</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <select className="form-select" defaultValue={undefined} aria-label="Default select example">
                    <option>Thành phố/Tỉnh</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                </select>
            </div>
            <div className="input-group mb-3">
                <select className="form-select" defaultValue={undefined} aria-label="Default select example">
                    <option>Quận/Huyện</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                </select>
            </div>
            <div className="input-group mb-3">
                <select className="form-select" defaultValue={undefined} aria-label="Default select example">
                    <option>Xã/Phường</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                </select>
            </div>
            <div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="defaultAddress" />
                    <label className="form-check-label" htmlFor="defaultAddress">
                        Sử dụng làm địa chỉ mặc định
                    </label>
                </div>
            </div>
        </>
    )
}

export default AddressForm
