'use client'
import React, { useState, useEffect, useRef } from 'react'
import styles from './SearchBarInput.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '@/redux/slices/ProductSlice';
import { RootState } from '@/redux/store';
import { usePathname, useRouter } from 'next/navigation';
import SearchFormSuggestion from './SearchFormSuggestion/SearchFormSuggestion';
import { useMediaQuery } from '@mui/material';
import useAPIGuest from '@/lib/hooks/api/useAPIGuest';

const SearchBarInput = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    let currentPathname = usePathname();
    const searchKeyword = useSelector((state: RootState) => state.product.searchKeyword);
    const [keyword, SetKeyword] = useState<string>('')
    const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
    let timeout: NodeJS.Timeout | undefined;
    const [keywordRecommend, SetKeywordRecommend] = useState<string>('')
    const [showSuggestions, setShowSuggestions] = useState(false);

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

    const handleChangeKW = (e: any) => {
        SetKeyword(e.target.value)
        setShowSuggestions(keyword !== '');
        // Sử dụng setTimeout để trì hoãn việc gọi setSearch một giây sau khi người dùng nhập
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            SetKeywordRecommend(e.target.value)
        }, 1000);
    }

    // useEffect(() => {
    //     console.log('setShowSuggestions: ', showSuggestions);
    // }, [showSuggestions]);

    const { getBookSuggestion } = useAPIGuest()
    const { suggestData } = getBookSuggestion(keywordRecommend, '5')

    const handleHideSuggestion = () => {
         // hủy thành phần gợi ý từ khóa nếu người dùng nhấn bên ngoài component SearchFormSuggestion
        setShowSuggestions(false)
    }

    const handleShowSuggestion = () => {
        setShowSuggestions(true)
    }

    return (
        <>
            <div className={styles.searchContainer}>
                <div className={`d-flex  ${styles.searchField}`}>
                    <input
                        name={"searchField"}
                        className={`${styles.searchBarInput}`}
                        id="inputEmailAddress"
                        type="text"
                        value={keyword}
                        placeholder={"search"}
                        onChange={(e) => handleChangeKW(e)}
                        onKeyUp={handlePressEnter}
                    />
                    <button
                        className={`${styles.buttonSearch}`}
                        onClick={handleSearch}
                    >
                        <small className="fa fa-search text-body" />
                    </button>
                </div>
                {
                    lgUp && suggestData.length > 0 && showSuggestions &&
                    <SearchFormSuggestion
                        suggestData={suggestData}
                        handleHideSuggestion={handleHideSuggestion}
                    />
                }
            </div>
        </>
    )
}

export default SearchBarInput
