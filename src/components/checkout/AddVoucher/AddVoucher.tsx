'use client'
import React from 'react'
import styles from './AddVoucher.module.scss'
import SectionTitle from '@/components/shared/sectionTitle/SectionTitle'

const AddVoucher = () => {
  return (
    <>
      <div className='row'>
            <div className="col-12">
              <SectionTitle title='Mã Khuyến mãi / Mã quà tặng'/>
              <div className="bg-light p-4">
                <div className={styles.voucherInsertContent}>
                  <form className='mb-3' action="">
                    <div className={styles.inputGroup}>
                      <input
                        type="text"
                        className={`${styles.formControl} p-2`}
                        placeholder="Coupon Code"
                      />
                      <div className='d-flex'>
                        <button className="btn btn-primary">Apply Coupon</button>
                      </div>
                    </div>
                  </form>
                  <div className={styles.voucherChoosenList}>
                    <div className={`${styles.voucherChoosenItem} alert alert-warning alert-dismissible fade show`} role="alert">
                      <span className="text-truncate" style={{ maxWidth: 300 }}>
                        Nhập mã thành công - Mã giảm giá 10K TOÀN SÀN - Đơn hàng từ 150K
                      </span>
                      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
    </>
  )
}

export default AddVoucher
