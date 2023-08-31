"use client"
import Link from 'next/link'
import React from 'react'

function ClientNavBar() {
    return (
        <>
            {/* Navbar Start */}
            <div
                className="container-fluid fixed-top px-0 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
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
                    className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn"
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
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto p-4 p-lg-0">
                            <Link href="index.html" className="nav-item nav-link active">
                                Home
                            </Link>
                            <Link href="about.html" className="nav-item nav-link">
                                About Us
                            </Link>
                            <Link href="product.html" className="nav-item nav-link">
                                Products
                            </Link>
                            <div className="nav-item dropdown">
                                <a
                                    href="#"
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    Pages
                                </a>
                                <div className="dropdown-menu m-0">
                                    <Link href="blog.html" className="dropdown-item">
                                        Blog Grid
                                    </Link>
                                    <Link href="feature.html" className="dropdown-item">
                                        Our Features
                                    </Link>
                                    <Link href="testimonial.html" className="dropdown-item">
                                        Testimonial
                                    </Link>
                                    <Link href="/404" className='dropdown-item'>
                                        404 Page
                                    </Link>
                                </div>
                            </div>
                            <Link href="contact.html" className="nav-item nav-link">
                                Contact Us
                            </Link>
                        </div>
                        <div className="d-none d-lg-flex ms-2">
                            <Link className="btn-sm-square bg-white rounded-circle ms-3" href="">
                                <small className="fa fa-search text-body" />
                            </Link>
                            <Link className="btn-sm-square bg-white rounded-circle ms-3" href="">
                                <small className="fa fa-user text-body" />
                            </Link>
                            <Link className="btn-sm-square bg-white rounded-circle ms-3" href="">
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