import React, { useState } from "react"
import { Pagination } from "@material-ui/lab"
import EventAwards from "./EventAwards"
import { Accordion, Button, Row } from "react-bootstrap"

const AwardsBlock = () => {
   const awardsMap = require("../data/awards")
   const yearList = Object.keys(awardsMap).map(yearString => parseInt(yearString)).reverse()
   const [activePage, setActivePage] = useState(1)
   const activeYear = yearList[activePage-1]
   const activeAwards = awardsMap[activeYear]
   const [displayMore, setDisplayMore] = useState(true)

   const DisplayToggle = () => (
      <Accordion.Toggle
         as={Button}
         variant="link"
         eventKey="0"
         onClick={() => setDisplayMore(!displayMore)}
      >
         {displayMore ? "Display More" : "Display Less"}
      </Accordion.Toggle>
   )

   return (
      <>
         <div>
            <h3 style={{ display: "inline" }}>
               Awards
            </h3>
            <Pagination
               size="large"
               count={yearList.length}
               defaultPage={1}
               color="primary"
               onChange={(_, page) => setActivePage(page)}
               style={{ float: "right"}}
            />
         </div>
         {
            activeAwards.length > 0 &&
            <div style={{ marginTop: "1rem" }}>
            <EventAwards key="event-0" event={activeAwards[0]} />
            </div>
         }
         {
            activeAwards.length > 1 &&
            <Accordion>
               {
                  displayMore &&
                  <DisplayToggle />
               }
               <Accordion.Collapse eventKey="0">
                  <>
                  {
                     activeAwards.slice(1).map((event, idx) => (
                        <EventAwards key={`event-${idx+1}`} event={event} />
                     ))
                  }
                  </>
               </Accordion.Collapse>
               {
                  !displayMore &&
                  <DisplayToggle />
               }
            </Accordion>
         }
         {
            activeAwards.length === 0 &&
            <h3>{`No event record in ${activeYear}`}</h3>
         }
      </>
   )
}

export default AwardsBlock