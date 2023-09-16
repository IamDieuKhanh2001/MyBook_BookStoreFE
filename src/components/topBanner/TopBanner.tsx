import React from 'react'
import styles from './TopBanner.module.scss'
import Carousel from '../home/Carousel/Carousel'
import Link from 'next/link'

const TopBanner = () => {
    return (
        <div className={`${styles.topBanner} container-xxl`}>
            <Carousel />
            <div className={styles.topBannerRight}>
                <div className={styles.topBannerRightItem}>
                    <Link href="#">
                        <img className={styles.itemImg} src="/img/banner/banner_event1.png" />
                    </Link>
                </div>
                <div className={styles.topBannerRightItem}>
                    <Link href="#">
                    <img className={styles.itemImg} src="/img/banner/banner_event2.png" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TopBanner
