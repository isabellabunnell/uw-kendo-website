import React from "react"
import PropTypes from "prop-types"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import { IMAGE_PATH } from "../views/App"
import * as LINK from "../data/link"

const NavBar = ({
   transparent
}) => {
   const location = useLocation().pathname.split("/").pop()

   return (
      <Navbar
         variant="dark" expand="xl" className="nav-bar-layout"
         style={{ backgroundColor: transparent && "transparent" }}
      >
         <Navbar.Brand href={LINK.BASE_URL}>
            <img
               alt="uw logo"
               height="40"
               src={`${IMAGE_PATH}/info/uw-logo.png`}
               style={{ marginRight: "1rem" }}
            />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
               <Nav.Link href={LINK.BASE_URL} disabled={location === LINK.UWKC}>Home</Nav.Link>
               <Nav.Link href={LINK.ABOUT_URL} disabled={location === LINK.ABOUT}>About Us</Nav.Link>
               <Nav.Link href={LINK.WHAT_IS_KENDO_URL} disabled={location === LINK.WHAT_IS_KENDO}>What is Kendo?</Nav.Link>
               <Nav.Link href={LINK.JOIN_URL} disabled={location === LINK.ANNOUNCEMENT}>Announcement</Nav.Link>
               <Nav.Link href={LINK.ANN_URL} disabled={location === LINK.JOIN}>Join</Nav.Link>
               <NavDropdown
                  title="Resources"
                  id="basic-nav-dropdown"
                  className={`nav-resource-menu${transparent ? "-transparent" : ""}`}
               >
                  <NavDropdown.Item href={LINK.FAQ_URL} disabled={location === LINK.FAQ}>
                     FAQ
                  </NavDropdown.Item>
                  <NavDropdown.Item href={LINK.VOCAB_URL} disabled={location === LINK.VOCAB}>
                     Vocab
                  </NavDropdown.Item>
                  <NavDropdown.Item href={LINK.WARM_UP_URL} disabled={location === LINK.WARM_UP}>
                     Warm Up
                  </NavDropdown.Item>
                  <NavDropdown.Item href={LINK.ETIQ_URL} disabled={location === LINK.ETIQUETTE}>
                     Etiquette
                  </NavDropdown.Item>
                  <NavDropdown.Item href={LINK.USEFUL_LINK_URL} disabled={location === LINK.USEFUL_LINK}>
                     Useful Links
                  </NavDropdown.Item>
               </NavDropdown>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   )
}

NavBar.propTypes = {
   transparent: PropTypes.bool
}

export default NavBar