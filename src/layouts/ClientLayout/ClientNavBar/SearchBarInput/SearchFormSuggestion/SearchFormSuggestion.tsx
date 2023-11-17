'use client'
import React, { useEffect } from 'react'
import styles from './SearchFormSuggestion.module.scss'
import Link from 'next/link'
import { truncateText } from '@/lib/utils/TextUtils'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import useAPIGuest from '@/lib/hooks/api/useAPIGuest'
import { IBook } from '../../../../../../types/IBook'

interface ISearchFormSuggestionProps {
    suggestData: IBook[]
}
const SearchFormSuggestion = (props: ISearchFormSuggestionProps) => {
    const { suggestData = [] } = props

    const onImageError = (e: any) => {
        e.target.src = '/img/book/no-image.jpg'
    }

    return (
        <>
            <div className={styles.searchFormSuggestion}>
                <div className={styles.searchFormTitle}>
                    <div className={styles.centerLeft}>
                        <span>
                            <img src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/ico_searchtrending_black.svg" alt="trend" />
                        </span>
                        <span>Sản phẩm</span>
                    </div>
                </div>
                <div className={styles.productSuggestList}>
                    {suggestData.map((item, index) => (
                        <Link key={index} href={`/product/detail/${item.isbn_code}`} className={styles.productSuggestItem}>
                            <img
                                src={item.images[0].image_source}
                                alt='aaa'
                                onError={onImageError}
                            />
                            <div className={styles.ItemContent}>
                                {truncateText(item.name, 15)}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SearchFormSuggestion
