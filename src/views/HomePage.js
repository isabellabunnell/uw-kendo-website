import React from "react"
import NavBar from "../components/NavBar"
import { Button, Col, Container, Row } from "react-bootstrap"
import { JOIN_MAIL_URL } from "../data/info"
import { IMAGE_PATH } from "./App"

const HomePage = () => {
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
         <Container fluid className="home-text-layout">
            <Row>
               <Col sm={1} />
               <Col sm={10}>
                  <p className="logo-title-font-white">Kendo Club</p>
                  <div className="home-join-layout">
                     <p className="home-join-font">
                        Come join the Kendo Club at the University of Washington today!
                     </p>
                     <div>
                        <Button
                           id="home-join-button"
                           className="home-join-button-font margin-right-1"
                           variant="primary"
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