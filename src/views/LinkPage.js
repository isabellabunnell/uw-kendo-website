import React from "react"
import PageStructure from "../components/PageStructure"
import ToggleBlock from "../components/ToggleBlock"
import { linkMap } from "../data/info"

const LinkPage = () => {
   const linkList = Object.keys(linkMap).map((group, groupIdx) => ({
      group,
      links: (
         <div>
            {
               linkMap[group].map((link, linkIdx) => (
                  <div key={`group-${groupIdx}-link-${linkIdx}`}>
                     <a href={link.address}>{link.name}</a>
                     <p>{link.abstract}</p>
                  </div>
               ))
            }
         </div>
      )
   }))

   return (
      <PageStructure
         content={
            <div style={{ marginTop: "3rem" }}>
               <h3 style={{ marginBottom: "1rem" }}>
                  Links
               </h3>
               <ToggleBlock
                  infoList={linkList}
                  toggleName="group"
                  collapseName="links"
               />
            </div>
         }
      />
   )
}

export default LinkPage