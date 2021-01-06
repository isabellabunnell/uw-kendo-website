import React, { useState } from "react"
import EventAwards from "./EventAwards"
import { Pagination } from "@material-ui/lab"
import { Accordion, Button } from "react-bootstrap"

const AwardsBlock = () => {
   const awardsMap = require("../data/awards")
   const yearList = Object.keys(awardsMap).map(yearString => parseInt(yearString)).reverse()
   const [activePage, setActivePage] = useState(1)
   const activeYear = yearList[activePage-1]
   const activeAwards = awardsMap[activeYear]

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
               className="awards-pagination"
            />
         </div>
         {
            activeAwards.map((event, idx) => (
               <EventAwards key={`event-${idx+1}`} event={event} />
            ))
         }
         {
            activeAwards.length === 0 &&
            <h5 style={{ marginTop: "2rem" }}>{`No event record in ${activeYear}`}</h5>
         }
      </>
   )
}

export default AwardsBlock