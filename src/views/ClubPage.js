import React from "react"
import HistoryBlock from "../components/HistoryBlock"
import InfoBlock from "../components/InfoBlock"
import PageStructure from "../components/PageStructure"
import { clubInfo } from "../data/info"

const ClubPage = () => {
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
            </>
         }
      />
   )
}

export default ClubPage