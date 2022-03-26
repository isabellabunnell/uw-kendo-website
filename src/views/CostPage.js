import React from "react"
import PageStructure from "../components/PageStructure"
import ToggleBlock from "../components/ToggleBlock"
import GeneralCostBlock from "../components/GeneralCostBlock"
import { Table } from "react-bootstrap"

const CostPage = () => {
   const quarterCostMap = require("../data/quartercosts")
   const quarterCostList = Object.keys(quarterCostMap).map((section, sectionIdx) => (
      {
         section,
         costs: (
            <Table striped bordered hover>
               <thead>
                  <tr>
                     <th>Item</th>
                     <th>Price</th>
                  </tr>
               </thead>
            {
               quarterCostMap[section].map((costs, priceIdx) => (
                  <tr key={`vocab-section-${sectionIdx}-${priceIdx}`}>
                     <td>{costs.item}</td>
                     <td>{costs.price}</td>
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
               <GeneralCostBlock/>
               <h2 style={{ marginBottom: "1rem" }}>
                  Quarter costs
               </h2>
               <ToggleBlock
                  infoList={quarterCostList}
                  toggleName="section"
                  collapseName="costs"
               />
            </>
         }
      />
   )
}

export default CostPage