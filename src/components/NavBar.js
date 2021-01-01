import React from "react"
import PropTypes from "prop-types"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import { pageList } from "../data/info"
import { IMAGE_PATH } from "../views/App"

const NavBar = ({
   transparent
}) => {
   const location = useLocation().pathname.split("/").pop()

   return (
      <Navbar
         variant="dark" expand="xl" className="nav-bar-layout"
         style={{ backgroundColor: transparent && "transparent" }}
      >
         <Navbar.Brand href={`/${pageList[0]}`}>
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
               <Nav.Link href={`/${pageList[0]}`} disabled={location === pageList[0]}>Home</Nav.Link>
               <Nav.Link href={`/${pageList[1]}`} disabled={location === pageList[1]}>About Us</Nav.Link>
               <Nav.Link href={`/${pageList[2]}`} disabled={location === pageList[2]}>What is Kendo?</Nav.Link>
               <Nav.Link href={`/${pageList[3]}`} disabled={location === pageList[3]}>Announcement</Nav.Link>
               <Nav.Link href={`/${pageList[4]}`} disabled={location === pageList[4]}>Join</Nav.Link>
               <NavDropdown
                  title="Resources"
                  id="basic-nav-dropdown"
                  className="nav-resource-menu"
               >
                  <NavDropdown.Item href={`/${pageList[5][0]}`} disabled={location === pageList[5][0]}>
                     FAQ
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`/${pageList[5][1]}`} disabled={location === pageList[5][1]}>
                     Vocab
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`/${pageList[5][2]}`} disabled={location === pageList[5][2]}>
                     Warm Up
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`/${pageList[5][3]}`} disabled={location === pageList[5][3]}>
                     Etiquette
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`/${pageList[5][4]}`} disabled={location === pageList[5][4]}>
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