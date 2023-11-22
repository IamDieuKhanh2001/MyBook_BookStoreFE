'use client'
import React, {  useState } from 'react'
import styles from './AddVoucher.module.scss'
import SectionTitle from '@/components/shared/sectionTitle/SectionTitle'
import SelectVoucherModal from './SelectVoucherModal/SelectVoucherModal'
import VoucherChosenAlert from './VoucherChosenAlert/VoucherChosenAlert'
import { toast } from 'react-toastify'
import { errorHandler } from '@/lib/utils/ErrorHandler'

interface IAddVoucherProps {
  voucherList: IVoucher[] | undefined;
  selectedVoucher: IVoucher | undefined;
  setSelectedVoucher: React.Dispatch<React.SetStateAction<IVoucher | undefined>>;
  handleRecallPreOrder: (productCartIdList: number[], voucherCode?: string) => Promise<void>
}
const AddVoucher = (props: IAddVoucherProps) => {
  const { voucherList, selectedVoucher, setSelectedVoucher, handleRecallPreOrder } = props
  const [inputCodeValue, setInputCodeValue] = useState<string>('')

  const handleApplyCoupon = () => {
    try {
      const foundVoucher = voucherList && voucherList.find(voucher => voucher.voucher_code === inputCodeValue.trim());
      if (foundVoucher) {
        setSelectedVoucher(foundVoucher)
        setInputCodeValue('')
        toast.success('Nhập thành công - ' + foundVoucher?.voucher_name)
      } else {
        toast.error("Mã khuyến mại không tồn tại!!")
      }
    } catch (e) {
      errorHandler(e)
    }
  }

  return (
    <>
      <div className='row'>
        <div className="col-12">
          <SectionTitle title='Mã Khuyến mãi / Mã quà tặng' />
          <div className="section-container p-4">
            <div className={styles.voucherInsertContent}>
              <div className={`${styles.inputGroup} mb-3`}>
                <input
                  type="text"
                  value={inputCodeValue}
                  onChange={(e) => setInputCodeValue(e.target.value)}
                  className={`${styles.formControl} p-2`}
                  placeholder="Coupon Code"
                />
                <div className='d-flex align-items-center justify-content-between'>
                  <button
                    className="btn btn-primary h-100"
                    onClick={handleApplyCoupon}
                    disabled={inputCodeValue === ''}
                  >
                    Apply Coupon
                  </button>
                  <SelectVoucherModal
                    voucherList={voucherList}
                    selectedVoucher={selectedVoucher}
                    setSelectedVoucher={setSelectedVoucher}
                  />
                </div>
              </div>
              {selectedVoucher && (
                <div className={styles.voucherChoosenList}>
                  <VoucherChosenAlert
                    selectedVoucher={selectedVoucher}
                    setSelectedVoucher={setSelectedVoucher}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddVoucher
