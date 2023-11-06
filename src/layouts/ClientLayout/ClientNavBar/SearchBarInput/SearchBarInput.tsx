'use client'
import React, { useState, useEffect } from 'react'
import styles from './SearchBarInput.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '@/redux/slices/ProductSlice';
import { RootState } from '@/redux/store';
import { usePathname, useRouter } from 'next/navigation';

const SearchBarInput = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    let currentPathname = usePathname();
    const searchKeyword = useSelector((state: RootState) => state.product.searchKeyword);
    const [keyword, SetKeyword] = useState<string>('')

    const handleSearch = () => {
        // Dispatch action để cập nhật trạng thái searchKeyword
        dispatch(productActions.updateKeyword(keyword));
        if (currentPathname === '/product/searchengine') {
            // in /product/searchengine , do nothing
            return
        } else {
            // Not in /product/searchengine , move to /product/searchengine
            router.push('/product/searchengine')
        }
    };

    const handlePressEnter = (event: any) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }
    useEffect(() => {
        SetKeyword(searchKeyword);
    }, [searchKeyword]);

    return (
        <>
            <div className={`d-flex  ${styles.searchField}`}>
                <input
                    name={"searchField"}
                    className={`${styles.searchBarInput}`}
                    id="inputEmailAddress"
                    type="text"
                    value={keyword}
                    placeholder={"search"}
                    onChange={(e) => SetKeyword(e.target.value)}
                    onKeyUp={handlePressEnter}
                />
                <button
                    className={`${styles.buttonSearch}`}
                    onClick={handleSearch}
                >
                    <small className="fa fa-search text-body" />
                </button>
            </div>
        </>
    )
}

export default SearchBarInput
