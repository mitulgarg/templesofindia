import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavHead = () => {

    return (
        <div>
            <div className="header">
                <Navbar expand="lg" bg="#333" data-bs-theme="dark">
                    <Container fluid>                 
                        <Link 
                        className=" text-white text-decoration-none" 
                        to={`/`}>
                            <h3 className="nav-links" style={{ marginTop: "0.5rem",marginLeft:"7rem"}}>
                                <img src="templeicon.png" alt="icon" style={{ width: '40px', height: '40px', marginRight: "1rem" }}>
                                    </img>Temples Of India
                                    </h3>       
                        </Link>     
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto" navbarScroll> 
                                    
                                    <Link className=" text-white text-decoration-none" to={`/temple`}>
                                        <h4 style={{ marginTop: "0.5rem" , marginRight: "5rem"}}>Temples</h4>                                      
                                    </Link>                               
                                                   
                                    <Link className=" text-white text-decoration-none" to={`/contact`}>
                                        <h4 style={{ marginTop: "0.5rem" , marginRight: "5rem"}}>Contact Us</h4>
                                    </Link>                                    
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default NavHead;





