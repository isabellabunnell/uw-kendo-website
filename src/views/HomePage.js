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

   return (
      <div
         style={{
            backgroundColor: "#5B3080",
            backgroundImage: `url(${IMAGE_PATH}/info/home.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh"
         }}
      >
         <NavBar transparent />
         <Container fluid>
            <Row>
               <Col sm={1} />
               <Col sm={10}>
                  <div className="top-bar-layout" style={{ marginTop: screenHeight * 0.06 }}>
                     <LogoTitle image="/info/club-logo-white.png" white />
                  </div>
                  <div className="home-join-layout" style={{ marginTop: "30%" }}>
                     <p className="home-join-font">
                        Come join the Kendo Club at the University of Washington today!
                     </p>
                     <div>
                        <Button
                           className="home-join-button-font margin-right-1"
                           variant="primary"
                           style={{ backgroundColor: "white", color: "#5B3080", border: "none" }}
                           onClick={() => window.location=JOIN_MAIL_URL}
                        >
                           Join our mailing list
                        </Button>
                        <div className="home-social-media-block">
                           <a href="https://www.facebook.com/uwkendoclub">
                              <img
                                 src={`${IMAGE_PATH}/info/fb-logo.png`}
                                 width="45px" className="margin-right-1"
                              />
                           </a>
                           <a href="https://www.instagram.com/kendo_uw/">
                              <img src={`${IMAGE_PATH}/info/ins-logo.png`} width="45px" />
                           </a>
                        </div>
                     </div>
                  </div>
               </Col>
               <Col sm={1} />
            </Row>
         </Container>
      </div>
   )
}

export default HomePage