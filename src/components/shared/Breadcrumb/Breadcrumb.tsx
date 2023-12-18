import React from 'react'
import styles from './Breadcrumb.module.scss'

const Breadcrumb = () => {
    return (
        <>
            <div className="container-xxl section-container">
                <div className='container'>
                    <div className="row">
                        <div className="col-12">
                            <nav className={`${styles.breadcrumb}`}>
                                <a className={`${styles.breadcrumbItem} text-dark`} href="#">Home</a>
                                <a className={`${styles.breadcrumbItem} text-dark`} href="#">Home</a>
                                <a className={`${styles.breadcrumbItem} text-dark`} href="#">Home</a>
                                <span className={`${styles.breadcrumbItem} ${styles.active}`}>Checkout</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb
