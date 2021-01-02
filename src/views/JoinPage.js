import React from "react"
import PageStructure from "../components/PageStructure"
import GalleryBlock from "../components/GalleryBlock"
import CalendarBlock from "../components/CalendarBlock"
import JoinBlock from "../components/JoinBlock"
import LocationBlock from "../components/LocationBlock"

const JoinPage = () => {
   return (
      <PageStructure
         content={
            <div style={{ marginTop: "3rem" }}>
               <JoinBlock />
               <LocationBlock />
               <CalendarBlock />
               <GalleryBlock />
            </div>
         }
      />
   )
}

export default JoinPage