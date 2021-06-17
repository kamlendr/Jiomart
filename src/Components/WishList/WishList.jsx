import React from 'react'
import {useSelector} from "react-redux"


function WishList(){

     const {data} = useSelector((state)=>state.singleProduct)

    return (
        <div>
            {
                data.map((item)=>{
                    return <div>
                        <img src={item.image}  />

                    </div>
                })
            }
        </div>
    )
}

export  {WishList}
