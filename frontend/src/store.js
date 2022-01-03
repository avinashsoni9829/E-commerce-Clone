import  {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension'
import { ProductListReducer  , productDetailsReducer } from './reducers/ProductReducer';
import { cartReducer } from './reducers/cartReducers';
const cartItemsFromStorage  = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const rootreducer = combineReducers({
    productList : ProductListReducer,
    productDetails : productDetailsReducer,
    cart : cartReducer   
    


});

const initialState = 
{ 
   cart:{
       cartItems : cartItemsFromStorage
   }                       
};

const middleware = [thunk];

const store = createStore(rootreducer, initialState , composeWithDevTools(applyMiddleware(...middleware)));
// ... this is used  to spread all the middlewares in the array
export default  store ;

