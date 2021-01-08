import React from "react"
import AwardsBlock from "../components/AwardsBlock"
import PageStructure from "../components/PageStructure"

const AwardsPage = () => {
   return (
      <PageStructure
         content={
            <AwardsBlock />
         }
      />
   )
}

export default AwardsPage