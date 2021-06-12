import {applyMiddleware, combineReducers, createStore,compose} from "redux" 
import thunk from "redux-thunk"
import { biscuitsReducer } from "./Biscuits/reducer"
import { flourReducer } from "./Flours/reducer"
import { fruitsReducer } from "./Fruits/reducer"
import { vegReducer } from "./Vegetables/reducer"

export const rootReducer = combineReducers({
   fruits:fruitsReducer,
   vegetables:vegReducer,
   flour:flourReducer,
   biscuits:biscuitsReducer,

})


 const enhancer = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )   

export const store = createStore(rootReducer,enhancer)