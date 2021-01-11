import React from "react"
import PageStructure from "../components/PageStructure"
import CalendarBlock from "../components/CalendarBlock"
import JoinBlock from "../components/JoinBlock"
import LocationBlock from "../components/LocationBlock"

const JoinPage = () => {
   return (
      <PageStructure
         content={
            <>
               <JoinBlock />
               <LocationBlock />
               <CalendarBlock />
            </>
         }
      />
   )
}

export default JoinPage