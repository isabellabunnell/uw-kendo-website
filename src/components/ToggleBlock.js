import React, { useState } from "react"
import PropTypes from "prop-types"
import { Accordion, Button } from "react-bootstrap"
import { BsChevronDown, BsChevronUp } from "react-icons/bs"

const ToggleBlock = ({
   infoList,
   toggleName,
   collapseName
}) => {
   return (
      <>
         {
            infoList.map((info, idx) => {
               const [open, setOpen] = useState(false)
               const collapse = info[collapseName] 
               return (
                  <div className="toggleb-block-accordion" key={`toggleb-block-${idx}`}>
                     <Accordion onClick={() => setOpen(!open)} defaultActiveKey={idx === 0 && "0"}>
                        <Accordion.Toggle
                           as={Button}
                           variant="link"
                           eventKey="0"
                           style={{ paddingLeft: "0", width: "100%" }} // need inline override
                        >
                           <div className="toggleb-block-button">
                              <h6 style={{ fontWeight: "bold" }}>{info[toggleName]}</h6>
                              <h5>{ open ? <BsChevronUp /> : <BsChevronDown />}</h5>
                           </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                           {
                              typeof collapse === "object" ?
                              collapse : <p>{collapse}</p>
                           }
                        </Accordion.Collapse>
                     </Accordion>
                  </div>
               )
            })
         }
      </>
   )
}

ToggleBlock.propTypes = {
   infoList: PropTypes.array,
   toggleName: PropTypes.string,
   collapseName: PropTypes.string
}

export default ToggleBlock