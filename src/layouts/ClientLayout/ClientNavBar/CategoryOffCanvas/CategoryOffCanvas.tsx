"use client"
import useAPIGuest from '@/lib/hooks/api/useAPIGuest'
import Link from 'next/link'
import React from 'react'

const CategoryOffCanvas = () => {
    const { getCategoryList } = useAPIGuest()
    const { data } = getCategoryList()

    return (
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Thể loại</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body p-0">
                {data?.map((pcategory: IParentCategory) => (
                    <div className="accordion-item" key={pcategory.id}>
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse_pcid_${pcategory.id}`}
                                aria-expanded="true"
                                aria-controls={`collapse_pcid_${pcategory.id}`}
                            >
                                {pcategory.name} &nbsp;
                                <span className="badge bg-primary rounded-pill">
                                    {pcategory.childrenCategory.length}
                                </span>
                            </button>
                        </h2>
                        <div
                            id={`collapse_pcid_${pcategory.id}`}
                            className="accordion-collapse collapse"
                        >
                            <div className="accordion-body">
                                <ul className="list-group">
                                    {pcategory.childrenCategory.map((ccategory) => (
                                        <li key={ccategory.id} className="list-group-item border-0 d-flex justify-content-between align-items-center">
                                            <Link href={`/product/category/${ccategory.id}`} className='text-dark'>
                                                {ccategory.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default CategoryOffCanvas
