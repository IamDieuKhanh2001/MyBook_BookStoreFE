"use client"
import React, { useState } from 'react'
import styles from './Testimonial.module.scss'

//Customer review showcase
const Testimonial = () => {
    const [testimonialList, setTestimonialList] = useState([
        {
            customerName: 'Nguyen Van A',
            typeUser: 'VIP',
            avatar: "img/testimonial-1.jpg",
            content: 'Love it, will come back again',
        },
        {
            customerName: 'Nguyen Van B',
            typeUser: 'VIP',
            avatar: "img/testimonial-2.jpg",
            content: 'Love it, will come back again',
        },
        {
            customerName: 'Nguyen Van C',
            typeUser: 'VIP',
            avatar: "img/testimonial-3.jpg",
            content: 'Love it, will come back again',
        },
        {
            customerName: 'Nguyen Van D',
            typeUser: 'VIP',
            avatar: "img/testimonial-4.jpg",
            content: 'Love it, will come back again',
        },
    ])
    return (
        <>
            {/* Testimonial Start */}
            <div className="container-fluid bg-light bg-icon py-6 mb-5">
                <div className="container">
                    <div
                        className="section-header text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 500 }}
                    >
                        <h1 className="display-5 mb-3">Customer Review</h1>
                        <p>
                            Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo
                            sed rebum vero dolor duo.
                        </p>
                    </div>
                    <div
                        className="owl-carousel testimonial-carousel wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        {testimonialList?.map((item, index) => (
                            <div key={index} className="testimonial-item position-relative bg-white p-5 mt-4">
                            <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5" />
                            <p className="mb-4">
                                {item.content}
                            </p>
                            <div className="d-flex align-items-center">
                                <img
                                    className="flex-shrink-0 rounded-circle"
                                    src={item.avatar}
                                    alt={item.customerName}
                                />
                                <div className="ms-3">
                                    <h5 className="mb-1">{item.customerName}</h5>
                                    <span>{item.typeUser}</span>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Testimonial End */}
        </>
    )
}

export default Testimonial
