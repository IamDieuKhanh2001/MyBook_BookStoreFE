"use client"
import React from 'react'
import AddressForm from './AddressForm'

const AddNewAddress = () => {
    return (
        <>
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
                            <h5 className="modal-title" id="exampleModalLabel">Thêm 1 địa chỉ khác</h5>
                        </div>
                        <div className="modal-body">
                            <AddressForm />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewAddress
