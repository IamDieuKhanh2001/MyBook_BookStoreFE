import React from 'react'
import styles from './TopBar.module.scss'

const TopBar = () => {
    return (
        <div className={`${styles.topBar} row gx-0 align-items-center d-none d-lg-flex`}>
            <div className="col-lg-6 px-5 text-start">
                <small>
                    <i className="fa fa-map-marker-alt me-2" />
                    1 Vo Van Ngan Street, Ho Chi Minh City, Viet Nam
                </small>
                <small className="ms-4">
                    <i className="fa fa-envelope me-2" />
                    mybook@gmail.com
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

    )
}

export default TopBar
