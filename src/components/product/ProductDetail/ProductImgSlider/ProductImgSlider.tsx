"use client"
import { height } from "@mui/system";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useState } from 'react'
import styles from './ProductImgSlider.module.scss'

interface ProductImgSliderProps {
    imgList: string[],
}
const ProductImgSlider = ({ imgList }: ProductImgSliderProps) => {
    const [currentActiveIndex, setCurrentActiveIndex] = useState(0);

    const thumbnailOptions = {
        perPage: 4,
        perMove: 1,
        pagination: false,
        gap: '10px',
        width: '300px',
        height: '80px',
        wheel: true, // Kích hoạt chuyển slide khi lăn chuột
    };
    const handleThumbnailHover = (index: number) => {
        setCurrentActiveIndex(index); // Cập nhật currentActive khi nhấn vào thumbnail
    };
    return (
        <>
            <div className={styles.ProductImgSlider}>
                <img
                    className={styles.mainImgActive}
                    src={imgList[currentActiveIndex]}
                    alt={`product image ${currentActiveIndex}`}
                />
                <Splide options={thumbnailOptions}>
                    {imgList?.map((thumbnail, index) => (
                        <SplideSlide key={index}>
                            <img
                                className={`${styles.thumbnailSplideItem} ${index === currentActiveIndex ? styles.thumbnailActive : ''}`}
                                src={thumbnail}
                                alt="product thumbnail"
                                onMouseEnter={() => handleThumbnailHover(index)}
                            />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </>
    )
}

export default ProductImgSlider
