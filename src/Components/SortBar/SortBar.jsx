import React from "react"
import "../CSS/Fruits.css"


export const SortBar=({sortProcess}) =>{
    return(
        <div className="sort">
        <div >
                <span>SORT BY :</span>
                <button>Popularity</button>
                <button onClick={()=>sortProcess({property:"cost",order:"desc"})} >High to Low</button>
                <button onClick={()=>sortProcess({property:"cost",order:"asc"})}>Low to High</button>
                <button onClick={()=>sortProcess({property:"discount",order:"desc"})}>Discount</button>
                <button onClick={()=>sortProcess({property:"",order:""})}>All Products</button>
            </div>
        </div>
    )
}
