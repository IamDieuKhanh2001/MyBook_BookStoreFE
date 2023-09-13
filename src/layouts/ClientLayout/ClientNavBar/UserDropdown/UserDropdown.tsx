"use client"
import Link from 'next/link'
import React from 'react'
import styles from './UserDropdown.module.scss'

const UserDropdown = () => {
    return (
        <>
            {/* <div className={`${styles.navItem} dropdown`}>
                <Link data-bs-toggle="dropdown" className={`${styles.dropdownToggle} nav-link dropdown-toggle btn-sm-square ms-3`} href="">
                    <small className="fa fa-user text-body" />
                </Link>
                <div className={`${styles.dropdownMenu} dropdown-menu m-0`}>
                    <Link href="#" className="dropdown-item">
                        Login
                    </Link>
                    <Link href="#" className="dropdown-item">
                        Register
                    </Link>
                    <li><hr className="dropdown-divider" /></li>
                    <Link href="#" className="dropdown-item">
                        Logout
                    </Link>
                </div>
            </div> */}
            <div className={`${styles.navItem} dropdown`}>
                <Link data-bs-toggle="dropdown" className={`${styles.dropdownToggle} nav-link dropdown-toggle`} href="">
                    <img
                        src="/img/testimonial-2.jpg"
                        alt="avatar"
                        width={25}
                        height={25}
                        className={`${styles.avatar} rounded-circle img-fluid`}
                    />
                </Link>
                <div className={`${styles.dropdownMenu} dropdown-menu m-0`}>
                    <Link href="#" className="dropdown-item">
                        Profile
                    </Link>
                    <li><hr className="dropdown-divider" /></li>
                    <Link href="#" className="dropdown-item">
                        Logout
                    </Link>
                </div>
            </div>
        </>
    )
}

export default UserDropdown
