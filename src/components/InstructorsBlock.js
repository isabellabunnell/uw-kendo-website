import React, { useState } from "react"
import PositionBlock from "./PositionBlock"
import { Pagination } from "@material-ui/lab"
import { Row, Col } from "react-bootstrap"

const InstructorsBlock = () => {
   const instructorsMap = require("../data/instructors")
   const instructorsList = Object.keys(instructorsMap).reduce((res, position) =>
      [...res, ...instructorsMap[position].map(instructor => ({...instructor, position}))], [])

   console.log(instructorsList)

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