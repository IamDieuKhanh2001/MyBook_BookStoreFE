'use client'
import React from 'react'
import styles from './SearchFormSuggestion.module.scss'
import Link from 'next/link'
import { truncateText } from '@/lib/utils/TextUtils'

const SearchFormSuggestion = () => {
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
                    <Link href={'/'} className={styles.productSuggestItem}>
                        <img
                            src='/img/book/sach1.jpg'
                            alt='aaa'
                        />
                        <div className={styles.ItemContent}>
                            {truncateText('toansssssssssss', 15)}
                        </div>
                    </Link>
                    <Link href={'/'} className={styles.productSuggestItem}>
                        <img
                            src='/img/book/no-image.jpg'
                            alt='aaa'
                        />
                        <div className={styles.ItemContent}>
                            {truncateText('toansssssssssss', 15)}
                        </div>
                    </Link>
                    <Link href={'/'} className={styles.productSuggestItem}>
                        <img
                            src='https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_47708.jpg'
                            alt='aaa'
                        />
                        <div className={styles.ItemContent}>
                            {truncateText('toansssssssssss', 15)}
                        </div>
                    </Link>
                    <Link href={'/'} className={styles.productSuggestItem}>
                        <img
                            src='https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_47708.jpg'
                            alt='aaa'
                        />
                        <div className={styles.ItemContent}>
                            {truncateText('toansssssssssss', 15)}
                        </div>
                    </Link>
                    <Link href={'/'} className={styles.productSuggestItem}>
                        <img
                            src='https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_47708.jpg'
                            alt='aaa'
                        />
                        <div className={styles.ItemContent}>
                            {truncateText('toansssssssssss', 15)}
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SearchFormSuggestion
