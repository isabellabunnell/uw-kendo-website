import React, { useState } from "react"
import { Pagination } from '@material-ui/lab'
import EventAwards from "./EventAwards"

const AwardsBlock = () => {
   const awardsMap = require("../data/awards")
   const yearList = Object.keys(awardsMap).map(yearString => parseInt(yearString)).reverse()
   const [activePage, setActivePage] = useState(1)

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
            awardsMap[yearList[activePage-1]].map((event, idx) => (
               <EventAwards key={idx} event={event} />
            ))
         }
      </>
   )
}

export default AwardsBlock