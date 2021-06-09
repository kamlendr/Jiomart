import { SORT_SUCCESS } from "../Sorting/actionType"
import { GET_VEG_FAILURE, GET_VEG_REQUEST, GET_VEG_SUCCESS } from "./actionType"


const initState = {
    isLoading:false,
    isError:false,
    data:[]
}
export const vegReducer = (state=initState,{type,payload}) =>{
    switch(type){
        case GET_VEG_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        case GET_VEG_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isError:false,
                data:payload
            }  
        case GET_VEG_FAILURE:
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