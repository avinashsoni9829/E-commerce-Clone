import  {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension'
import { ProductListReducer  , productDetailsReducer } from './reducers/ProductReducer';

const rootreducer = combineReducers({
    productList : ProductListReducer,
    productDetails : productDetailsReducer,
    
    


});

const initialState = {

};

const middleware = [thunk];

const store = createStore(rootreducer, initialState , composeWithDevTools(applyMiddleware(...middleware)));
// ... this is used  to spread all the middlewares in the array
export default  store ;

