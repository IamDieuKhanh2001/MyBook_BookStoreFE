'use client'
import React from 'react'
import styles from './SearchBarInput.module.scss'

const SearchBarInput = () => {
    return (
        <>
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
        </>
    )
}

export default SearchBarInput
