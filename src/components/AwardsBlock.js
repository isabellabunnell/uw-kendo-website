import React, { useState } from "react"
import { Pagination } from '@material-ui/lab'
import EventAwards from "./EventAwards"
import { Accordion, Button } from "react-bootstrap"

const AwardsBlock = () => {
   const awardsMap = require("../data/awards")
   const yearList = Object.keys(awardsMap).map(yearString => parseInt(yearString)).reverse()
   const [activePage, setActivePage] = useState(1)
   const activeYear = yearList[activePage-1]
   const activeAwards = awardsMap[activeYear]

   return (
      <>
         <Pagination
            size="large"
            count={yearList.length}
            defaultPage={1}
            color="primary"
            onChange={(_, page) => setActivePage(page)}
            style={{ float: "right"}}
         />
         {
            activeAwards.length > 0 &&
            <EventAwards key={0} event={activeAwards[0]} /> 
         }
         {
            activeAwards.length > 1 &&
            <Accordion>
               <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Read More
               </Accordion.Toggle>
               
               <Accordion.Collapse eventKey="0">
                  <>
                  {
                     activeAwards.slice(1).map((event, idx) => (
                        <EventAwards key={idx+1} event={event} />
                     ))
                  }
                  </>
               </Accordion.Collapse>
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