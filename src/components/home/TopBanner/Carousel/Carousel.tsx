
import React from 'react'
import styles from './Carousel.module.scss'
import carouselItems from './CarouselItem'

const Carousel = () => {
    return (
        <>
            {/* Carousel Start */}
            <div className="wow fadeIn h-100" data-wow-delay="0.1s">
                <div id="header-carousel" className="carousel slide h-100" data-bs-ride="carousel">
                    <div className="carousel-inner h-100">
                        {carouselItems?.map((item, index) => (
                            <div
                                key={index}
                                className={`${styles.carouselItem} h-100 carousel-item ${index === 0 ? ' active' : ''}`}
                            >
                                <img className="w-100 h-100" src={item.imgUrl} alt="Image" />
                            </div>
                        ))}
                    </div>
                    <button className={`${styles.carouselControlPrev} carousel-control-prev`} type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                        <span className={`${styles.carouselControlPrevIcon} carousel-control-prev-icon`} aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className={`${styles.carouselControlNext} carousel-control-next`} type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                        <span className={`${styles.carouselControlNextIcon} carousel-control-next-icon`} aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* Carousel End */}
        </>
    )
}

export default Carousel
