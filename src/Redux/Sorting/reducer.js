import { SORT_FAILURE, SORT_REQUEST, SORT_SUCCESS } from "./actionType"


const initState = {
    isLoading:false,
    isError:false,
    data:[]
}
export const sortReducer = (state=initState,{type,payload}) =>{
    switch(type){
        case SORT_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        case SORT_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isError:false,
                data:payload
            }    
        case SORT_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true
            }    
        default:
            return state    
    }
}