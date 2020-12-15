import React from "react"
import { Dropdown } from "react-bootstrap"
import { AiOutlineBars } from "react-icons/ai"

const DropdownNav = () => {

   return (
      <Dropdown>
         <Dropdown.Toggle
            variant="success"
            style={{ backgroundColor: "#5B3080", borderColor: "#5B3080" }}
         >
            <AiOutlineBars />
         </Dropdown.Toggle>
         <Dropdown.Menu className="nav-bar-font">
            <Dropdown.Item href="#/action-1">About Us</Dropdown.Item>
            <Dropdown.Item href="#/action-2">What is Kendo?</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Join</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Resources</Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
   )
}

export default DropdownNav