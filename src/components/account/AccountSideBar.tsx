import React from 'react'

const AccountSideBar = () => {
  return (
    <div className="card mb-4 mb-md-0">
      <div className="card-body">
        <p className="mb-4">
          <span className="text-primary text-uppercase font-italic me-1">Tài khoản</span>
        </p>
        <ul className="list-group list-group-flush rounded-3">
          <li className="list-group-item d-flex justify-content-between align-items-center py-3">
            <i className="fas fa-info fa-lg" style={{ color: '#333333' }} />
            <a href='#' className="mb-0 text-dark">Thông tin tài khoản</a>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center py-3">
            <i className="fas fa-info fa-lg" style={{ color: '#333333' }} />
            <a href='#' className="mb-0 text-dark">Số địa chỉ</a>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center py-3">
            <i className="fas fa-info fa-lg" style={{ color: '#333333' }} />
            <a href='#' className="mb-0 text-dark">Đơn hàng của tôi</a>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center py-3">
            <i className="fas fa-info fa-lg" style={{ color: '#333333' }} />
            <a href='#' className="mb-0 text-dark">Ví voucher</a>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center py-3">
            <i className="fas fa-info fa-lg" style={{ color: '#333333' }} />
            <a href='#' className="mb-0 text-dark">Đăng kí nhận tin điện tử</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AccountSideBar
