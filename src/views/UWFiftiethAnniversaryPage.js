import React from "react"
import PageStructure from "../components/PageStructure"
import ToggleBlock from "../components/ToggleBlock"
import { fiftiethanniversaryInfo } from "../data/info"

const UWFiftiethAnniversaryPage = () => {
   return (
      <PageStructure
         content={
            <>
               <h3 style={{ marginBottom: "1rem" }}>
                  50th Anniversary Info
               </h3>
                   <ToggleBlock
                      infoList={fiftiethanniversaryInfo}
                      toggleName="Q"
                      collapseName="A"
                   />
            </>
         }
      />
   )
}

export default UWFiftiethAnniversaryPage