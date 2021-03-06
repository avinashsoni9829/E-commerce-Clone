import axios from 'axios';
import { CART_ADD_ITEM,CART_ADD_REMOVE } from "../constants/cartConstant";

export const addToCart = (id , qty) => async(dispatch , getState) => {
 const  {data} = await axios.get(`/api/products/${id}`);

 dispatch({
     type  : CART_ADD_ITEM,
     payload : {
         product : data._id,
         name : data.name,
         image : data.image,
         price : data.price,
         stock : data.stock ,
         qty 
     }
 })
// only json data is stored in localStorage
 localStorage.setItem('cartItems' , JSON.stringify(getState().cart.cartItem));

 
}