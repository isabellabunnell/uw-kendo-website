import React from "react"
import PageStructure from "../components/PageStructure"
import ToggleBlock from "../components/ToggleBlock"
import { uwTaikaiInfo } from "../data/info"

const UWTaikaiPage = () => {
   return (
      <PageStructure
         content={
            <>
               <h3 style={{ marginBottom: "1rem" }}>
                  UW Taikai Info
               </h3>
               <ToggleBlock
                  infoList={uwTaikaiInfo}
                  toggleName="Q"
                  collapseName="A"
               />
            </>
         }
      />
   )
}

export default UWTaikaiPage