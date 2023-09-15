"use client"
import React from 'react'
import ProductList from '../ProductList/ProductList'
import styles from './SortSideBar.module.scss'
import Link from 'next/link'

const SortSideBar = () => {
    return (
        <>
            <div>
                <h6 className="p-1 border-bottom">Danh mục</h6>
                <ul className={styles.categoryList}>
                    <li>
                        <Link className={styles.categoryListItem} href="#">
                            item lv1
                        </Link>
                        <ul className={styles.subCategoryList}>
                            <li>
                                <Link className={styles.subCategoryListItem} href="#">
                                    item lv2 1
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.subCategoryListItem} href="#">
                                    item lv2 2
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className={styles.categoryListItem} href="#">
                            item lv1
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h6 className="p-1 border-bottom">Giá</h6>
                <div className='p-1'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            0 - 100.000VND
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="flexCheckChecked" defaultChecked />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            200.000 - 500.000VND
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
                <h6 className="p-1 border-bottom">Nhà cung cấp</h6>
                <div className='p-1'>
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
            </div>
        </>
    )
}

export default SortSideBar
