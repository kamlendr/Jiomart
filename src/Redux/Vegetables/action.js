import { GET_VEG_FAILURE, GET_VEG_REQUEST, GET_VEG_SUCCESS } from "./actionType"
import axios from "axios"

const getVegRequest = () =>{
    return{
        type:GET_VEG_REQUEST
    }
}
const getVegSuccess = (payload) =>{
    return{
        type:GET_VEG_SUCCESS,
        payload
    }
}
const getVegFailure = (payload) =>{
    return{
        type:GET_VEG_FAILURE,
        payload
    }
}
export const getVegetables = (payload) =>(dispatch)=>{
    dispatch(getVegRequest())
    axios.get("https://kanthuserver.herokuapp.com/items?category=vegetables")
    .then((res)=>{
        dispatch(getVegSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(getVegFailure(err))
    })
}