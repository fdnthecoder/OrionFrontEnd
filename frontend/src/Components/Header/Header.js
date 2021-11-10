import React from 'react'
import './Header.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import logoURL from '../../Assets/logo.png'

const Header = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logoURL} alt="logo" width="30" height="30" className="d-inline-block align-top" />{' '}
                    Orion
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto">
                    <Nav.Link href="">Companies</Nav.Link>
                    <Nav.Link href="/internships">Internships</Nav.Link>
                </Nav >
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header