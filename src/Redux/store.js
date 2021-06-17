import {applyMiddleware, combineReducers, createStore,compose} from "redux" 
import thunk from "redux-thunk"
import { biscuitsReducer } from "./Biscuits/reducer"
import { flourReducer } from "./Flours/reducer"
import { fruitsReducer } from "./Fruits/reducer"

import { cartReducer } from "./Products/cartReducer"
import { catReducer } from "./Products/catReducer"
import { currentCatReducer } from "./Products/currentCategory"
import { pReducer } from "./Products/pReducer"
import { searchReducer } from "./Products/searchReducer"

import { AuthReducer } from "./Login/reducer"

import { singleProductReducer } from "./SingleProduct/reducer"

import { vegReducer } from "./Vegetables/reducer"

export const rootReducer = combineReducers({
   fruits:fruitsReducer,
   vegetables:vegReducer,
   Auth:AuthReducer,
   state:pReducer,
   categories:catReducer,
   currentCat:currentCatReducer,

   searchResults:searchReducer,
   cart:cartReducer,


   flour:flourReducer,
   biscuits:biscuitsReducer,
   singleProduct:singleProductReducer,

})


const composeEnhancers = (typeof window !== 'undefined' 
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

 const enhancer = composeEnhancers(applyMiddleware(thunk))   

export const store = createStore(rootReducer,enhancer)