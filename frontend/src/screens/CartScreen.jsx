import React,{useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux';
import {Row , Col , Form , Button , Card , Image , ListGroup} from 'react-bootstrap';
import { addToCart } from '../actions/cartAction';

const CartScreen = ({match,location,history}) => {
    const productId = match.params.id
    const qty = location.search ? location.search.split('=')[1] : 1;
    const dispatch = useDispatch();
    useEffect(() => {
        if(productId){
             dispatch(addToCart(productId, qty))
        }
    },[dispatch , productId, qty]);

    const cart = useSelector((state => state.cart));

    const {cartItems} = cart;

    console.log(cart);
    


    return (
        <div>
            <h1>Cart Screen</h1>
        </div>
    )
}

export default CartScreen
