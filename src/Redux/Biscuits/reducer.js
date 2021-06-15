import { SORT_SUCCESS } from "../Sorting/actionType"
import { GET_BISCUITS_FAILURE, GET_BISCUITS_REQUEST, GET_BISCUITS_SUCCESS } from "./actionType"


const initState = {
    isLoading:false,
    isError:false,
    data:[]
}
export const biscuitsReducer = (state=initState,{type,payload}) =>{
    switch(type){
        case GET_BISCUITS_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        case GET_BISCUITS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isError:false,
                data:payload
            }  
        case GET_BISCUITS_FAILURE:
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