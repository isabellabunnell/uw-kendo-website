import React, { useState } from "react"
import PositionBlock from "./PositionBlock"
import { Pagination } from "@material-ui/lab"
import { Row, Col } from "react-bootstrap"
import { reducePeopleMapToList } from "../functions/utils"

const PeopleBlock = () => {
   const peopleMap = require("../data/people")
   const peopleList = reducePeopleMapToList(peopleMap)

   return (
      <>
         <div>
            <h3 style={{ display: "inline" }}>
               People
            </h3>
         </div>
         <Row style={{ marginTop: "1rem" }}>
            {
               peopleList.map((people, idx) => 
                  <Col sm={4} key={`people-${idx}`} style={{ marginBottom: "1rem" }}>
                     <PositionBlock people={people} />
                  </Col>
               )
            }
         </Row>
      </>
   )
}

export default PeopleBlock