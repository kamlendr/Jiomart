import React from 'react'
import Banner from './Banner'
import Slidertwo from './Slidertwo'
import Swipper from './Swipper'
import style from "./LandingPage.module.css"
import BannerCard from './BannerCard'



function LandingPage() {
    return (
        <>
            <Swipper />
            <Banner url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1622140373_web.jpg"} />
            <Banner url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1621437459_ncpunemum.jpg"} />
            <Banner url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1611339553_free_header.jpg"} />

            <p style={{ marginLeft: "5%", padding: "8px 16px 16px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Shop from Top Categories</p>
            <Slidertwo />

            <Banner url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1623259110_web.jpg"} />
            <Banner url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1621013913_Desktop-_Home_page-_banner.jpg"} />
            <Banner url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1605980137_Mylist_banner_web.jpg"} />

            <p style={{ marginLeft: "5%", padding: "8px 16px 16px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>TOP DEAL</p>
            <Slidertwo />

            <div className={style.offerDiv}>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622485247_Mobikwik_web_mobile.jpg" alt="" /></a> </div>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622731979_Simpl_web_mobile.jpg" alt="" /></a> </div>

            </div>

            <p style={{ marginLeft: "5%", padding: "8px 16px 16px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Offers on daily essentials</p>
            <div style={{ width: "90%", margin: "15px auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <BannerCard color={"#efd6da"} offer={"UP TO 20% OFF"} url={"https://www.jiomart.com/images/category/17/thumb/dals-pulses-20200714.png"} item={"Dal & Pulses"} />
                <BannerCard color={"#efd6da"} offer={"UP TO 50% OFF"} url={"https://www.jiomart.com/images/category/14/thumb/0-14.png"} item={"Atta, Flours & Sooji"} />
                <BannerCard color={"#efd6da"} offer={"UP TO 20% OFF"} url={"https://www.jiomart.com/images/category/18/thumb/0-18.png"} item={"Edibles Oils"} />
                <BannerCard color={"#efd6da"} offer={"UP TO 10% OFF"} url={"https://www.jiomart.com/images/category/20/thumb/0-20.png"} item={"Salt, Sugar & Jaggery"} />

            </div>
            <div style={{ width: "90%", margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <BannerCard color={"#efd6da"} offer={"UP TO 15% OFF"} url={"https://www.jiomart.com/images/category/119/thumb/bath-hand-wash-20200714.png"} item={"Bath & Hand Wash"} />
                <BannerCard color={"#efd6da"} offer={"UP TO 33% OFF"} url={"https://www.jiomart.com/images/category/7/thumb/toothpaste-20200520.png"} item={"Toothpaste"} />
                <BannerCard color={"#efd6da"} offer={"UP TO 50% OFF"} url={"https://www.jiomart.com/images/category/191/thumb/noodle-pasta-vermicelli-20200603.png"} item={"Noodle, Pasta, Vermicelli"} />
                <BannerCard color={"#efd6da"} offer={"UP TO 30% OFF"} url={"https://www.jiomart.com/images/category/44/thumb/0-44.png"} item={"Biscuits & Cookies"} />

            </div>

            <p style={{ marginLeft: "5%", padding: "8px 16px 16px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Shop from Top Categories</p>
            <Slidertwo />


            <div className={style.offerDivTwo}>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1621444118_wm.jpg" alt="" /></a> </div>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622899682_Surprise_web_mini.jpg" alt="" /></a> </div>

            </div>
            <div className={style.offerDivTwo}>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622214167_webmini.jpg" alt="" /></a> </div>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1620914358_wm.jpg" alt="" /></a> </div>

            </div>
            <div className={style.offerDivTwo}>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1620489083_soapswebmini.jpg" alt="" /></a> </div>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1621607032_webmini.jpg" alt="" /></a> </div>

            </div>


            <p style={{ marginLeft: "5%", padding: "8px 16px 16px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Offers on Household & Personal care</p>
            <div style={{ width: "90%", margin: "15px auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <BannerCard color={"#c5f8c0"} offer={"UP TO 20% OFF"} url={"https://www.jiomart.com/images/category/37/thumb/all-purpose-cleaners-20200603.png"} item={"All Purpose Cleaners"} />
                <BannerCard color={"#c5f8c0"} offer={"UP TO 50% OFF"} url={"https://www.jiomart.com/images/category/43/thumb/detergent-bars-20200520.png"} item={"Detergent Bars"} />
                <BannerCard color={"#c5f8c0"} offer={"UP TO 20% OFF"} url={"https://www.jiomart.com/images/category/28/thumb/0-28.png"} item={"Feminine Hygiene"} />
                <BannerCard color={"#c5f8c0"} offer={"UP TO 20% OFF"} url={"https://www.jiomart.com/images/category/17/thumb/feminine-hygiene-20200605.png"} item={"Skin Care"} />

            </div>
            <div style={{ width: "90%", margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <BannerCard color={"#c5f8c0"} offer={"UP TO 20% OFF"} url={"https://www.jiomart.com/images/category/6/thumb/oral-care-20200603.png"} item={"Oral Care"} />
                <BannerCard color={"#c5f8c0"} offer={"UP TO 20% OFF"} url={"https://www.jiomart.com/images/category/31/thumb/0-31.png"} item={"Dal & Pulses"} />
                <BannerCard color={"#c5f8c0"} offer={"UP TO 20% OFF"} url={""} item={"Dal & Pulses"} />
                <BannerCard color={"#c5f8c0"} offer={"UP TO 20% OFF"} url={""} item={"Dal & Pulses"} />

            </div>

            <div className={style.offerDivTwo}>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1613668788_min33_webmini.jpg" alt="" /></a> </div>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1619106965_wm.jpg" alt="" /></a> </div>

            </div>
            <div className={style.offerDivTwo}>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1614274485_15wm.jpg" alt="" /></a> </div>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1620309565_wm.jpg" alt="" /></a> </div>

            </div>
            <div className={style.offerDivTwo}>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622126985_webmini.jpg" alt="" /></a> </div>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1620487957_detergentwebmini.jpg" alt="" /></a> </div>

            </div>


            <p style={{ marginLeft: "5%", padding: "8px 16px 16px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Offers on Groceries</p>
            <div style={{ width: "90%", margin: "15px auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <BannerCard color={"#bce1fe"} offer={"UP TO 20% OFF"} url={"https://www.jiomart.com/images/category/17/thumb/dals-pulses-20200714.png"} item={"Dal & Pulses"} />
                <BannerCard color={"#bce1fe"} offer={"UP TO 50% OFF"} url={"https://www.jiomart.com/images/category/14/thumb/0-14.png"} item={"Atta, Flours & Sooji"} />
                <BannerCard color={"#bce1fe"} offer={"UP TO 20% OFF"} url={"https://www.jiomart.com/images/category/18/thumb/0-18.png"} item={"Edibles Oils"} />
                <BannerCard color={"#bce1fe"} offer={"UP TO 20% OFF"} url={"https://www.jiomart.com/images/category/17/thumb/dals-pulses-20200714.png"} item={"Dal & Pulses"} />

            </div>
            <div style={{ width: "90%", margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <BannerCard color={"#bce1fe"} offer={"UP TO 20% OFF"} url={"https://www.jiomart.com/images/category/17/thumb/dals-pulses-20200714.png"} item={"Dal & Pulses"} />
                <BannerCard color={"#bce1fe"} offer={"UP TO 20% OFF"} url={"https://www.jiomart.com/images/category/17/thumb/dals-pulses-20200714.png"} item={"Dal & Pulses"} />
                <BannerCard color={"#bce1fe"} offer={"UP TO 20% OFF"} url={"https://www.jiomart.com/images/category/17/thumb/dals-pulses-20200714.png"} item={"Dal & Pulses"} />
                <BannerCard color={"#bce1fe"} offer={"UP TO 20% OFF"} url={"https://www.jiomart.com/images/category/17/thumb/dals-pulses-20200714.png"} item={"Dal & Pulses"} />

            </div>
        </>
    )
}

export default LandingPage
