import React from 'react'
import {Navbar , Container, Nav} from 'react-bootstrap'
import {LinkContainer }  from 'react-router-bootstrap';


const header = () => {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            {/* using router Link to do Dynamic Re rendering  */}
            <LinkContainer to = '/'>
            <Navbar.Brand >Online Shop </Navbar.Brand>
             </LinkContainer>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                
                <LinkContainer to ='/cart'>
                <Nav.Link>
                <span style ={{color : 'skyblue'}}> <i className="fas fa-shopping-cart"></i></span>
                    &nbsp; Cart
                </Nav.Link>
                </LinkContainer>
                
                <LinkContainer to ='/signin'>

                  <Nav.Link>

                <span style ={{color : 'skyblue'}}><i className="fas fa-user" ></i></span>
                &nbsp; Signin

                </Nav.Link>
                
                </LinkContainer>
              
              </Nav>

            </Navbar.Collapse>
          </Container>  
        </Navbar>
      </>
    );
}

export default header
