"use client"
import React from 'react'

const SortBar = () => {
    return (
        <>
            <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                    <li className="nav-item me-2">
                        <a className="btn btn-outline-primary border-2 active" data-bs-toggle="pill" href="#tab-1">
                            Best seller 
                        </a>
                    </li>
                    <li className="nav-item me-2">
                        <a className="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-2">
                            Sale
                        </a>
                    </li>
                    <li className="nav-item me-0">
                        <a className="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-3">
                            Released recently
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SortBar
