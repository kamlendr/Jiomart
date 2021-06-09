import React from 'react'
import style from './LandingPage.module.css'

function LandingPage() {
    return (
        <>
            <div className={style.LandingPage}>
                <button className={style.sliderButton}><img className={style.buttonImg} src="https://www.jiomart.com/assets/version1620668133/smartweb/images/icons/banner_arrow_left.png" alt="" /></button>
                <button className={style.sliderButton}><img className={style.buttonImg} src="https://www.jiomart.com/assets/version1620668133/smartweb/images/icons/banner_arrow_right.png" alt="" /></button>
            </div>

            {/* <div style={{ background: "black", width: "100%", height: "800px" }}>

            </div> */}
        </>
    )
}

export default LandingPage
