import React from "react"
import PositionBlock from "./PositionBlock"
import { Row, Col } from "react-bootstrap"
import { reducePeopleMapToList } from "../functions/utils"

const InstructorsBlock = () => {
   const instructorsMap = require("../data/instructors")
   const instructorsList = reducePeopleMapToList(instructorsMap)

   return (
      <>
         <h3>
            Instructors
         </h3>
         <Row style={{ marginTop: "1rem" }}>
            {
               instructorsList.map((instructor, idx) => 
                  <Col sm={4} key={`instructor-${idx}`} style={{ marginBottom: "1rem" }}>
                     <PositionBlock people={instructor} />
                  </Col>
               )
            }
         </Row>
      </>
   )
}

export default InstructorsBlock