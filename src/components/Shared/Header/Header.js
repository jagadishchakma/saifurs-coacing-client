import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const loggedInUser = JSON.parse(sessionStorage.getItem('user'));
    return (
        <div className="fixed-top header">
            <Navbar expand="lg">
                <div className="container">
                    <Navbar.Brand as={Link } to="/"><img src="https://i.ibb.co/0Ccq598/saifurs.png" alt="" width="150"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/"> Home </Nav.Link> 
                            <Nav.Link href="#pricing"> Pricing </Nav.Link>   
                            <Nav.Link href="#reviews"> Reviews </Nav.Link> 
                            <Nav.Link href="#how-to-enroll"> How to Enroll</Nav.Link>
                            <Nav.Link href="#contact"> Contact</Nav.Link>
                            <Nav.Link href="#about"> About</Nav.Link>
                            {
                                loggedInUser ? <Nav.Link as={Link} to="/dashboard" className="classroom"> Classroom</Nav.Link>
                                : <Nav.Link as={Link} to="/login" className="classroom"> Login</Nav.Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </div>                
            </Navbar>
        </div>
    );
};

export default Header;