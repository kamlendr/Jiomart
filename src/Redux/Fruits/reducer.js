import { SORT_SUCCESS } from "../Sorting/actionType"
import { GET_FRUITS_FAILURE, GET_FRUITS_REQUEST, GET_FRUITS_SUCCESS } from "./actionType"


const initState = {
    isLoading:false,
    isError:false,
    data:[]
}
export const fruitsReducer = (state=initState,{type,payload}) =>{
    switch(type){
        case GET_FRUITS_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        case GET_FRUITS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isError:false,
                data:payload
            }  
        case GET_FRUITS_FAILURE:
            return{
                ...state,
                isError:true,
                isLoading:false
            }
        case SORT_SUCCESS:
            return{
                ...state,
                isError:false,
                isLoading:false,
                data:payload
            }          
        default:
            return state    
    }
}