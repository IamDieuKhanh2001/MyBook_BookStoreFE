
import React from 'react'
import UpdateAddressForm from './UpdateAddressForm/UpdateAddressForm';

interface IProps {
    showModalUpdate: boolean;
    setShowModalUpdate: (value: boolean) => void;
    selectedAddressUpdate: IUserAddress | null;
    setSelectedAddressUpdate: (value: IUserAddress | null) => void;
}
const UpdateAddressModal = (props: IProps) => {
    const { selectedAddressUpdate, setSelectedAddressUpdate, setShowModalUpdate, showModalUpdate } = props
    console.log(selectedAddressUpdate)

    const handleShowModal = () => {
        setShowModalUpdate(true);
    };

    const handleHideModal = () => {
        setSelectedAddressUpdate(null)
        setShowModalUpdate(false);
    };

    return (
        <>
            {/* Modal */}
            {showModalUpdate && (
                <div className="modal d-block" tabIndex={-1} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Sửa địa chỉ</h5>
                                <button type="button" className="btn-close" onClick={handleHideModal} />
                            </div>
                            <div className="modal-body">
                                <UpdateAddressForm
                                    handleHideModal={handleHideModal}
                                    selectedAddressUpdate={selectedAddressUpdate}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showModalUpdate && (
                <div
                    className="modal-backdrop show"
                ></div>
            )}
        </>
    )
}

export default UpdateAddressModal
