import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import "./Slidertwo.css";


// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


export default function Slidertwo() {



    const swiperRef = useRef(null);

    let appendNumber = 4;
    let prependNumber = 1;

    const prepend2 = () => {
        swiperRef.current.swiper.prependSlide([
            '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
            '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
        ]);
    }

    const prepend = () => {
        swiperRef.current.swiper.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
    }

    const append = () => {
        swiperRef.current.swiper.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
    }

    const append2 = () => {
        swiperRef.current.swiper.appendSlide([
            '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
            '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
        ]);
    }

    return (
        <>

            <Swiper ref={swiperRef} slidesPerView={3} centeredSlides={true} spaceBetween={30} pagination={{
                "type": "fraction"
            }} navigation={true} className="mySwiper">
                <SwiperSlide><img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1602257194_Atta_Web.jpg" alt="" /></SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </>
    )
}