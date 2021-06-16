import axios from "axios"
import { SINGLE_GET_FAILURE, SINGLE_GET_REQUEST, SINGLE_GET_SUCCESS } from "./actionType"


const singleGetRequest = () =>{
    return{
        type:SINGLE_GET_REQUEST
    }
}
const singleGetSuccess = (payload) =>{
    return{
        type:SINGLE_GET_SUCCESS,
        payload
    }
}
const singleGetFailure = (payload) =>{
    return{
        type:SINGLE_GET_FAILURE,
        payload
    }
}

export const singleProduct = (category,id) => (dispatch)=>{
    dispatch(singleGetRequest())
    axios.get(`https://kanthuserver.herokuapp.com/items?category=${category}&id=${id}`)
    .then((res)=>{
        dispatch(singleGetSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(singleGetFailure(err))
    })
}