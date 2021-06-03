import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pic from '../img/loogo.png';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Navbar.Brand className="header text-white" href="#home"><img src={pic} alt="norway mountaint" /><a>O-TRAVEL</a></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav"  >
        <Nav className="margin">
          <Nav.Link href="#AU" className="text-white">About us</Nav.Link>
          <Nav.Link href="#pricing" className="text-white">Activities</Nav.Link>
          <Nav.Link href="#deets" className="text-white">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="responsive-navbar-nav"  >
        <Nav className="padding">
          <Nav.Link ><Link to='/list'><i class="fas fa-list-ul"></i></Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}
export default Header;
