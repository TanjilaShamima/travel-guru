// import { Button } from 'bootstrap';
import React, { useContext } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../../Image/Logo.png';
import App, { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
// import 'font-awesome/css/font-awesome.min.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let name;
    if(loggedInUser.email)  name = loggedInUser.name;
    return (
        <Container>
            <Navbar bg="lg" expand="lg">
                    <Navbar.Brand style={{width : ' 15%'}} href="#home"><img width="90%" src={logo} alt=""/></Navbar.Brand>
                    <Form style={{marginLeft : '10px'}} inline>
                            <FormControl type="text" placeholder="&#xe8b6; Search Your Destination..." />                       
                    </Form>
                
             
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav style={{marginLeft: '80px'}}  className="mr-auto">
                        <Link to="/news">News</Link>
                        <Link to="/destination">Destination</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contact">Contact</Link>
                        <h1>{name}</h1>
                        {loggedInUser.email ? 
                        <Button  onClick={() => setLoggedInUser({})} variant="warning">Log Out</Button> : 
                        <Link to="/login"><Button variant="warning">Log In</Button>
                        </Link>}
                    </Nav>
                </Navbar.Collapse>
                
            </Navbar>
        </Container>
       
        
    );
};

export default Header;