"use client"
import React, { useEffect } from 'react'
import styles from './SortSideBar.module.scss'
import Link from 'next/link'
import CheckboxPrice from './CheckboxPrice/CheckboxPrice'
import CheckBoxLanguage from './CheckBoxLanguage/CheckBoxLanguage'
import CheckBoxForm from './CheckBoxForm/CheckBoxForm'
import { IBookFilter } from '../../../../types/IBookFilter'

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
            <div>
                <h5 className="px-3 py-2 border-bottom">Nhà cung cấp (Chưa map)</h5>
                <div className='py-2 px-3'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            nhà cc 1
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="flexCheckChecked" defaultChecked />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            nhà cc 2
                        </label>
                    </div>
                </div>
                <div className='moreLessToggle' style={{
                    display: 'flex',
                    height: '40px',
                    fontSize: '11px',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Link href="#" style={{
                        fontWeight: 'bold',
                        fontSize: '14px',
                        cursor: 'pointer',
                        color: '#F7941E',
                        display: 'none',
                    }}>
                        Show Less
                    </Link>
                    <Link href="#" style={{
                        fontWeight: 'bold',
                        fontSize: '14px',
                        cursor: 'pointer',
                        color: '#F7941E',
                        display: 'block',
                    }}>
                        Show More
                    </Link>
                </div>
            </div>
            <div>
                <h5 className="px-3 py-2 border-bottom">Tác giả (Chưa map)</h5>
                <div className='py-2 px-3'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            tg 1
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="flexCheckChecked" defaultChecked />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            tg 2
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SortSideBarAll
