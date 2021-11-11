import React from 'react'
import './Header.css'
import logoURL from '../../Assets/logo.png'
import { Container, NavDropdown, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
    return(
        <Navbar fixed="top" bg="dark" variant="dark">
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
                    <NavDropdown title="User" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="">Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header