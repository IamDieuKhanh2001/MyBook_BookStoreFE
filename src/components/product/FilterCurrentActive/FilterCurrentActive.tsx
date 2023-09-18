'use client'
import React from 'react'
import styles from './FilterCurrentActive.module.scss'
import Link from 'next/link'

const FilterCurrentActive = () => {
    return (
        <>
            <div className={styles.filterCurrent}>
                <div className={styles.filterHeader}>
                    Lọc theo:
                </div>
                <div className={styles.displayFilterCurrent}>
                    <div className={`${styles.filterItem} me-1 alert alert-warning alert-dismissible fade show`} role="alert">
                        <p>Gender: Comedy</p>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                    </div>
                    <>
                        <div className={`${styles.filterItem} me-1 alert alert-warning alert-dismissible fade show`} role="alert">
                            <p>Gender: Comedy</p>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                        </div>
                        <div className={`${styles.filterItem} me-1 alert alert-warning alert-dismissible fade show`} role="alert">
                            <p>Gender: Comedysssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                        </div>
                        <div className={`${styles.filterItem} me-1 alert alert-warning alert-dismissible fade show`} role="alert">
                            <p>Gender: Comedy</p>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                        </div>
                        <div className={`${styles.filterItem} me-1 alert alert-warning alert-dismissible fade show`} role="alert">
                            <p>Gender: Comedy</p>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                        </div>
                        <div className={`${styles.filterItem} me-1 alert alert-warning alert-dismissible fade show`} role="alert">
                            <p>Gender: Comedy</p>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                        </div>
                        <div className={`${styles.filterItem} me-1 alert alert-warning alert-dismissible fade show`} role="alert">
                            <p>Gender: Comedy</p>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                        </div>
                    </>
                </div>
            </div>
        </>
    )
}

export default FilterCurrentActive
