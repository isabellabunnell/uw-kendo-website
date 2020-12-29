import "react-calendar/dist/Calendar.css"
import React, { useState } from "react"
import PageStructure from "../components/PageStructure"
import Calendar from "react-calendar"
import EventBlock from "../components/EventBlock"
import { Row, Col } from "react-bootstrap"
import { getDateStr } from "../functions/utils"

const JoinPage = () => {
   const [dateValue, setDateValue] = useState(new Date())
   const calendarMap = require("../data/calendar")
   const dateStr = getDateStr(dateValue)

   return (
      <PageStructure
         content={
            <div style={{ marginTop: "3rem" }}>
               <h3>
                  Calendar
               </h3>
               <p>
                  Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placera orci nulla pellentesque dignissim enim.   
               </p>
               <Row style={{ marginTop: "2rem" }}>
                  <Col sm={6}>
                     <Calendar
                        className="join-calendar-layout"
                        onChange={setDateValue}
                        value={dateValue}
                     />
                  </Col>
                  <Col sm={1} />
                  <Col sm={5}>
                  {
                     dateStr in calendarMap ?
                     calendarMap[dateStr].map((event, idx) =>
                        <EventBlock event={event} key={`event-${idx}`} />)
                     :
                     <h3>Free! No event available.</h3>
                  }
                  </Col>
               </Row>
               
               
            </div>
         }
      />
   )
}

export default JoinPage