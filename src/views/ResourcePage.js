import "react-calendar/dist/Calendar.css"
import React from "react"
import PageStructure from "../components/PageStructure"
import { Accordion, Button } from "react-bootstrap"
import { faqList } from "../data/info"

const ResourcePage = () => {
   return (
      <PageStructure
         content={
            <div style={{ marginTop: "2rem" }}>
               <h3 style={{ marginBottom: "1rem" }}>
                  FAQ
               </h3>
               {
                  faqList.map((faq, idx) => (
                     <Accordion key={`faq-${idx}`}>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ paddingLeft: "0" }}>
                           <h6>{faq.Q}</h6>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                           <p>{faq.A}</p>
                        </Accordion.Collapse>
                     </Accordion>
                  ))
               }
            </div>
         }
      />
   )
}

export default ResourcePage