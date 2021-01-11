import React from "react"
import PageStructure from "../components/PageStructure"
import ToggleBlock from "../components/ToggleBlock"
import { warmUpList } from "../data/info"

const WarmUpPage = () => {
   return (
      <PageStructure
         content={
            <>
               <h3 style={{ marginBottom: "1rem" }}>
                  Warm Up
               </h3>
               <ToggleBlock
                  infoList={warmUpList}
                  toggleName="abstract"
                  collapseName="detail"
               />
            </>
         }
      />
   )
}

export default WarmUpPage