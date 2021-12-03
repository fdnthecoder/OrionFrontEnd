import React from 'react'
import './Header.css'
import logoURL from '../../Assets/logo.png'
import { Container, NavDropdown, Navbar, Nav } from 'react-bootstrap'

function logout(){
    localStorage.clear();
    window.location.reload(false);
}
const Header = () => {
    const username = localStorage.getItem("username");
    if (username){
        return (
            <Navbar sticky="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logoURL} alt="logo" width="30" height="30" className="d-inline-block align-top" />{' '}
                    Orion
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto">
                    <NavDropdown title="Internships">
                        <NavDropdown.Item href="/internships">View listings</NavDropdown.Item>
                        <NavDropdown.Item href="/internships/new">Post a new listing</NavDropdown.Item>
                    </NavDropdown>
                </Nav >
                <Nav>
                    <NavDropdown title={username} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/home" onClick = {logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
        );
    }
    return(
        <Navbar sticky="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logoURL} alt="logo" width="30" height="30" className="d-inline-block align-top" />{' '}
                    Orion
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav>
                    <NavDropdown title="User" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;