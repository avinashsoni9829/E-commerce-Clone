import {PRODUCT_LIST_REQUEST , 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAILURE ,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS, 
    PRODUCT_DETAILS_FAILURE}  from '../constants/ProductConstant';

import axios from 'axios';

export const listProducts = () => async(dispatch) => {
              try {
                  /*  dispatch for PRODUCT_LIST_REQUEST */
                   dispatch({type : PRODUCT_LIST_REQUEST})
                   // data is recived from web
                   const {data} = await axios.get('/api/products')
                   // dispatch the success signal once the data is recived from PRODUCT_LIST_REQUEST and in action.payload set the data
                   dispatch({
                       type:PRODUCT_LIST_SUCCESS,
                       payload : data
                   })

                  
              } catch (error) 
              {
                  dispatch({
                      type : PRODUCT_LIST_FAILURE,
                      payload : 
                      error.response &&  
                      error.response.data.message ? error.response.data.message : error.message ,

                  })
              }
}


export const listProductDetails = (id) => async(dispatch) => {
    try {
        dispatch({type : PRODUCT_DETAILS_REQUEST})
        const {data} = await axios.get(`/api/products/${id}`)
        dispatch({
            type : PRODUCT_DETAILS_SUCCESS,
            payload : data
        })

    } catch (error) {
        dispatch({
            type : PRODUCT_DETAILS_FAILURE,
            payload : 
            error.response && error.response.data.message ? error.response.data.message : error.message ,
            
        })
    }
}