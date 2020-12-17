import React from "react";
import "./style.css";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
export const MyNavbar = () => {
  return (
    <div>
      <Navbar  collapseOnSelect expand="lg" variant="light">
        <Navbar.Brand  href="/Search"><div><FontAwesomeIcon icon={faGoogle} /></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link id="colorNavSave" href="/Save">Saved</Nav.Link>
            <Nav.Link id="colorNavSearch" href="/Search">Search</Nav.Link>
            <Nav.Link href="#deets"></Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Navbar> </div>
  )
}


export default MyNavbar;
