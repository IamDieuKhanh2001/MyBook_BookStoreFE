'use client'
import React from 'react'
import styles from './FilterCurrentActive.module.scss'

interface IFilterCurrentActiveProps {
    filters: {
        limit: string;
        search: string;
        minPrice: string;
        maxPrice: string;
        orderBy: string;
        langId: string,
        authorId: string,
        ccategoryId: string,
        publisherId: string,
        providerId: string,
        bookFormId: string,
    }
    setFilters: React.Dispatch<React.SetStateAction<{
        limit: string;
        search: string;
        minPrice: string;
        maxPrice: string;
        orderBy: string;
        langId: string,
        authorId: string,
        ccategoryId: string,
        publisherId: string,
        providerId: string,
        bookFormId: string,
    }>>
}
const FilterCurrentActive = (props: IFilterCurrentActiveProps) => {
    const { filters, setFilters } = props
    const {
        limit,
        search,
        minPrice,
        maxPrice,
        orderBy,
        langId,
        authorId,
        ccategoryId,
        publisherId,
        providerId,
        bookFormId
    } = filters
    return (
        <>
            <div className={styles.filterCurrent}>
                <div className={styles.filterHeader}>
                    Lọc theo:
                </div>
                <div className={styles.displayFilterCurrent}>
                    {minPrice && maxPrice && (
                        <div className={`${styles.filterItem} me-1 alert alert-warning alert-dismissible fade show`} role="alert">
                            <p>Giá: {minPrice}-{maxPrice}</p>
                            <button type="button" className="btn-close" />
                        </div>
                    )}
                    <div className={`${styles.filterItem} me-1 alert alert-warning alert-dismissible fade show`} role="alert">
                        <p>150.000 - 300.000VND</p>
                        <button type="button" className="btn-close" />
                    </div>
                    <div className={`${styles.filterItem} me-1 alert alert-warning alert-dismissible fade show`} role="alert">
                        <p>Ngôn ngữ: Tiếng Anh</p>
                        <button type="button" className="btn-close" />
                    </div>
                    <button type="button" className={`${styles.dismissAllFilter} btn btn-outline-warning`}>
                        Xóa bộ lọc
                    </button>
                </div>
            </div>
        </>
    )
}

export default FilterCurrentActive
