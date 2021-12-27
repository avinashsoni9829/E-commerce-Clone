import React,{useState ,useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import Rating from '../components/Rating';
import {Link} from 'react-router-dom';
import { listProductDetails } from '../actions/ProductActions';
import {
Row ,
Col,
ListGroup,
Button ,
Image,
ListGroupItem as Li,
Form
}  from  'react-bootstrap';


const ProductDetails = ({history ,match}) => {
     {/* finding the product int the product array  */}
   
       // intital state = 0 as no qty is selected initially 
       const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    
    const productDetails = useSelector(state => state.productDetails)
    const {loading , error , product} = productDetails;


      useEffect( () => {
           dispatch(listProductDetails(match.params.id))
      }, [dispatch,match]);

    
      const addToCartHandler = () => {
           history.push(`/cart/${match.params.id} ? qty=${qty}`);

      }
  
   
     
    return (
        <div>
                
                <Link to ="/" style = { { color : 'gray'}} className="btn"> 
                <i className="fas fa-arrow-left"></i> &nbsp; Go back </Link>
            <Row>
                <Col md = {6} className="my-2" >
                <Image src={product.image} alt ={product.name} fluid/>
                </Col>
                
                <Col md = {3} className="my-2">
                    <ListGroup variant = "flush">
                    

                     {/* displaying names*/ }
                     <Li><h3>{product.name}</h3></Li>

                     {/* displaying rating*/ }
                     <Li><Rating value={product.rating} text ={`${product.numReviews} reviews`} /></Li>
                     
                     {/* Displaying Price */ }
                     <Li style={{color : 'orange'}}> ${product.price}</Li>

                    <Li style={{color : 'lightblue'}} >{product.description}</Li>


                    </ListGroup>
                
                </Col>
                
                <Col md ={3} className="my-2">
                 
                  <Li>
                      <Row>
                          {/* Conditional  Rendering of Stock  current situation*/}
                          <Col style = {
                              product.stock > 0 ? {color : 'darkgreen'} : {color : 'Red'} }> Status : </Col>
                          
                          <Col> 
                          {product.stock > 0 ? "In Stock" : "Out of Stock"} </Col>

                      </Row>
                  </Li>
                  {/* Qty part*/}
                  {
                         product.stock >0 && (
                             <Li>
                                 <Row>
                                     <Col> Qty  </Col>
                                     {/*  this works like an input field from which data about qty will be taken */}
                                     <Form.Control as ="select" value = {qty} onChange = {e => setQty(e.target.value)}>
                                        {
                                            [...Array(product.stock).keys()].map((x) => (
                                                <option key = {x + 1} value = {x + 1}>{x + 1}</option>
                                            ))
                                        }
                                       


                                     </Form.Control>

                                 </Row>
                             </Li>
                         )
                  }    


                  <Li>
                      {
                       product.stock > 0 ? 
                       <Button className="btn btn-block" onClick = {addToCartHandler}> Add to cart </Button> 
                       : 
                       <Button className="btn btn-block" disabled> Add to cart</Button>
                       }
                  </Li>

            

                </Col>
            </Row>
            
        </div>
    )
}

export default ProductDetails
