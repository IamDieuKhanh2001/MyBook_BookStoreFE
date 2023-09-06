
import Link from 'next/link'
import React from 'react'
import styles from './ClientNavBar.module.scss'
import CategoryOffCanvas from './CategoryOffCanvas/CategoryOffCanvas';
import {
    IconCategory,
} from '@tabler/icons-react';

function ClientNavBar() {

    return (
        <>
            {/* Navbar Start */}
            <div
                className={`container-fluid px-0 wow fadeIn fixed-top`}
                data-wow-delay="0.1s"
            >
                <div className={`top-bar row gx-0 align-items-center d-none d-lg-flex`}>
                    <div className="col-lg-6 px-5 text-start">
                        <small>
                            <i className="fa fa-map-marker-alt me-2" />
                            123 Street, New York, USA
                        </small>
                        <small className="ms-4">
                            <i className="fa fa-envelope me-2" />
                            info@example.com
                        </small>
                    </div>
                    <div className="col-lg-6 px-5 text-end">
                        <small>Follow us:</small>
                        <a className="text-body ms-3" href="">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a className="text-body ms-3" href="">
                            <i className="fab fa-twitter" />
                        </a>
                        <a className="text-body ms-3" href="">
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a className="text-body ms-3" href="">
                            <i className="fab fa-instagram" />
                        </a>
                    </div>
                </div>
                <nav
                    className={`navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn`}
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
                        <div className="navbar-nav ms-auto p-4 p-lg-0 align-items-lg-center">
                            <Link href={"#"} className={`nav-item nav-link`} data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                <IconCategory />
                            </Link>
                            <CategoryOffCanvas />
                            <Link href="about.html" className="nav-item nav-link">
                                About Us
                            </Link>
                            <div className="nav-item dropdown">
                                <a
                                    href="#"
                                    className={`nav-link dropdown-toggle`}
                                    data-bs-toggle="dropdown"
                                >
                                    Pages
                                </a>
                                <div className="dropdown-menu m-0">
                                    <Link href="/product/detail" className="dropdown-item">
                                        product single
                                    </Link>
                                    <Link href="/product/all" className="dropdown-item">
                                        product list
                                    </Link>
                                    <Link href="/account" className='dropdown-item'>
                                        Account
                                    </Link>     
                                    <Link href="/account/address" className='dropdown-item'>
                                        Address CRUD
                                    </Link>
                                    <Link href="/404" className='dropdown-item'>
                                        404 Page
                                    </Link>
                                </div>
                            </div>
                            <div className={`d-flex  ${styles.searchField}`}>
                                <input
                                    name={"searchField"}
                                    className={`${styles.searchBarInput}`}
                                    id="inputEmailAddress"
                                    type="text"
                                    placeholder={"search"}
                                />
                                <button
                                    className={`${styles.buttonSearch}`}
                                >
                                    <small className="fa fa-search text-body" />
                                </button>
                            </div>
                            <div className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle btn-sm-square ms-3" href="">
                                    <small className="fa fa-user text-body" />
                                </Link>
                                <div className="dropdown-menu m-0">
                                    <Link href="" className="dropdown-item">
                                        Login
                                    </Link>
                                    <Link href="" className="dropdown-item">
                                        Register
                                    </Link>
                                    <li><hr className="dropdown-divider" /></li>
                                    <Link href="" className="dropdown-item">
                                        Logout
                                    </Link>
                                </div>
                            </div>
                            <Link className="btn-sm-square ms-3" href="">
                                <small className="fa fa-shopping-bag text-body" />
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
            {/* Navbar End */}
        </>
    )
}

export default ClientNavBar