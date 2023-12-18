"use client"
import React, { useEffect } from 'react'
import styles from './SortSideBar.module.scss'
import CheckboxPrice from './CheckboxPrice/CheckboxPrice'
import CheckBoxLanguage from './CheckBoxLanguage/CheckBoxLanguage'
import CheckBoxForm from './CheckBoxForm/CheckBoxForm'
import { IBookFilter } from '../../../../types/IBookFilter'
import CheckBoxPublisher from './CheckBoxPublisher/CheckBoxPublisher'
import CheckBoxAuthor from './CheckBoxAuthor/CheckBoxAuthor'
import CheckBoxProvider from './CheckBoxProvider/CheckBoxProvider'

interface ISortSideBarAllProps {
    filters: IBookFilter
    setFilters: React.Dispatch<React.SetStateAction<IBookFilter>>
}
const SortSideBarAll = (props: ISortSideBarAllProps) => {
    const { filters, setFilters } = props

    return (
        <>
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

export default SortSideBarAll
