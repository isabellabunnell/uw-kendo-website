import React, { useEffect, useState } from "react"
import DropdownNav from "./DropdownNav"
import LogoTitle from "./LogoTitle"
import NavBar from "./NavBar"
import PropTypes from "prop-types"
import { Col, Container, Row } from "react-bootstrap"

const PageStructure = ({
   content
}) => {
   const [screenHeight, setScreenHeight] = useState(window.innerHeight)
   const [screenWidth, setScreenWidth] = useState(window.innerWidth)

   useEffect(() => {
      window.addEventListener("resize", () => {
         setScreenHeight(window.innerHeight)
         setScreenWidth(window.innerWidth)
      })
   }, [])

   return (
      <Container fluid>
         <Row>
            <Col sm={1} />
            <Col sm={10}>
               <div
                  className="top-bar-layout"
                  style={{ marginTop: screenHeight * 0.1 }}
               >
                  <LogoTitle />
                  {
                     screenWidth < 1400 ?
                     <DropdownNav />
                     :
                     <NavBar />
                  }
               </div>
               {content}
            </Col>
            <Col sm={1} />
         </Row>
      </Container>
   )
}

PageStructure.propTypes = {
   content: PropTypes.object
}

export default PageStructure