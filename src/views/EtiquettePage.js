import React from "react"
import PageStructure from "../components/PageStructure"
import ToggleBlock from "../components/ToggleBlock"
import { etiqList } from "../data/info"

const EtiquettePage = () => {
   return (
      <PageStructure
         content={
            <>
               <h3 style={{ marginBottom: "1rem" }}>
                  Etiquette
               </h3>
               <ToggleBlock
                  infoList={etiqList}
                  toggleName="abstract"
                  collapseName="detail"
               />
            </>
         }
      />
   )
}

export default EtiquettePage