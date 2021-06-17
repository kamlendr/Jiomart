import React from 'react'
import style from "./LandingPage.module.css"

function SmallCard(props) {
    return (
        <div style={{ width: "19%", border: "1px solid #d0c6c6", borderRadius: "3px" }}>
            <a href="#">
                <img className={style.SmallCard}  style={{ padding: "15px" }} src={props.url} alt="" />
            </a>
        </div>
    )
}

export default SmallCard
