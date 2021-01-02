import "react-calendar/dist/Calendar.css"
import React, { useState } from "react"
import Calendar from "react-calendar"
import EventBlock from "../components/EventBlock"
import { Row, Col, Button } from "react-bootstrap"
import { getDateStr } from "../functions/utils"

const CalendarBlock = () => {
   const [dateValue, setDateValue] = useState(new Date())
   const calendarMap = require("../data/calendar")
   const dateStr = getDateStr(dateValue)
   const hasEvent = dateStr in calendarMap

   return (
      <div style={{ marginBottom: "3rem" }}>
         <h3>
            Calendar
         </h3>
         <p>
            Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placera orci nulla pellentesque dignissim enim.   
         </p>
         <Row style={{ marginTop: "2rem" }}>
            <Col lg={6}>
               <Calendar
                  className="join-calendar-layout"
                  onChange={setDateValue}
                  value={dateValue}
               />
            </Col>
            <Col lg={1} style={{ marginTop: "2rem" }} />
            <Col lg={5}
               style={{
                  display: "flex",
                  justifyContent: hasEvent ? "flex-start" : "center",
                  flexDirection: "column",
               }}
            >
            {
               hasEvent ?
               calendarMap[dateStr].map((event, idx) =>
                  <EventBlock event={event} key={`event-${idx}`} />)
               :
               <h3>Free! No event available.</h3>
            }
            </Col>
         </Row>
      </div>
   )
}

export default CalendarBlock