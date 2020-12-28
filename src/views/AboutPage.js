import React from "react"
import AwardsBlock from "../components/AwardsBlock"
import InfoBlock from "../components/InfoBlock"
import PageStructure from "../components/PageStructure"
import PeopleBlock from "../components/PeopleBlock"
import { clubInfo } from "../data/info"

const AboutPage = () => {
   return (
      <PageStructure
         content={
            <>
               <div style={{ marginTop: "2rem" }}>
                  <InfoBlock
                     title={clubInfo.title}
                     content={clubInfo.content}
                     img={clubInfo.img}
                  />
               </div>
               <div style={{ marginTop: "2rem" }}>
                  <AwardsBlock />
               </div>
               <div style={{ marginTop: "2rem" }}>
                  <PeopleBlock />
               </div>
            </>
         }
      />
   )
}

export default AboutPage