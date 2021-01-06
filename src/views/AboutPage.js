import React from "react"
import AwardsBlock from "../components/AwardsBlock"
import HistoryBlock from "../components/HistoryBlock"
import InfoBlock from "../components/InfoBlock"
import InstructorsBlock from "../components/InstructorsBlock"
import PageStructure from "../components/PageStructure"
import PeopleBlock from "../components/PeopleBlock"
import { clubInfo } from "../data/info"

const AboutPage = () => {
   return (
      <PageStructure
         content={
            <>
               <InfoBlock
                  title={clubInfo.title}
                  content={clubInfo.content}
                  image={clubInfo.img}
                  textRight={false}
               />
               <div style={{ marginTop: "2rem" }}>
                  <HistoryBlock />
               </div>
               <div style={{ marginTop: "2rem" }}>
                  <AwardsBlock />
               </div>
               <div style={{ marginTop: "2rem" }}>
                  <InstructorsBlock />
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