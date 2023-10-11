import React from 'react'
import styles from './ReviewItem.module.scss'

const ReviewItem = () => {
    return (
        <>
            <div className={`${styles.media} mb-1`}>
                <img
                    src="/img/avatar/default.png"
                    alt="Image"
                    className="img-fluid mr-3 mt-1 rounded-circle"
                    style={{ width: 45 }}
                />
                <div className={`${styles.mediaBody}`}>
                    <h6>
                        John
                        <small>
                            {" "}
                            - <i>01 Jan 2045</i>
                        </small>
                    </h6>
                    <div className="text-primary mb-2">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                    </div>
                    <p>
                        Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam
                        ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod
                        ipsum.
                    </p>
                </div>
            </div>
        </>
    )
}

export default ReviewItem
