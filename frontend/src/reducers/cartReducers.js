import { CART_ADD_ITEM} from "../constants/cartConstant";
const intitialState = {
     cartItems : []
}

export const cartReducer = (state = intitialState , action) => {
     switch (action.type){
          case CART_ADD_ITEM:
               const item = action.payload;   // saving the item 
               const existItem = state.cartItems.find((x) => x.product === item.product); // check for item 
               if(existItem){
                      return{
                            ...state ,
                            cartItems : state.cartItems.map((x) => x.product === existItem.product ? item : x),
                      };
               }
               else{
                     return {
                           ...state , 
                           cartItems : [...state.cartItems , item ],
                     }; 

               }
               default: return state;
               
      }
}    