import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    ProductListReducer,
    productDetailsReducer,
} from "./reducers/ProductReducer";


const rootreducer = combineReducers({
    productList : ProductListReducer,
    productDetails : productDetailsReducer,
   
    


});

const initialState = 
{ 
   cart:{
     
   }                       
};

const middleware = [thunk];

const store = createStore(
  rootreducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

