import React from "react"
import PageStructure from "../components/PageStructure"
import ToggleBlock from "../components/ToggleBlock"
import { faqList } from "../data/info"

const FAQPage = () => {
   return (
      <PageStructure
         content={
            <>
               <h3 style={{ marginBottom: "1rem" }}>
                  FAQ
               </h3>
               <ToggleBlock
                  infoList={faqList}
                  toggleName="Q"
                  collapseName="A"
               />
            </>
         }
      />
   )
}

export default FAQPage