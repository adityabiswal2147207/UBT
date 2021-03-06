import React from 'react'
import PropTypes from 'prop-types'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';

const Header = props => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Admin Dashboard</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      {/* <Nav.Link href="#deets">Sign in</Nav.Link> */}
      <li className = "nav-item">
      <NavLink to="/signin" className="nav-link">Signin</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/signup" className="nav-link">Signup</NavLink>
      </li>
     
      {/* <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}



export default Header;