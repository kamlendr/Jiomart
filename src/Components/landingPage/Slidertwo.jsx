import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./Slidertwo.css";


// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


export default function Slidertwo() {

    let Categories = ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1602257194_Atta_Web.jpg",
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1598825980_1598704463_Biscuits-Cookies.jpg",
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1612274538_paneer.jpg",
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1612272383_kidswear.jpg",
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1612272459_womenwear.jpg",
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1606400616_Top-Categories-03.jpg",
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1598824690_1598720641_Shampoos_Conditioners.jpg",
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1598824614_1598720607_tea.jpg",
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1604594445_womenetinic_web.jpg",
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1606400641_Top-Categories-01.jpg",
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1604594554_infant_web.jpg"]



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
            <div style={{transform: "translate3d(0px, 0px, 0px)"}}>
                <Swiper ref={swiperRef} slidesPerView={3} centeredSlides={true} spaceBetween={30} pagination={{
                    "type": "fraction"
                }} navigation={true} className="mySwiper">
                    {Categories.map((el) => (<SwiperSlide><img style={{ width: "200px", margin: "0", height: "250px" }} src={el} alt="" /></SwiperSlide>))}
                </Swiper>
            </div>
        </>
    )
}