import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navb() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary  navbar navbar-expand-lg shadow-sm " id='bg-color'>
      <Container>
        <Navbar.Brand className ='text-uppercase fw-bold text-white' href="#home">Tamilnadu Tourism</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  className="nav-link my-1 mx-2 text-white text-capitalize fw-bold "  href="/">Home</Nav.Link>
            <Nav.Link  className="nav-link my-1 mx-2 text-white text-capitalize fw-bold "  href="/Placetovisit">Places to Visit</Nav.Link>
            <Nav.Link  className="nav-link my-1 mx-2 text-white text-capitalize fw-bold "  href="/Accordian">Best Time to Visit</Nav.Link>
            <Nav.Link  className="nav-link my-1 mx-2 text-white text-capitalize fw-bold "  href="#link">packages</Nav.Link>
            <Nav.Link  className="nav-link my-1 mx-2 text-white text-capitalize fw-bold "  href="#link">destination</Nav.Link>
            <Nav.Link  className="nav-link my-1 mx-2 text-white text-capitalize fw-bold "  href="Food">food</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navb