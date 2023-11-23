'use client'
import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from './FlashSaleSlider.module.scss'
import FlashSaleSliderItem from './FlashSaleSliderItem/FlashSaleSliderItem';

const FlashSaleSlider = () => {
    const sliderOptions = {
        perPage: 5,
        perMove: 3,
        pagination: false,
        gap: '10px',
        height: '380px',
        breakpoints: {
            600: {
                perPage: 2,
                perMove: 2,
            },
            800: {
                perPage: 3,
                perMove: 2,
            },
            1000: {
                perPage: 4,
                perMove: 2,
            },
        }
    };

    return (
        <div>
            <Splide options={sliderOptions}>
                <SplideSlide>
                    <FlashSaleSliderItem />
                </SplideSlide>
                <>
                    <SplideSlide>
                        <FlashSaleSliderItem />
                    </SplideSlide>
                    <SplideSlide>
                        <FlashSaleSliderItem />
                    </SplideSlide>
                    <SplideSlide>
                        <FlashSaleSliderItem />
                    </SplideSlide>
                    <SplideSlide>
                        <FlashSaleSliderItem />
                    </SplideSlide>
                    <SplideSlide>
                        <FlashSaleSliderItem />
                    </SplideSlide>
                    <SplideSlide>
                        <FlashSaleSliderItem />
                    </SplideSlide>
                    <SplideSlide>
                        <FlashSaleSliderItem />
                    </SplideSlide>
                    <SplideSlide>
                        <FlashSaleSliderItem />
                    </SplideSlide>
                    <SplideSlide>
                        <FlashSaleSliderItem />
                    </SplideSlide>
                    <SplideSlide>
                        <FlashSaleSliderItem />
                    </SplideSlide>
                    <SplideSlide>
                        <FlashSaleSliderItem />
                    </SplideSlide>
                    <SplideSlide>
                        <FlashSaleSliderItem />
                    </SplideSlide>
                    <SplideSlide>
                        <FlashSaleSliderItem />
                    </SplideSlide>
                    <SplideSlide>
                        <FlashSaleSliderItem />
                    </SplideSlide>
                </>
            </Splide>
        </div>
    )
}

export default FlashSaleSlider
