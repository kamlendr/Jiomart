import React from "react"
import "../CSS/Fruits.css"
import {useDispatch} from "react-redux"
import {  getAllProducts, sortDiscount, sortHighToLow, sortLowToHigh } from "../../Redux/Sorting/action"
import { getFruits } from "../../Redux/Fruits/action"


function Sorting({parent}){
console.log(parent)
    const dispatch = useDispatch()

    
    const handleHighToLow = () =>{
        dispatch(sortHighToLow(parent))
    }
    const handleLowToHigh = () =>{
        dispatch(sortLowToHigh(parent))
    }
    const handleDiscount = () =>{
        dispatch(sortDiscount(parent))
    }
    const handleAllProducts = () =>{
        dispatch(getAllProducts(parent))
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