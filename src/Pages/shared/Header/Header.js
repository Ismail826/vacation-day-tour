import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import logo from '../../../images/logo.png'
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const logout = () => {
        signOut(auth);
    };
    const {pathname}=useLocation();
    return (
        <>
            <Navbar style={
                pathname.includes("packagesDetails") ? { display: "none" } : { display: "flex" }
            } collapseOnSelect expand="lg" sticky='top' className=" nav-container " >
                <Container>
                    <Navbar.Brand as={Link} to="/"> <img style={{height:"30px"}} src={logo} alt=''/> Vacation Day Tour </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link  href="#home">Home</Nav.Link>
                            <Nav.Link  href='home#packages'>Packages</Nav.Link>
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>

                            {user ? <Button onClick={logout}>Log Out</Button> :
                                <Nav.Link as={Link} eventKey={2} to="login">
                                    Login
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;