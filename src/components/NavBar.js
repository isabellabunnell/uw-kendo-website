import React from "react"
import { Nav } from "react-bootstrap"

const NavBar = () => {
   return (
      <Nav defaultActiveKey="/home" as="ul" className="nav-bar-font">
         <Nav.Item as="li">
            <Nav.Link href="/about">About Us</Nav.Link>
         </Nav.Item>
         <Nav.Item as="li">
            <Nav.Link href="/home">What is Kendo?</Nav.Link>
         </Nav.Item>
         <Nav.Item as="li">
            <Nav.Link href="/home">Join</Nav.Link>
         </Nav.Item>
         <Nav.Item as="li">
            <Nav.Link href="/home">Resources</Nav.Link>
         </Nav.Item>
      </Nav>
   )
}

export default NavBar