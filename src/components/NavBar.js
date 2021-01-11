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
            <div id="nav-bar-brand">
               <img
                  alt="club logo"
                  height="72"
                  src={`${IMAGE_PATH}/info/club-logo-white.png`}
                  style={{ marginRight: "1rem" }}
               />
            </div>
            
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="top-navbar">
            <Nav>
               <Nav.Link href={LINK.BASE_URL} disabled={location === LINK.UWKC || location === ""}>Home</Nav.Link>
               <NavDropdown
                  title="About Us"
                  id="about-us-dropdown"
                  className={`nav-resource-menu${transparent ? "-transparent" : ""}`}
               >
                  <NavDropdown.Item href={LINK.THE_CLUB_URL} disabled={location === LINK.THE_CLUB}>
                     The Club
                  </NavDropdown.Item>
                  <NavDropdown.Item href={LINK.AWARDS_URL} disabled={location === LINK.AWARDS}>
                     Awards
                  </NavDropdown.Item>
                  <NavDropdown.Item href={LINK.PEOPLE_URL} disabled={location === LINK.PEOPLE}>
                     People
                  </NavDropdown.Item>
                  <NavDropdown.Item href={LINK.GALLERY_URL} disabled={location === LINK.GALLERY}>
                     Gallery
                  </NavDropdown.Item>
               </NavDropdown>
               <Nav.Link href={LINK.WHAT_IS_KENDO_URL} disabled={location === LINK.WHAT_IS_KENDO}>What is Kendo?</Nav.Link>
               <Nav.Link href={LINK.ANN_URL} disabled={location === LINK.ANNOUNCEMENT}>Announcement</Nav.Link>
               <Nav.Link href={LINK.JOIN_URL} disabled={location === LINK.JOIN}>Join</Nav.Link>
               <NavDropdown
                  title="Resources"
                  id="resource-dropdown"
                  className={`nav-resource-menu${transparent ? "-transparent" : ""}`}
               >
                  <NavDropdown.Item href={LINK.FAQ_URL} disabled={location === LINK.FAQ}>
                     FAQ
                  </NavDropdown.Item>
                  <NavDropdown.Item href={LINK.VOCAB_URL} disabled={location === LINK.VOCAB}>
                     Vocabulary
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
