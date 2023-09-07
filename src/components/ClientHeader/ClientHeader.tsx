
import React from 'react'
import styles from './ClientHeader.module.scss'

interface ClientHeaderProps {
    // Các props nếu có
  }
const ClientHeader: React.FC<ClientHeaderProps> = () => {
    return (
        <>
            {/* Page Header Start */}
            <div className={`${styles.pageHeader} container-fluid wow fadeIn`} data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="display-3 mb-3 animated slideInDown">Page name</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className={`${styles.breadcrumbItem} breadcrumb-item`}><a className="text-body" href="#">Home</a></li>
                            <li className={`${styles.breadcrumbItem} breadcrumb-item`}><a className="text-body" href="#">Pages</a></li>
                            <li className={`${styles.breadcrumbItem} breadcrumb-item text-dark active`} aria-current="page">404 Error</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
        </>
    )
}

export default ClientHeader
