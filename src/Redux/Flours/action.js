import { GET_FLOUR_FAILURE, GET_FLOUR_REQUEST, GET_FLOUR_SUCCESS } from "./actionType"
import axios from "axios"

const getFlourRequest = () =>{
    return{
        type:GET_FLOUR_REQUEST
    }
}
const getFlourSuccess = (payload) =>{
    return{
        type:GET_FLOUR_SUCCESS,
        payload
    }
}
const getFlourFailure = (payload) =>{
    return{
        type:GET_FLOUR_FAILURE,
        payload
    }
}
export const getFlour = (payload) =>(dispatch)=>{
    dispatch(getFlourRequest())
    axios.get("https://kanthuserver.herokuapp.com/items?category=flours")
    .then((res)=>{
        dispatch(getFlourSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(getFlourFailure(err))
    })
}