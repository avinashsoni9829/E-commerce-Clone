import React,{useEffect} from 'react';

import {Row , Col} from 'react-bootstrap'
import { useSelector , useDispatch  } from 'react-redux';
import { listProducts } from '../actions/ProductActions';
import Loader from '../components/shared/Loader';
import Message from '../components/shared/Message';

import ProductScreen from './ProductScreen'


const HomeScreen = () => {
    
   const dispatch = useDispatch();
   const productList = useSelector(state => state.productList);
   const {loading, error , products} = productList; 
    useEffect( () => {
          dispatch(listProducts());

    }
     , [dispatch]);

    return (
       
        <>
        {
            loading ?  <Loader/>  : error ? <Message  variant = 'warning'> {error} </Message>:  <Row>
            {
                 //Products as a object cant call map fucntion so we need to make this as [Products]
                 
                products.map((product) => (
                     <Col key ={product._id} md ={3}>
                     
                     <ProductScreen product = {product} />
                 
                     </Col>
                 ))
                
             }
                   
             
           </Row>
        }
  
        </>
    )
}



export default HomeScreen;

