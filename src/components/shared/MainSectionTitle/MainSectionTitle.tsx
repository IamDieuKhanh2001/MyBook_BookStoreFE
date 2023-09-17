import React from 'react'
import styles from './MainSectionTitle.module.scss'

interface MainSectionTitleProps {
    title: string
    shortDescription?: string
}
const MainSectionTitle = (props: MainSectionTitleProps) => {
    const { title, shortDescription } = props
    return (
        <>
            <div className="row g-0 gx-5 align-items-end">
                <div className="col-lg-6">
                    <div className="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                        <h1 className="display-6 mb-3">{title}</h1>
                        {shortDescription !== undefined ? (
                            <p>{shortDescription}</p>
                        ) : (<></>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainSectionTitle
