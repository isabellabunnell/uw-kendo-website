import "react-calendar/dist/Calendar.css"
import React from "react"
import PageStructure from "../components/PageStructure"
import { Accordion, Button } from "react-bootstrap"
import { faqList } from "../data/info"
import { BsChevronDown } from "react-icons/bs"

const FAQBlock = () => {
   return (
      <div style={{ marginTop: "2rem" }}>
         <h3 style={{ marginBottom: "1rem" }}>
            FAQ
         </h3>
         {
            faqList.map((faq, idx) => (
               <div className="faq-accordion" key={`faq-${idx}`}>
                  <Accordion>
                     <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey="0"
                        style={{ paddingLeft: "0", width: "100%" }} // need inline override
                     >
                        <div className="faq-button">
                           <h6 style={{ fontWeight: "bold" }}>{faq.Q}</h6>
                           <h5><BsChevronDown /></h5>
                        </div>
                     </Accordion.Toggle>
                     <Accordion.Collapse eventKey="0">
                        <p>{faq.A}</p>
                     </Accordion.Collapse>
                  </Accordion>
               </div>
               
            ))
         }
      </div>
   )
}

export default FAQBlock