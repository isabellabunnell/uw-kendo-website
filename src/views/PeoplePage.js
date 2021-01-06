import React from "react"
import InstructorsBlock from "../components/InstructorsBlock"
import PageStructure from "../components/PageStructure"
import PeopleBlock from "../components/PeopleBlock"

const PeoplePage = () => {
   return (
      <PageStructure
         content={
            <>
               <div style={{ marginBottom: "2rem" }}>
                  <InstructorsBlock />
               </div>
               <div>
                  <PeopleBlock />
               </div>
            </>
         }
      />
   )
}

export default PeoplePage