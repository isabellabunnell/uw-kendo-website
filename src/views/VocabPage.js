import React from "react"
import PageStructure from "../components/PageStructure"
import ToggleBlock from "../components/ToggleBlock"
import { Table } from "react-bootstrap"

const VocabPage = () => {
   const vocabMap = require("../data/vocab")
   const vocabList = Object.keys(vocabMap).map((section, sectionIdx) => (
      {
         section,
         vocab: (
            <Table striped bordered hover>
               <thead>
                  <tr>
                     <th>Source</th>
                     <th>Meaning</th>
                  </tr>
               </thead>
            {
               vocabMap[section].map((vocab, vocabIdx) => (
                  <tr key={`vocab-section-${sectionIdx}-${vocabIdx}`}>
                     <td>{vocab.source}</td>
                     <td>{vocab.meaning}</td>
                  </tr>
               ))
            }
            </Table>
         )
      }
   ))

   return (
      <PageStructure
         content={
            <>
               <h3 style={{ marginBottom: "1rem" }}>
                  Vocabulary
               </h3>
               <ToggleBlock
                  infoList={vocabList}
                  toggleName="section"
                  collapseName="vocab"
               />
            </>
         }
      />
   )
}

export default VocabPage