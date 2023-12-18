"use client"
import React from 'react'
import styles from './SortSideBarCategory.module.scss'
import Link from 'next/link'
import { IBookFilter } from '../../../../types/IBookFilter'
import CheckboxPrice from './CheckboxPrice/CheckboxPrice'
import CheckBoxLanguage from './CheckBoxLanguage/CheckBoxLanguage'
import CheckBoxForm from './CheckBoxForm/CheckBoxForm'
import CheckBoxPublisher from './CheckBoxPublisher/CheckBoxPublisher'
import CheckBoxAuthor from './CheckBoxAuthor/CheckBoxAuthor'
import CheckBoxProvider from './CheckBoxProvider/CheckBoxProvider'
import CategoryList from './CategoryList/CategoryList'

interface ISortSideBarCategoryProps {
    filters: IBookFilter
    setFilters: React.Dispatch<React.SetStateAction<IBookFilter>>
}
const SortSideBarCategory = (props: ISortSideBarCategoryProps) => {
    const { filters, setFilters } = props


    return (
        <>
            <CategoryList
                filters={filters}
                setFilters={setFilters}
            />
            <CheckboxPrice
                filters={filters}
                setFilters={setFilters}
            />
            <CheckBoxLanguage
                filters={filters}
                setFilters={setFilters}
            />
            <CheckBoxForm
                filters={filters}
                setFilters={setFilters}
            />
            <CheckBoxPublisher
                filters={filters}
                setFilters={setFilters}
            />
            <CheckBoxAuthor
                filters={filters}
                setFilters={setFilters}
            />
            <CheckBoxProvider
                filters={filters}
                setFilters={setFilters}
            />
        </>
    )
}

export default SortSideBarCategory
