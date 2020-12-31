import React, { useState } from "react"
import { Dropdown } from "react-bootstrap"
import { AiOutlineBars } from "react-icons/ai"
import { pageList } from "../data/info"

const DropdownNav = () => {
   const [defBtn, setDefBtn] = useState(false)

   return (
      <Dropdown>
         <Dropdown.Toggle
            variant="success"
            style={{ backgroundColor: "#5B3080", borderColor: "#5B3080", textAlign: "right", width: "10rem" }}
         >
            <AiOutlineBars />
         </Dropdown.Toggle>
         <Dropdown.Menu className="nav-bar-font">
            <Dropdown.Item href={`/${pageList[0]}`}>Home</Dropdown.Item>
            <Dropdown.Item href={`/${pageList[1]}`}>About Us</Dropdown.Item>
            <Dropdown.Item href={`/${pageList[2]}`}>What is Kendo?</Dropdown.Item>
            <Dropdown.Item href={`/${pageList[3]}`}>Announcement</Dropdown.Item>
            <Dropdown.Item href={`/${pageList[4]}`}>Join</Dropdown.Item>
            <Dropdown.Item>
               <Dropdown className="nav-dropdown">
                  <Dropdown.Toggle
                     onClickCapture={() => setDefBtn(!defBtn)}
                     id="nav-resource-dropdown"
                     style={{
                        boxShadow: "none",
                        backgroundColor: "transparent",
                        color: defBtn ? "gray" : "#171717",
                        padding: 0
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
            </Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
   )
}

export default DropdownNav