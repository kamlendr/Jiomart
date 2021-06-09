import axios from "axios"
import { SORT_FAILURE, SORT_REQUEST, SORT_SUCCESS } from "./actionType"

const sortRequest = () =>{
    return{
        type:SORT_REQUEST
    }
}
const sortSuccess = (payload) =>{
    return{
        type:SORT_SUCCESS,
        payload
    }
}

const sortFailure = (payload) =>{
    return{
        type:SORT_FAILURE,
        payload
    }
}

export const sortHighToLow = (payload) =>(dispatch)=>{
    dispatch(sortRequest())
    axios.get(`https://kanthuserver.herokuapp.com/items?category=${payload}&_sort=cost&_order=DESC`)
    .then((res)=>{
        dispatch(sortSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(sortFailure(err))
    })
}

export const sortLowToHigh = (payload) => (dispatch)=>{
    dispatch(sortRequest())
    axios.get(`https://kanthuserver.herokuapp.com/items?category${payload}&_sort=cost&_order=asc`)
    .then((res)=>{
        dispatch(sortSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(sortFailure(err))
    })
}

export const sortDiscount = (payload) =>(dispatch)=>{
    dispatch(sortRequest())
    axios.get(`https://kanthuserver.herokuapp.com/items?category${payload}&_sort=discount&_order=DESC`)
    .then((res)=>{
        dispatch(sortSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(sortFailure(err))
    })
}