import React from "react"
import PageStructure from "../components/PageStructure"
import ToggleBlock from "../components/ToggleBlock"

const AnnPage = () => {
   return (
      <PageStructure
         content={
            <div style={{ marginTop: "3rem" }}>
               <h3 style={{ marginBottom: "1rem" }}>
                  Announcement
               </h3>
            </div>
         }
      />
   )
}

export default AnnPage