import React from 'react'
import styles from './TopBanner.module.scss'
import Carousel from './Carousel/Carousel'
import Link from 'next/link'
import EventBanner from './EventBanner/EventBanner'

const TopBanner = () => {
    return (
        <div className="container-xxl">
            <div className={`${styles.topBanner}`}>
                <Carousel />
                <div className={styles.topBannerRight}>
                    <div className={styles.topBannerRightItem}>
                        <Link className={styles.itemImgLink} href="#">
                            <img className={styles.itemImg} src="/img/banner/banner_event1.png" />
                        </Link>
                    </div>
                    <div className={styles.topBannerRightItem}>
                        <Link className={styles.itemImgLink} href="#">
                            <img className={styles.itemImg} src="/img/banner/banner_event2.png" />
                        </Link>
                    </div>
                </div>
            </div>
            <EventBanner />
        </div>

    )
}

export default TopBanner
