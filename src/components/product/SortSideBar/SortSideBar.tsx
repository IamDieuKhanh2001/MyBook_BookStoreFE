"use client"
import React from 'react'
import styles from './SortSideBar.module.scss'
import Link from 'next/link'

const SortSideBar = () => {
    return (
        <>
            <div>
                <h5 className="px-3 py-2 border-bottom">Danh mục</h5>
                <ul className={styles.categoryList}>
                    <li>
                        <Link className={styles.categoryListItem} href="#">
                            Văn học
                        </Link>
                        <ul className={styles.subCategoryList}>
                            <li>
                                <Link className={styles.subCategoryListItem} href="#">
                                    Truyện ngắn
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.subCategoryListItem} href="#">
                                    Ngôn tình
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div>
                    <h5 className="px-3 py-2 border-bottom">Giá</h5>
                    <div className='py-2 px-3'>
                        <div className="form-check mb-1">
                            <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                0 - 150.000VND
                            </label>
                        </div>
                        <div className="form-check mb-1">
                            <input className="form-check-input" type="checkbox" id="flexCheckChecked" defaultChecked />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                150.000 - 300.000VND
                            </label>
                        </div>
                        <div className="form-check mb-1">
                            <input className="form-check-input" type="checkbox" id="flexCheckChecked" defaultChecked />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                300.000 - 500.000VND
                            </label>
                        </div>
                        <div className="form-check mb-1">
                            <input className="form-check-input" type="checkbox" id="flexCheckChecked" defaultChecked />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                500.000 - 700.000VND
                            </label>
                        </div>
                        <div className="form-check mb-1">
                            <input className="form-check-input" type="checkbox" id="flexCheckChecked" defaultChecked />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                700.000 - trở lên
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className="px-3 py-2 border-bottom">Nhà cung cấp</h5>
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
                    <h5 className="px-3 py-2 border-bottom">Tác giả</h5>
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
                <div>
                    <h5 className="px-3 py-2 border-bottom">Ngôn ngữ</h5>
                    <div className='py-2 px-3'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Tiếng anh
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="flexCheckChecked" defaultChecked />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Tiếng nhật
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className="px-3 py-2 border-bottom">Hình thức</h5>
                    <div className='py-2 px-3'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Bộ hộp
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="flexCheckChecked" defaultChecked />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Bìa cứng
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SortSideBar
