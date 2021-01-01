import React, { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import LogoTitle from "../components/LogoTitle"
import { Button, Col, Container, Row } from "react-bootstrap"
import { JOIN_MAIL_URL } from "../data/info"
import { IMAGE_PATH } from "./App"

const HomePage = () => {
   const [screenHeight, setScreenHeight] = useState(window.innerHeight)
   const [screenWidth, setScreenWidth] = useState(window.innerWidth)

   useEffect(() => {
      window.addEventListener("resize", () => {
         setScreenHeight(window.innerHeight)
         setScreenWidth(window.innerWidth)
      })
   }, [])

   document.body.style.backgroundColor = "#5B3080"
   document.body.style.innerHeight = "1000px"   

   return (
      <>
         <NavBar />
         <Container fluid
            style={{
               backgroundImage: `url(${IMAGE_PATH}/info/home.png)`,
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               backgroundPosition: "center",
               height: `calc(100vh - 75px)`,
            }}
         >
            <Row>
               <Col sm={1} />
               <Col sm={10}>
                  <div className="top-bar-layout" style={{ marginTop: screenHeight * 0.06 }}>
                     <LogoTitle image="/info/club-logo-white.png" white />
                  </div>
                  <div className="home-join-layout" style={{ marginTop: `calc(50vh - 75px)` }}>
                     <p className="home-join-font">
                        Come join the Kendo Club at the University of Washington today!
                     </p>
                     <Button
                        className="home-join-button-font"
                        variant="primary"
                        style={{ backgroundColor: "white", color: "#5B3080", border: "none" }}
                        onClick={() => window.location=JOIN_MAIL_URL}
                     >
                        Join our mailing list
                     </Button>
                  </div>
               </Col>
               <Col sm={1} />
            </Row>
         </Container>
      </>
   )
}

export default HomePage