import React from 'react'
import style from "./LandingPage.module.css"

function WomenCard(props) {
    return (
        <div style={{ width: "20%", height: "350px" }}>
            <a href="#">
                <img className={style.SmallCard} style={{ borderRadius: "10px", height: "320px" }} src={props.url} alt="" />
                <h6 style={{textAlign:'center',marginTop:"10px",marginRight:"20px"}}>{props.item}</h6>
            </a>
        </div>
    )
}

export default WomenCard
