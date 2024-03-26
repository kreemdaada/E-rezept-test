import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="/dashbord">Login</NavDropdown.Item>
            <NavDropdown.Item href="/dashbord">Register</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
