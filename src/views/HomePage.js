import React from "react"
import NavBar from "../components/NavBar"
import { Button, Col, Container, Row } from "react-bootstrap"
import { JOIN_MAIL_URL } from "../data/info"
import { IMAGE_PATH } from "./App"
import SocialMediaBlock from "../components/SocialMediaBlock"

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
                     <div id="home-control">
                        <Button
                           id="home-join-button"
                           className="home-join-button-font margin-right-1 margin-bottom-1"
                           variant="primary"
                           onClick={() => window.location=JOIN_MAIL_URL}
                        >
                           Join our mailing list
                        </Button>
                        <SocialMediaBlock />
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