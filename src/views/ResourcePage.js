import "react-calendar/dist/Calendar.css"
import React from "react"
import FAQBlock from "../components/FAQBlock"
import PageStructure from "../components/PageStructure"

const ResourcePage = () => {
   return (
      <PageStructure
         content={
            <>
               <FAQBlock />
            </>
         }
      />
   )
}

export default ResourcePage