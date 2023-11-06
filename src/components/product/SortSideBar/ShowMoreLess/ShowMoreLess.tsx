import React from 'react'
import styles from './ShowMoreLess.module.scss'

interface IShowMoreLessProps {
    isShowMore: boolean
    setIsShowMore: React.Dispatch<React.SetStateAction<boolean>>
}
const ShowMoreLess = (props: IShowMoreLessProps) => {
    const { isShowMore, setIsShowMore } = props

    return (
        <>
            <div className={styles.showMoreLessContainer}>
                <a
                    style={{
                        display: isShowMore ? 'block' : 'none',
                    }}
                    className={styles.showLessBtn}
                    onClick={() => setIsShowMore(false)}
                >
                    Rút gọn
                </a>
                <a
                    style={{
                        display: !isShowMore ? 'block' : 'none',
                    }}
                    className={styles.showMoreBtn}
                    onClick={() => setIsShowMore(true)}
                >
                    Xem thêm
                </a>
            </div>
        </>
    )
}

export default ShowMoreLess
