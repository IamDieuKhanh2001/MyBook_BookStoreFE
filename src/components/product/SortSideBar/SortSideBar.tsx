"use client"
import React from 'react'
import ProductList from '../ProductList/ProductList'

const SortSideBar = () => {
    return (
        <>
            <div>
                <h6 className="p-1 border-bottom">Danh mục</h6>
                <ul className='' style={{
                    listStyle: 'none',
                    padding: '5px',
                }}>
                    <li>
                        <a href="#" style={{
                            textDecoration: 'none',
                        }}>
                            item lv1
                        </a>
                        <ul className='' style={{
                            listStyle: 'none',
                            padding: '5px 10px'
                        }}>
                            <li>
                                <a href="#" style={{
                                    textDecoration: 'none',
                                }}>
                                    item lv2 1
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{
                                    textDecoration: 'none',
                                }}>
                                    item lv2 2
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" style={{
                            textDecoration: 'none',
                        }}>
                            item lv1
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h6 className="p-1 border-bottom">Giá</h6>
                <div style={{
                    padding: '5px',

                }}>
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
                    <a href="#" style={{
                        fontWeight: 'bold',
                        fontSize: '14px',
                        cursor: 'pointer',
                        color: '#F7941E',
                        display: 'none',
                    }}>
                        Show Less
                    </a>
                    <a href="#" style={{
                        fontWeight: 'bold',
                        fontSize: '14px',
                        cursor: 'pointer',
                        color: '#F7941E',
                        display: 'block',
                    }}>
                        Show More
                    </a>
                </div>
            </div>
            <div>
                <h6 className="p-1 border-bottom">Nhà cung cấp</h6>
                <div style={{
                    padding: '5px',

                }}>
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
