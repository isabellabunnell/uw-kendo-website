import React from "react"
import PageStructure from "../components/PageStructure"
import GalleryBlock from "../components/GalleryBlock"
import CalendarBlock from "../components/CalendarBlock"
import JoinBlock from "../components/JoinBlock"

const JoinPage = () => {
   return (
      <PageStructure
         content={
            <div style={{ marginTop: "3rem" }}>
               <CalendarBlock />
               <GalleryBlock />
               <JoinBlock />
            </div>
         }
      />
   )
}

export default JoinPage