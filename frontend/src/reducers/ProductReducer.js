import {PRODUCT_LIST_REQUEST , 
       PRODUCT_LIST_SUCCESS, 
       PRODUCT_LIST_FAILURE ,
       PRODUCT_DETAILS_REQUEST,
       PRODUCT_DETAILS_SUCCESS, 
       PRODUCT_DETAILS_FAILURE}  from '../constants/ProductConstant';

const initialState = {
     products : []
}

export  const ProductListReducer = (state = initialState , action) => 
             {
              switch(action.type){
                    case PRODUCT_LIST_REQUEST : 
                         return {
                             loading : true,
                             products : []
                         }
                    case PRODUCT_LIST_SUCCESS : 
                         return{
                             loading : false,
                             products : action.payload
                         }
                    case PRODUCT_LIST_FAILURE : 
                         return{
                              loading : false,
                              products : [],
                              error : action.payload
                         }
                    
                    default : return state;

              }
}

const intitalDetails = {
      product : {
            reviews : []
      }
}

export const productDetailsReducer = (state = intitalDetails , action ) => {
     switch (action.type) {
          case PRODUCT_DETAILS_REQUEST : return{
                loading : true,
                ...state // as we have only one object so we just spread the product details here 
          }
          case PRODUCT_DETAILS_SUCCESS : return{
                loading : false ,
                product : action.payload
          }
          case PRODUCT_DETAILS_FAILURE : return {
               loading : false,
               error : action.payload
          }
          default : return  state
     }
      
}