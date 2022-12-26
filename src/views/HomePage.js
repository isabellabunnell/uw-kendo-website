import React from "react"
import Banner from 'react-js-banner';
import NavBar from "../components/NavBar"
import SocialMediaBlock from "../components/SocialMediaBlock"
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
         <NavBar />
         <Banner
             title="For information about the 50th Anniversary Keiko & Mixer in January 7th 2023, please click on '50th Anniversary Info'."
             css={{ color: "#000", backgroundColor: "goldenrod", fontFamily: "verdana" }}
             visibleTime={60000}
         />
         <Container fluid className="home-text-layout">
            <Row>
               <Col sm={1} />
               <Col sm={10}>
                  <p className="logo-title-font-white">Kendo Club @ UW</p>
                  <div className="home-join-layout">
                     <p className="home-join-font">
                        Come join the Kendo Club at the University of Washington today!
                     </p>
                     <p className="home-times-font">
                        Practices at 7:00-9:00 Wednesdays (IMA Gym B) and Fridays (IMA Gym D)
                    </p>
                     <div id="home-control">
                        <Button
                           id="home-join-button"
                           className="home-join-button-font margin-right-1"
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
