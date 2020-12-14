import React from "react"
import { Nav } from "react-bootstrap"

const NavBar = () => {
   return (
      <Nav defaultActiveKey="/home" as="ul" className="nav-bar-font">
         <Nav.Item as="li">
            <Nav.Link href="/home">About Us</Nav.Link>
         </Nav.Item>
         <Nav.Item as="li">
            <Nav.Link eventKey="link-1">What is Kendo?</Nav.Link>
         </Nav.Item>
         <Nav.Item as="li">
            <Nav.Link eventKey="link-2">Join</Nav.Link>
         </Nav.Item>
         <Nav.Item as="li">
            <Nav.Link eventKey="link-3">Resources</Nav.Link>
         </Nav.Item>
      </Nav>
   )
}

export default NavBar