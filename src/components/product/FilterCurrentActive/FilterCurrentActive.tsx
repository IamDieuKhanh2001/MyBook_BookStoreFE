'use client'
import React from 'react'
import styles from './FilterCurrentActive.module.scss'
import { IBookFilter } from '../../../../types/IBookFilter'
import { useDispatch } from 'react-redux'
import { productActions } from '@/redux/slices/ProductSlice'

interface IFilterCurrentActiveProps {
    filters: IBookFilter
    setFilters: React.Dispatch<React.SetStateAction<IBookFilter>>
}
const FilterCurrentActive = (props: IFilterCurrentActiveProps) => {
    const dispatch = useDispatch();
    const { filters, setFilters } = props
    const {
        limit,
        search,
        minPrice,
        maxPrice,
        orderBy,
        language,
        author,
        bookForm,
        ccategory,
        provider,
        publisher,
    } = filters

    const handleChangeFilterValue = (filterName: string, value: any) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: value,
        }));
    }

    const handleResetFilter = () => {
        setFilters({
            limit: '5',
            search: '',
            minPrice: '',
            maxPrice: '',
            orderBy: 'price,desc',
            language: null,
            author: null,
            ccategory: null,
            publisher: null,
            provider: null,
            bookForm: null,
        })
        dispatch(productActions.updateKeyword(''));
    }

    //Item active filter must be render
    const shouldRenderCurrentActive = (
        search ||
        minPrice ||
        maxPrice ||
        language ||
        author ||
        bookForm ||
        provider ||
        publisher
    );
    return (
        <>
            {shouldRenderCurrentActive &&
                <div className={styles.filterCurrent}>
                    <div className={styles.filterHeader}>
                        Lọc theo:
                    </div>
                    <div className={styles.displayFilterCurrent}>
                        {search && (
                            <div className={`${styles.filterItem} me-1 alert alert-warning alert-dismissible fade show`} role="alert">
                                <p>Từ khóa: {search}</p>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => {
                                        handleChangeFilterValue('search', '')
                                        dispatch(productActions.updateKeyword(''));
                                    }}
                                />
                            </div>
                        )}
                        {minPrice && (
                            <div className={`${styles.filterItem} me-1 alert alert-warning alert-dismissible fade show`} role="alert">
                                <p>
                                    Giá:
                                    {minPrice}-{maxPrice !== '' ? maxPrice : 'Trở lên'}
                                </p>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => {
                                        handleChangeFilterValue('minPrice', '')
                                        handleChangeFilterValue('maxPrice', '')
                                    }}
                                />
                            </div>
                        )}
                        {language && (
                            <div className={`${styles.filterItem} me-1 alert alert-warning alert-dismissible fade show`} role="alert">
                                <p>Ngôn ngữ: {language.language_name}</p>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => handleChangeFilterValue('language', null)}
                                />
                            </div>
                        )}
                        {bookForm && (
                            <div className={`${styles.filterItem} me-1 alert alert-warning alert-dismissible fade show`} role="alert">
                                <p>Hình thức: {bookForm.name}</p>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => handleChangeFilterValue('bookForm', null)}
                                />
                            </div>
                        )}
                        {publisher && (
                            <div className={`${styles.filterItem} me-1 alert alert-warning alert-dismissible fade show`} role="alert">
                                <p>Nhà xuất bản: {publisher.name}</p>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => handleChangeFilterValue('publisher', null)}
                                />
                            </div>
                        )}
                        {author && (
                            <div className={`${styles.filterItem} me-1 alert alert-warning alert-dismissible fade show`} role="alert">
                                <p>Tác giả: {author.author_name}</p>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => handleChangeFilterValue('author', null)}
                                />
                            </div>
                        )}
                        {provider && (
                            <div className={`${styles.filterItem} me-1 alert alert-warning alert-dismissible fade show`} role="alert">
                                <p>Nhà cung cấp: {provider.name}</p>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => handleChangeFilterValue('provider', null)}
                                />
                            </div>
                        )}
                        <button
                            type="button"
                            className={`${styles.dismissAllFilter} btn btn-outline-warning`}
                            onClick={handleResetFilter}
                        >
                            Xóa tất cả bộ lọc
                        </button>
                    </div>
                </div>
            }
        </>
    )
}

export default FilterCurrentActive
