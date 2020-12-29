import React from "react"
import InfoBlock from "../components/InfoBlock"
import PageStructure from "../components/PageStructure"
import { sportInfo } from "../data/info"

const InfoPage = () => {
   return (
      <PageStructure
         content={
            <>
               <div style={{ marginTop: "2rem" }}>
                  {
                     sportInfo.map((info, idx) => (
                        <InfoBlock
                           title={info.title}
                           content={info.content}
                           image={info.img}
                           key={`info-${idx}`}
                           textRight={idx % 2 === 1}
                        />
                     ))
                  }
               </div>
            </>
         }
      />
   )
}

export default InfoPage