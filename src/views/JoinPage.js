import "react-calendar/dist/Calendar.css"
import React, { useState } from "react"
import PageStructure from "../components/PageStructure"
import Calendar from "react-calendar"

const JoinPage = () => {
   const [dateValue, setDateValue] = useState(new Date())
   console.log(dateValue)

   return (
      <PageStructure
         content={
            <div style={{ marginTop: "2rem" }}>
               <h3>
                  Calendar
               </h3>
               <p>
                  Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placera orci nulla pellentesque dignissim enim.   
               </p>
               <Calendar
                  className="join-calendar-layout"
                  onChange={setDateValue}
                  value={dateValue}
               />
            </div>
         }
      />
   )
}

export default JoinPage