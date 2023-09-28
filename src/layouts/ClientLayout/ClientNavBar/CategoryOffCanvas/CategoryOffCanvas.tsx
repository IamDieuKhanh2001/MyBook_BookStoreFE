"use client"
import Link from 'next/link'
import React from 'react'

const CategoryOffCanvas = () => {
    return (
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Thể loại</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body p-0">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Văn học
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                    >
                        <div className="accordion-body">
                            <ul className="list-group">
                                <li className="list-group-item border-0 d-flex justify-content-between align-items-center">
                                    <Link href={'#'} className='text-dark'>Tiểu thuyết</Link>
                                    <span className="badge bg-primary rounded-pill">14</span>
                                </li>
                                <li className="list-group-item border-0 d-flex justify-content-between align-items-center">
                                    <Link href={'#'} className='text-dark'>Truyện ngắn</Link>
                                    <span className="badge bg-primary rounded-pill">2</span>
                                </li>
                                <li className="list-group-item border-0 d-flex justify-content-between align-items-center">
                                    <Link href={'#'} className='text-dark'>Ngôn tình</Link>
                                    <span className="badge bg-primary rounded-pill">1</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            though the transition does limit
                            overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Accordion Item #3
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            though the transition does limit
                            overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryOffCanvas
