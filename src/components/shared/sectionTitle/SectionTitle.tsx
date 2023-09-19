import React from 'react'
import styles from './SectionTitle.module.scss'

interface SectionTitleProps {
    title: string
}
const SectionTitle = ({title}: SectionTitleProps) => {
    return (
        <>
            <h5 className={`${styles.sectionTitle} position-relative text-uppercase my-3`}>
                <span className="pe-3">{title}</span>
            </h5>
        </>
    )
}

export default SectionTitle
