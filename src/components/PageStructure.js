import React, { useEffect, useState } from "react"
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
      <>
         <NavBar />
         <Container fluid style={{ marginTop: "3rem" }}>
            <Row>
               <Col sm={1} />
               <Col sm={10}>
                  {content}
               </Col>
               <Col sm={1} />
            </Row>
         </Container>
      </>
   )
}

PageStructure.propTypes = {
   content: PropTypes.object
}

export default PageStructure