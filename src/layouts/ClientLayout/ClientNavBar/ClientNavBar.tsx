
import Link from 'next/link'
import React from 'react'
import styles from './ClientNavBar.module.scss'
import CategoryOffCanvas from './CategoryOffCanvas/CategoryOffCanvas';
import {
    IconCategory,
} from '@tabler/icons-react';
import TopBar from './TopBar/TopBar';
import CartDropdown from './CartDropdown/CartDropdown';
import UserDropdown from './UserDropdown/UserDropdown';
import SearchBarInput from './SearchBarInput/SearchBarInput';
import { useSession } from 'next-auth/react';

function ClientNavBar() {
    const { data: session } = useSession();

    return (
        <>
            {/* Navbar Start */}
            <div
                className={`${styles.fixedTop} container-fluid px-0 wow fadeIn fixed-top`}
                data-wow-delay="0.1s"
            >
                <TopBar />
                <nav
                    className={`${styles.navbar} navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn`}
                    data-wow-delay="0.1s"
                >
                    <Link href="/" className="navbar-brand ms-4 ms-lg-0">
                        <h1 className="fw-bold text-primary m-0">
                            M<span className="text-secondary">y</span>Bo<span className="text-secondary">ok</span>
                        </h1>
                    </Link>
                    <button
                        type="button"
                        className="navbar-toggler me-4"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse h-100" id="navbarCollapse">
                        <div className={`${styles.navbarNav} navbar-nav ms-auto p-4 p-lg-0 align-items-lg-center`}>
                            <Link href={"#"} className={`${styles.navLink} ${styles.navItem} nav-item nav-link`} data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                <IconCategory />
                            </Link>
                            <CategoryOffCanvas />
                            <Link href="/product/searchengine" className={`${styles.navLink} ${styles.navItem} nav-item nav-link`}>
                                Sản phẩm
                            </Link>
                            <div className={`${styles.navItem} nav-item dropdown`}>
                                <Link
                                    href="#"
                                    className={`${styles.dropdownToggle} ${styles.navLink} nav-link dropdown-toggle`}
                                    data-bs-toggle="dropdown"
                                >
                                    Pages
                                </Link>
                                <div className={`${styles.dropdownMenu} dropdown-menu m-0`}>
                                    <Link href="/account" className='dropdown-item'>
                                        Account
                                    </Link>
                                    <Link href="/account/address" className='dropdown-item'>
                                        Address CRUD
                                    </Link>
                                    <Link href="/cart" className='dropdown-item'>
                                        cart
                                    </Link>
                                    <Link href="/checkout" className='dropdown-item'>
                                        checkout
                                    </Link>
                                    <Link href="/404-error" className='dropdown-item'>
                                        404 Page
                                    </Link>
                                </div>
                            </div>
                            <SearchBarInput />
                            {session && (
                                <>
                                    <CartDropdown />
                                </>
                            )}
                            <UserDropdown />
                        </div>
                    </div>
                </nav>
            </div>
            {/* Navbar End */}
        </>
    )
}

export default ClientNavBar