"use client"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useState } from 'react'
import styles from './ProductImgSlider.module.scss'
import ListImgModal from "./ListImgModal/ListImgModal";

interface ProductImgSliderProps {
    imgList: IProductImage[],
}
const ProductImgSlider = ({ imgList }: ProductImgSliderProps) => {
    const [currentActiveIndex, setCurrentActiveIndex] = useState(0);
    const [openModalAllImg, setOpenModalAllImg] = useState(false)

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
    const handleOpenModalAllImg = () => {
        setOpenModalAllImg(true)
    }
    const handleCloseModalAllImg = () => {
        setOpenModalAllImg(false)
    }

    const onImageError = (e: any) => {
        e.target.src = '/img/book/no-image.jpg'
    }

    return (
        <>
            <div className={styles.ProductImgSlider}>
                <img
                    className={styles.mainImgActive}
                    src={imgList && imgList.length > 0 ? imgList[currentActiveIndex].image_source : '/img/book/no-image.jpg'}
                    alt={`product image ${currentActiveIndex}`}
                    onError={onImageError}
                />
                {imgList?.length !== 0 && (
                    <div className={styles.thumbnailContainer}>
                        <Splide className={styles.thumbnailSplideList} options={thumbnailOptions}>
                            {imgList?.map((item, index) => (
                                <SplideSlide key={index}>
                                    <img
                                        className={`${styles.thumbnailSplideItem} ${index === currentActiveIndex ? styles.thumbnailActive : ''}`}
                                        src={item.image_source}
                                        alt={item.id.toString()}
                                        onMouseEnter={() => handleThumbnailHover(index)}
                                        onClick={handleOpenModalAllImg}
                                    />
                                </SplideSlide>
                            ))}
                        </Splide>
                        {imgList?.length > 4 && (
                            <div
                                className={styles.thumbnailMorePlaceHolder}
                                onClick={handleOpenModalAllImg}
                            >
                                <label>+{imgList.length - 4}</label>
                            </div>
                        )}
                    </div>
                )}
                {openModalAllImg && (
                    <ListImgModal
                        imgList={imgList}
                        handleCloseModalAllImg={handleCloseModalAllImg}
                    />
                )}
            </div>
        </>
    )
}

export default ProductImgSlider
