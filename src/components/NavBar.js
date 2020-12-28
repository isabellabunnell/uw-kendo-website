import React, { useState } from "react"
import { Nav } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import { WEB_URL } from "../views/App"

const NavBar = () => {
   const location = useLocation().pathname.split("/").pop()
   const [activePage, setActivePage] = useState(location)
   const pageList = ["about", "what-is-kendo", "join", "resources"]

   return (
      <Nav
         as="ul"
         className="nav-bar-font"
      >
         <Nav.Item as="li">
            <Nav.Link href={`${WEB_URL}/about`} disabled={activePage === pageList[0]}>About Us</Nav.Link>
         </Nav.Item>
         <Nav.Item as="li">
            <Nav.Link href={`${WEB_URL}`} disabled={activePage === pageList[1]}>What is Kendo?</Nav.Link>
         </Nav.Item>
         <Nav.Item as="li">
            <Nav.Link href={`${WEB_URL}`} disabled={activePage === pageList[2]}>Join</Nav.Link>
         </Nav.Item>
         <Nav.Item as="li">
            <Nav.Link href={`${WEB_URL}`} disabled={activePage === pageList[3]}>Resources</Nav.Link>
         </Nav.Item>
      </Nav>
   )
}

export default NavBar