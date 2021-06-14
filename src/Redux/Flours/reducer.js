import { SORT_SUCCESS } from "../Sorting/actionType"
import { GET_FLOUR_FAILURE, GET_FLOUR_REQUEST, GET_FLOUR_SUCCESS } from "./actionType"


const initState = {
    isLoading:false,
    isError:false,
    data:[]
}
export const flourReducer = (state=initState,{type,payload}) =>{
    switch(type){
        case GET_FLOUR_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        case GET_FLOUR_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isError:false,
                data:payload
            }  
        case GET_FLOUR_FAILURE:
            return{
                ...state,
                isError:true,
                isLoading:false
            }
        case SORT_SUCCESS:
            return{
                ...state,
                isLoading:false,
                data:payload
            }             
        default:
            return state    
    }
}