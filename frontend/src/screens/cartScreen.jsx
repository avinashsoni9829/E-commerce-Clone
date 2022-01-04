import React, { useEffect } from "react";
import Message from "../components/shared/Message";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Form,
  Button,
  Card,
  Image,
  ListGroup as Li,
  ListGroupItem,
} from "react-bootstrap";
import { addToCart} from "../actions/CartAction";

const CartScreen = ({match,location,history}) => {
    const productid = match.params.id // id from the URL

    const qty = location.search ? Number(location.search.split('=')[1]) : 1 // give the string of qty
   
    const dispatch = useDispatch();

    useEffect(() => {
      if(productid){
           dispatch(addToCart(productid,qty))
      }  
    },[dispatch,productid,qty]);

   // now we will save our product into the cart
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
   const  removeFromCartHandler    = (id) => {
        console.log("item removed!");
    }

    return (
       <>
       <Row>
           <Col md ={8}>
               <h1>Shopping Cart</h1>
               {
                   cartItems.length === 0 ? (<Message>Your Cart is Empty!!
                       <Link to = "/"> Go Back!</Link>
                   </Message>) : (
                       <Li variant = "flush">
                          {
                              cartItems.map(item => (
                                  <Li> 
                                      <Row>
                                          <Col md = {2}>
                                              <Image src = {item.image} alt ={item.name} fluid rounded/>
                                              
                                          </Col>

                                          <Col md ={3}>
                                              <Link to = {`/product/${item.product}`}>{item.name}</Link>
                                          </Col>

                                          <Col md = {2}>
                                              ${item.price}
                                          </Col>

                                          <Col md = {2}>
                                          <Form.Control as ="select" value = {item.qty} onChange = {e => dispatch(addToCart(item.product , Number(e.target.value)))}>
                                        {
                                            [...Array(item.countInStock).keys()].map((x) => (
                                                <option key = {x + 1} value = {x + 1}>{x + 1}</option>
                                            ))
                                        }
                                      
                                     </Form.Control>
                   <Button type = "button" variant = "light" onClick = {() => removeFromCartHandler(item.product)}>Remove</Button>


                                          </Col>
                                      </Row>
                                  </Li>
                              ))
                          }
                       </Li>
                   )
               }
           </Col>
           <Col md = {4}>
               <Card>
               <Li variant="flush">
              <ListGroupItem>
                <h2>
                  subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </h2>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroupItem>
              
            </Li>
               </Card>
           </Col>
       </Row>
       
       
       </>
    )
}

export default CartScreen
