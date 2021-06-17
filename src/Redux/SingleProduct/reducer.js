import { SINGLE_GET_FAILURE, SINGLE_GET_REQUEST, SINGLE_GET_SUCCESS } from "./actionType"

const initState = {
    isLoading:false,
    isError:false,
    data:[{title:"mago",cost:333,description:"iusdhbvikudsvs dzfb", feature:"are you goof", id:7878,originCountry:"INdia"}]
}
export const singleProductReducer = (state=initState,{type,payload})=>{
    switch(type){
        case SINGLE_GET_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        case SINGLE_GET_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isError:false,
                data:[...state.data ,payload]
            }  
        case SINGLE_GET_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true
            }      
        default:
            return state    
    }
}