import React, { useState } from "react"
import { Pagination } from '@material-ui/lab'
import EventAwards from "./EventAwards"

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
            activeAwards.map((event, idx) => (
               <EventAwards key={idx} event={event} />
            ))
         }
         {
            activeAwards.length === 0 &&
            <h3>{`No event record in ${activeYear}`}</h3>
         }
      </>
   )
}

export default AwardsBlock