"use client"
import React, { useState } from 'react'
import AddressForm from './AddressForm'

const AddNewAddress = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleHideModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <button
                type="button"
                className="btn btn-success mb-3"
                onClick={handleShowModal}
            >
                <i className="fas fa-plus me-2"></i>
                Thêm 1 địa chỉ khác
            </button>
            {/* Modal */}
            {showModal && (
                <div className="modal d-block" tabIndex={-1} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Thêm 1 địa chỉ khác</h5>
                                <button type="button" className="btn-close" onClick={handleHideModal}/>
                            </div>
                            <div className="modal-body">
                                <AddressForm
                                    handleHideModal={handleHideModal}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showModal && (
                <div
                    className="modal-backdrop show"
                ></div>
            )}
        </>
    )
}

export default AddNewAddress
