import React from "react"
import AwardsBlock from "../components/AwardsBlock"
import HistoryBlock from "../components/HistoryBlock"
import InfoBlock from "../components/InfoBlock"
import InstructorsBlock from "../components/InstructorsBlock"
import PageStructure from "../components/PageStructure"
import PeopleBlock from "../components/PeopleBlock"
import { clubInfo } from "../data/info"

const AwardsPage = () => {
   return (
      <PageStructure
         content={
            <AwardsBlock />
         }
      />
   )
}

export default AwardsPage