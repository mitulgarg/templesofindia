import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavHead = () => {

    return (
        <div>
            <div className="header">
                <Navbar expand="lg" bg="#333" data-bs-theme="dark">
                    <Container fluid>
                        <Navbar.Brand>
                        <Link className=" text-white text-decoration-none" to={`/`}>
                            <h3 style={{ marginTop: "0.5rem"}}>
                                <img src="templeicon.png" alt="icon" style={{ width: '40px', height: '40px', marginRight: "1rem" }}></img>Temples Of India</h3>
                        </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '101px' }}
                                navbarScroll
                            >
                                <div className="col-7" >
                                <Nav.Link>
                                    <Link className=" text-white text-decoration-none" to={`/temple`}>
                                        
                                        <h5 style={{ marginTop: "0.5rem" }}>Temples</h5>
                                       
                                    </Link>
                                </Nav.Link>
                                </div>

                                <div  className="col-8" >
                                <Nav.Link>
                                    <Link className=" text-white text-decoration-none" to={`/contact`}>
                                        <h5 style={{ marginTop: "0.5rem" }}>Contact Us</h5>
                                    </Link>
                                </Nav.Link>
                                </div>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-light">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


            </div>



        </div>
    );
};

export default NavHead;





