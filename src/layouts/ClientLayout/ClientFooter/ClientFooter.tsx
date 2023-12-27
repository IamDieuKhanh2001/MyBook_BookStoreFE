import Link from 'next/link'
import React from 'react'
import styles from './ClientFooter.module.scss'

const ClientFooter = () => {
    return (
        <>
            {/* Footer Start */}
            <div className={`${styles.footer} container-fluid bg-dark mt-5 pt-5 wow fadeIn`} data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h1 className="fw-bold text-primary mb-4">
                                Sá<span className="text-secondary">ch</span>Vi<span className="text-secondary">ệt</span>
                            </h1>
                            <p>Hệ thống SachViet - Chuyên cung cấp sách online toàn quốc</p>
                            <div className="d-flex pt-2">
                                <a className={`btn btn-square btn-outline-light rounded-circle me-1`} href=""><i className="fab fa-twitter" /></a>
                                <a className={`btn btn-square btn-outline-light rounded-circle me-1`} href=""><i className="fab fa-facebook-f" /></a>
                                <a className={`btn btn-square btn-outline-light rounded-circle me-1`} href=""><i className="fab fa-youtube" /></a>
                                <a className={`btn btn-square btn-outline-light rounded-circle me-0`} href=""><i className="fab fa-linkedin-in" /></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Address</h4>
                            <p><i className="fa fa-map-marker-alt me-3" />1 Vo Van Ngan Street, Thu Duc, Ho Chi Minh City, Viet Nam</p>
                            <p><i className="fa fa-phone-alt me-3" />+84 334674390</p>
                            <p><i className="fa fa-phone-alt me-3" />+84 938427896</p>
                            <p><i className="fa fa-envelope me-3" />contact@sachviet.top</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Quick Links</h4>
                            <a className={`${styles.btnLinkFooterCustom} btn btn-link `} href="">About Us</a>
                            <a className={`${styles.btnLinkFooterCustom} btn btn-link`} href="">Contact Us</a>
                            <a className={`${styles.btnLinkFooterCustom} btn btn-link`} href="">Our Services</a>
                            <a className={`${styles.btnLinkFooterCustom} btn btn-link`} href="">Terms &amp; Condition</a>
                            <a className={`${styles.btnLinkFooterCustom} btn btn-link`} href="">Support</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Đăng ký tin mới</h4>
                            <p>Điền địa chỉ email của bạn bên dưới.</p>
                            <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`container-fluid ${styles.copyright}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                19110226 | <a href="#">Quách Diệu Khánh</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                19110304 | <a href="#">Nguyễn Thành Trung</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                © 2023 <a href="#">Sachviet.top</a>, All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                Khóa luận tốt nghiệp khóa 2019 | <a href="#">Đại Học Sư Phạm Kĩ Thuật</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
        </>
    )
}

export default ClientFooter
