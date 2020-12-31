import React, { useState } from "react"
import { Dropdown, Nav } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import { pageList } from "../data/info"

const NavBar = () => {
   const location = useLocation().pathname.split("/").pop()
   const [activePage, setActivePage] = useState(location)
   const [defBtn, setDefBtn] = useState(false)

   return (
      <Nav
         as="ul"
         className="nav-bar-font"
      >
         <Nav.Item as="li">
            <Nav.Link href={`/${pageList[0]}`} disabled={activePage === pageList[0]}>Home</Nav.Link>
         </Nav.Item>
         <Nav.Item as="li">
            <Nav.Link href={`/${pageList[1]}`} disabled={activePage === pageList[1]}>About Us</Nav.Link>
         </Nav.Item>
         <Nav.Item as="li">
            <Nav.Link href={`/${pageList[2]}`} disabled={activePage === pageList[2]}>What is Kendo?</Nav.Link>
         </Nav.Item>
         <Nav.Item as="li">
            <Nav.Link href={`/${pageList[3]}`} disabled={activePage === pageList[3]}>Announcement</Nav.Link>
         </Nav.Item>
         <Nav.Item as="li">
            <Nav.Link href={`/${pageList[4]}`} disabled={activePage === pageList[4]}>Join</Nav.Link>
         </Nav.Item>
         <Nav.Item as="li">
            <Dropdown className="nav-dropdown">
               <Dropdown.Toggle
                  onClickCapture={() => setDefBtn(!defBtn)}
                  id="nav-resource-dropdown"
                  style={{
                     boxShadow: "none",
                     backgroundColor: "transparent",
                     color: defBtn ? "gray" : "#171717"
                  }}
               >
                  Resources
               </Dropdown.Toggle>
               <Dropdown.Menu>
                  <Dropdown.Item href={`/${pageList[5][0]}`}>FAQ</Dropdown.Item>
                  <Dropdown.Item href={`/${pageList[5][1]}`}>Vocab</Dropdown.Item>
                  <Dropdown.Item href={`/${pageList[5][2]}`}>Warm Up</Dropdown.Item>
                  <Dropdown.Item href={`/${pageList[5][3]}`}>Etiquette</Dropdown.Item>
                  <Dropdown.Item href={`/${pageList[5][4]}`}>Useful Links</Dropdown.Item>
               </Dropdown.Menu>
            </Dropdown>
         </Nav.Item>
      </Nav>
   )
}

export default NavBar