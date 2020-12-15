import React, { useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import DropdownNav from "../components/DropdownNav"
import LogoTitle from "../components/LogoTitle"
import NavBar from "../components/NavBar"

const HomePage = () => {
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
                     screenWidth < 1192 ?
                     <DropdownNav />
                     :
                     <NavBar />
                  }
               </div>
               <div
                  style={{
                     backgroundColor: "#5B3080",
                     width: "100%",
                     height: screenHeight * 0.5,
                     marginTop: "2.4rem",
                     marginBottom: "2.4rem"
                  }}
               />
               <div className="home-join-layout">
                  <p className="home-join-font">
                     Come join the Kendo Club at the University of Washington today!
                  </p>
                  <Button
                     className="home-join-button-font"
                     variant="primary"
                     style={{ backgroundColor: "#5B3080", borderColor: "#5B3080" }}
                  >
                     Join our mailing list
                  </Button>
               </div>
            </Col>
            <Col sm={1} />
         </Row>
      </Container>
   )
}

export default HomePage