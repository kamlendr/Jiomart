import { GET_FRUITS_FAILURE, GET_FRUITS_REQUEST, GET_FRUITS_SUCCESS } from "./actionType"
import axios from "axios"

const getFruitsRequest = () =>{
    return{
        type:GET_FRUITS_REQUEST
    }
}
const getFruitsSuccess = (payload) =>{
    return{
        type:GET_FRUITS_SUCCESS,
        payload
    }
}
const getFruitsFailure = (payload) =>{
    return{
        type:GET_FRUITS_FAILURE,
        payload
    }
}
export const getFruits = (payload) =>(dispatch)=>{
    dispatch(getFruitsRequest())
    axios.get("https://kanthuserver.herokuapp.com/items?category=fruits")
    .then((res)=>{
        dispatch(getFruitsSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(getFruitsFailure(err))
    })
}