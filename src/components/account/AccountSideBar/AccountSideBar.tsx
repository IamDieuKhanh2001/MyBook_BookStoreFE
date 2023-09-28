import Link from 'next/link'
import React from 'react'
import accountSideBarItems from './AccountSideBarItems'
import styles from './AccountSideBar.module.scss'

const AccountSideBar = () => {
  return (
    <div className="card mb-md-2">
      <div className="card-body">
        <p className="mb-4">
          <span className="text-primary text-uppercase font-italic me-1">Tài khoản</span>
        </p>
        <ul className="list-group list-group-flush rounded-3">
          {accountSideBarItems.map((item: any) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center py-3">
              {item.icon}
              <Link href={item.href} className="mb-0 text-dark">{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AccountSideBar
