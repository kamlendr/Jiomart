import React from 'react'
import ControlledCarousel from './ControlledCarousel'
import style from './LandingPage.module.css'

function LandingPage() {
    return (
        <>
            <ControlledCarousel />
            {/* <div className={style.LandingPage}>
                <button className={style.sliderButton}><img className={style.buttonImg} src="https://www.jiomart.com/assets/version1620668133/smartweb/images/icons/banner_arrow_left.png" alt="" /></button>
                <button className={style.sliderButton}><img className={style.buttonImg} src="https://www.jiomart.com/assets/version1620668133/smartweb/images/icons/banner_arrow_right.png" alt="" /></button>
            </div> */}
            <div><a href="#"><img style={{ width: "98.5%", margin: " 0px 10px" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622140373_web.jpg" alt="" /></a></div>
            <div><a href="#"><img style={{ width: "98.5%", margin: " 0px 10px" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1621437459_ncpunemum.jpg" alt="" /></a></div>
            <div><a href="#"><img style={{ width: "98.5%", margin: " 0px 10px" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1611339553_free_header.jpg" alt="" /></a></div>
            {/* <div style={{ background: "black", width: "100%", height: "800px" }}>

            </div> */}
        </>
    )
}

export default LandingPage
