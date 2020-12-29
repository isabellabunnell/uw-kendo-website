import React, { useState } from "react"
import PositionBlock from "./PositionBlock"
import { Pagination } from "@material-ui/lab"
import { Row, Col } from "react-bootstrap"
import { reducePeopleMapToList } from "../functions/utils"

const PeopleBlock = () => {
   const cntPerPage = 9
   const peopleMap = require("../data/people")
   const peopleList = reducePeopleMapToList(peopleMap)
   const [activePage, setActivePage] = useState(1)
   const activePeople = peopleList.slice((activePage-1) * cntPerPage, activePage * cntPerPage)

   return (
      <>
         <div>
            <h3 style={{ display: "inline" }}>
               People
            </h3>
            <Pagination
               size="large"
               count={Math.ceil(peopleList.length / cntPerPage)}
               defaultPage={1}
               color="primary"
               onChange={(_, page) => setActivePage(page)}
               style={{ float: "right"}}
            />
         </div>
         <Row style={{ marginTop: "1rem" }}>
            {
               activePeople.map((people, idx) => 
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