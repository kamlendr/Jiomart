import React from "react"
import "../CSS/Fruits.css"
import {useDispatch} from "react-redux"
import {  sortDiscount, sortHighToLow, sortLowToHigh } from "../../Redux/Sorting/action"
import { getFruits } from "../../Redux/Fruits/action"


function Sorting(){

    const dispatch = useDispatch()

    
    const handleHighToLow = () =>{
        dispatch(sortHighToLow())
    }
    const handleLowToHigh = () =>{
        dispatch(sortLowToHigh())
    }
    const handleDiscount = () =>{
        dispatch(sortDiscount())
    }
    const handleAllProducts = () =>{
        dispatch(getFruits())
    }
    return(
        <>
        <div className="sort">
                <button>SORT BY :</button>
                <button>Popularity</button>
                <button onClick={handleHighToLow}>High to Low</button>
                <button onClick={handleLowToHigh}>Low to High</button>
                <button onClick={handleDiscount}>Discount</button>
                <button onClick={handleAllProducts}>All Products</button>
            </div>
        </>
    )
}
export {Sorting}