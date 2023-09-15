"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.scss'
import Link from 'next/link'

const CheckOutPage = () => {
  const [selectedAddressId, setSelectedAddressId] = useState(1)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('paypal')

  const handleRadioChange = (event: any) => {
    setSelectedAddressId(event.target.value);
  };

  useEffect(() => {
    console.log(selectedAddressId)
  }, [selectedAddressId])

  return (
    <>
        <div className='container'>
          {/* dia chi  */}
          <div className="row">
            <div className="col-12">
              {/* tach component title section  */}
              <h5 className={`${styles.sectionTitle} position-relative text-uppercase my-3`}>
                <span className="bg-white pe-3">Địa chỉ giao hàng</span>
              </h5>
              <div className="bg-light p-4">
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
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                      </div>
                      <div className="modal-body">
                        ...
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* tach component radio dia chi  */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="1"
                    value={1}
                    defaultChecked={selectedAddressId === 1}
                    name='radioAddress'
                    onChange={handleRadioChange}
                  />
                  <div className='d-flex justify-content-between'>
                    <label className="form-check-label" htmlFor="1">
                      Quach Khanh | 12/6/8 Hoang Hoa Tham, Phường 07, Quận Bình Thạnh, Hồ Chí Minh, VN | 0938427896
                    </label>
                    <div className='d-flex'>
                      <span className={styles.editAddress}>Sửa</span>
                      <span className={styles.deleteAddress}>Xóa</span>
                    </div>
                  </div>
                </div>
                {/* tach component radio dia chi  */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="2"
                    value={2}
                    defaultChecked={selectedAddressId === 2}
                    name='radioAddress'
                    onChange={handleRadioChange}
                  />
                  <div className='d-flex justify-content-between'>
                    <label className="form-check-label" htmlFor="1">
                      Quach Khanh | 12/6/8 Hoang Hoa Tham, Phường 07, Quận Bình Thạnh, Hồ Chí Minh, VN | 0938427896
                    </label>
                    <div className='d-flex'>
                      <span className={styles.editAddress}>Sửa</span>
                      <span className={styles.deleteAddress}>Xóa</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Phuong thuc thanh toan  */}
          <div className="row">
            <div className="col-12">
              <h5 className={`${styles.sectionTitle} position-relative text-uppercase my-3`}>
                <span className="bg-white pe-3">Phương thức thanh toán</span>
              </h5>
              <div className="bg-light p-4">
                <div className="form-check py-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="payment-method-1"
                    value={1}
                    defaultChecked={true}
                    name='radioPaymentMethod'
                  // onChange={handleRadioChange}
                  />
                  <div className={styles.paymentNameWithIconContainer}>
                    <div
                      style={{
                        backgroundImage: 'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_airpay.svg?q=102513")',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                      }}
                      className={styles.paymentIcon}
                    ></div>
                    <label className={`${styles.paymentName} form-check-label`} htmlFor="payment-method-1">
                      MoMo
                    </label>
                  </div>
                </div>
                <div className="form-check py-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="payment-method-2"
                    value={1}
                    defaultChecked={false}
                    name='radioPaymentMethod'
                  // onChange={handleRadioChange}
                  />
                  <div className={styles.paymentNameWithIconContainer}>
                    <div
                      style={{
                        backgroundImage: 'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_momopay.svg?q=102513")',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                      }}
                      className={styles.paymentIcon}
                    ></div>
                    <label className={`${styles.paymentName} form-check-label`} htmlFor="payment-method-2">
                      MoMo
                    </label>
                  </div>
                </div>
                <div className="form-check py-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="payment-method-3"
                    value={1}
                    defaultChecked={false}
                    name='radioPaymentMethod'
                  // onChange={handleRadioChange}
                  />
                  <div className={styles.paymentNameWithIconContainer}>
                    <div
                      style={{
                        backgroundImage: 'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_airpay.svg?q=102513")',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                      }}
                      className={styles.paymentIcon}
                    ></div>
                    <label className={`${styles.paymentName} form-check-label`} htmlFor="payment-method-3">
                      MoMo
                    </label>
                  </div>
                </div>
                <div className="form-check py-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="payment-method-4"
                    value={1}
                    defaultChecked={false}
                    name='radioPaymentMethod'
                  // onChange={handleRadioChange}
                  />
                  <div className={styles.paymentNameWithIconContainer}>
                    <div
                      style={{
                        backgroundImage: 'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_cashondelivery.svg?q=102513")',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                      }}
                      className={styles.paymentIcon}
                    ></div>
                    <label className={`${styles.paymentName} form-check-label`} htmlFor="payment-method-4">
                      Thanh toán bằng tiền mặt khi nhận hàng
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mã quà tặng  */}
          <div className='row'>
            <div className="col-12">
              <h5 className={`${styles.sectionTitle} position-relative text-uppercase my-3`}>
                <span className="bg-white pe-3">Mã Khuyến mãi / Mã quà tặng</span>
              </h5>
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
          {/* Kiểm tra lại đơn hàng  */}
          <div className='row'>
            <div className="col-12">
              <h5 className={`${styles.sectionTitle} position-relative text-uppercase my-3`}>
                <span className="bg-white pe-3">Kiểm tra lại đơn hàng</span>
              </h5>
              <div className="bg-light p-4">
                <div className={styles.checkoutProductContent}>
                  <div className={styles.checkoutProductItem}>
                    <div className={styles.checkoutProductItemImg}>
                      <img src="/img/book/sach1.jpg" alt="sach1" />
                    </div>
                    <div className={styles.checkoutProductItemDetail}>
                      <div className={styles.checkoutProductItemName}>
                        <div>BlueLock - Tập 13 - Tặng Kèm Card PVC</div>
                      </div>
                      <div className={styles.checkoutProductItemPrice}>
                        <div>
                          31.500 VND
                        </div>
                        <div className={styles.checkoutProductItemOriginalPrice}>
                          35.000 VND
                        </div>
                      </div>
                      <div className={styles.checkoutProductItemQty}>
                        <span>Số lượng: </span>
                        1
                      </div>
                      <div className={styles.checkoutProductItemTotal}>
                        31.500 VND
                      </div>
                    </div>
                  </div>
                  <div className={styles.checkoutProductItem}>
                    <div className={styles.checkoutProductItemImg}>
                      <img src="/img/book/sach1.jpg" alt="sach1" />
                    </div>
                    <div className={styles.checkoutProductItemDetail}>
                      <div className={styles.checkoutProductItemName}>
                        <div>BlueLock - Tập 13 - Tặng Kèm Card PVC</div>
                      </div>
                      <div className={styles.checkoutProductItemPrice}>
                        <div>
                          31.500 VND
                        </div>
                        <div className={styles.checkoutProductItemOriginalPrice}>
                          35.000 VND
                        </div>
                      </div>
                      <div className={styles.checkoutProductItemQty}>
                        <span>Số lượng: </span>
                        1
                      </div>
                      <div className={styles.checkoutProductItemTotal}>
                        31.500 VND
                      </div>
                    </div>
                  </div>
                  <div className={styles.checkoutProductItem}>
                    <div className={styles.checkoutProductItemImg}>
                      <img src="/img/book/sach1.jpg" alt="sach1" />
                    </div>
                    <div className={styles.checkoutProductItemDetail}>
                      <div className={styles.checkoutProductItemName}>
                        <div>BlueLock - Tập 13 - Tặng Kèm Card PVC</div>
                      </div>
                      <div className={styles.checkoutProductItemPrice}>
                        <div>
                          31.500 VND
                        </div>
                        <div className={styles.checkoutProductItemOriginalPrice}>
                          35.000 VND
                        </div>
                      </div>
                      <div className={styles.checkoutProductItemQty}>
                        <span>Số lượng: </span>
                        1
                      </div>
                      <div className={styles.checkoutProductItemTotal}>
                        31.500 VND
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*component check out side bar bottom  */}
        <div className={styles.bsidebar}>
          <div className={styles.bsidebarContent}>
            <div className='container'>
              <div className={styles.checkoutTotal}>
                <div className={styles.totalAndSubTotal}>
                  <div>
                    Thành tiền
                  </div>
                  <div>
                    500.000 VND
                  </div>
                </div>
                <div className={styles.totalShiping}>
                  <div>
                    Phí vận chuyển (Giao hàng tiêu chuẩn)
                  </div>
                  <div>
                    19.000 VND
                  </div>
                </div>
                <div className={styles.grandTotal}>
                  <div>
                    Tổng Số Tiền (gồm VAT)
                  </div>
                  <div>
                    519.000 VND
                  </div>
                </div>
              </div>
              <div className={styles.checkoutBottom}>
                <div>
                  <Link className={styles.backToCart} href="/cart">
                    <i className="fas fa-chevron-left"></i>
                    Quay về giỏ hàng
                  </Link>
                </div>
                <div className={styles.btnAcceptPayContainer}>
                  <button type="button" className={`${styles.btnAcceptPayment} btn btn-danger`}>Xác nhận thanh toán</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default CheckOutPage
