import React from 'react'
import styles from './EventBanner.module.scss'
import Link from 'next/link'

const EventBanner = () => {
    return (
        <>
            <div className={styles.homeBanner}>
                <div className={`${styles.homeBannerItem} col-sm-3 col-md-3 col-xs-6`}>
                    <Link className={styles.homeBannerItemLink} href={'#'}>
                        <img src="/img/banner/small_banner1.png" alt="banner event" />
                    </Link>
                </div>
                <div className={`${styles.homeBannerItem} col-sm-3 col-md-3 col-xs-6`}>
                    <Link className={styles.homeBannerItemLink} href={'#'}>
                        <img src="/img/banner/small_banner1.png" alt="banner event" />
                    </Link>
                </div>
                <div className={`${styles.homeBannerItem} col-sm-3 col-md-3 col-xs-6`}>
                    <Link className={styles.homeBannerItemLink} href={'#'}>
                        <img src="/img/banner/small_banner1.png" alt="banner event" />
                    </Link>
                </div>
                <div className={`${styles.homeBannerItem} col-sm-3 col-md-3 col-xs-6`}>
                    <Link className={styles.homeBannerItemLink} href={'#'}>
                        <img src="/img/banner/small_banner1.png" alt="banner event" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default EventBanner
