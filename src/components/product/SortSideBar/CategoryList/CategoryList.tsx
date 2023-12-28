'use client'
import Link from 'next/link'
import React from 'react'
import styles from './CategoryList.module.scss'
import { IBookFilter } from '../../../../../types/IBookFilter'
import useAPIGuest from '@/lib/hooks/api/useAPIGuest'
import LoadingFilter from '../LoadingFilter/LoadingFilter'

interface ICategoryListProps {
    filters: IBookFilter
    setFilters: React.Dispatch<React.SetStateAction<IBookFilter>>
}
const CategoryList = (props: ICategoryListProps) => {
    const { filters, setFilters } = props
    const { getParentCategoryDetail } = useAPIGuest()
    const { data, isLoading } = getParentCategoryDetail(filters.ccategory?.parent_category_id)

    return (
        <div>
            <h5 className="px-3 py-2 border-bottom">Danh mục</h5>
            <ul className={styles.categoryList}>
                {!isLoading ? (
                    <li>
                        <Link className={styles.categoryListItem} href="#">
                            {data?.name}
                        </Link>
                        <ul className={styles.subCategoryList}>
                            {data && data.childrenCategory?.map((ccategory: IChildCategory) => (
                                <li key={ccategory.id} className={styles.subCategoryListItem}>
                                    <Link
                                        className={ccategory.id === filters.ccategory?.id ? styles.active : ''}
                                        href={`/product/category/${ccategory.id}?ccategoryname=${ccategory.name}&pcategoryid=${ccategory.parent_category_id}`}
                                    >
                                        {ccategory.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ) : (
                    <LoadingFilter />
                )}
            </ul>
        </div>
    )
}

export default CategoryList
