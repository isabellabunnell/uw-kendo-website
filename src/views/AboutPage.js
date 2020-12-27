import React from "react"
import InfoBlock from "../components/InfoBlock"
import PageStructure from "../components/PageStructure"
import { clubInfo } from "../data/info"

const AboutPage = () => {
   return (
      <PageStructure
         content={
            <div style={{ marginTop: "2rem" }}>
               <InfoBlock
                  title={clubInfo.title}
                  content={clubInfo.content}
                  img={clubInfo.img}
               />
            </div>
         }
      />
   )
}

export default AboutPage