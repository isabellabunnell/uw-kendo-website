import "react-calendar/dist/Calendar.css"
import React, { useState } from "react"
import { Accordion, Button } from "react-bootstrap"
import { faqList } from "../data/info"
import { BsChevronDown, BsChevronUp } from "react-icons/bs"

const FAQBlock = () => {
   return (
      <div style={{ marginTop: "3rem" }}>
         <h3 style={{ marginBottom: "1rem" }}>
            FAQ
         </h3>
         {
            faqList.map((faq, idx) => {
               const [open, setOpen] = useState(false)
               return (
                  <div className="faq-accordion" key={`faq-${idx}`}>
                     <Accordion onClick={() => setOpen(!open)} defaultActiveKey={idx === 0 && "0"}>
                        <Accordion.Toggle
                           as={Button}
                           variant="link"
                           eventKey="0"
                           style={{ paddingLeft: "0", width: "100%" }} // need inline override
                        >
                           <div className="faq-button">
                              <h6 style={{ fontWeight: "bold" }}>{faq.Q}</h6>
                              <h5>{ open ? <BsChevronUp /> : <BsChevronDown />}</h5>
                           </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                           <p>{faq.A}</p>
                        </Accordion.Collapse>
                     </Accordion>
                  </div>
               )
            })
         }
      </div>
   )
}

export default FAQBlock