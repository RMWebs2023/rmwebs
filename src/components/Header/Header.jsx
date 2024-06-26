import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../../img/logo_png.png"

import React from "react";
import "./Header.css";
import Button from '../Button/Button';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"  data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
              <img src={logo} className='navImg'/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <NavDropdown title="Desarrollo Web" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Apps</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Paginas Webs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">E-commerce</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Mantenimiento</NavDropdown.Item>
            </NavDropdown>
            <div className='navbar_button'>
              <Button />  
            </div>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
