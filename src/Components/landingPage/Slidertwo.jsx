import "./Slidertwo.css";
import React from "react";
import Slider from "react-slick";

export default function Slidertwo() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

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
    return (
        <Slider {...settings}>
            {Categories.map((el) => (<div>
                <img style={{ width: "200px", margin: "0", height: "250px" }} src={el} alt="" />
            </div>))}
        </Slider>
    );
}