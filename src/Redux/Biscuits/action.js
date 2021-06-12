import { GET_BISCUITS_FAILURE, GET_BISCUITS_REQUEST, GET_BISCUITS_SUCCESS } from "./actionType"
import axios from "axios"

const getBiscuitsRequest = () =>{
    return{
        type:GET_BISCUITS_REQUEST
    }
}
const getBiscuitsSuccess = (payload) =>{
    return{
        type:GET_BISCUITS_SUCCESS,
        payload
    }
}
const getBiscuitsFailure = (payload) =>{
    return{
        type:GET_BISCUITS_FAILURE,
        payload
    }
}
export const getBiscuits = (payload) =>(dispatch)=>{
    dispatch(getBiscuitsRequest())
    axios.get("https://kanthuserver.herokuapp.com/items?category=biscuits")
    .then((res)=>{
        dispatch(getBiscuitsSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(getBiscuitsFailure(err))
    })
}
