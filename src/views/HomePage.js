import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import LogoTitle from "../components/LogoTitle"
import NavBar from "../components/NavBar"

const HomePage = () => {

   return (
      <Container>
         <div className="top-bar-layout">
            <LogoTitle />
            <NavBar />
         </div>
         <div
            style={{
               backgroundColor: "#5B3080",
               width: "100%",
               height: "20rem",
               marginTop: "3.75rem",
               marginBottom: "2.4rem"
            }}
         />
         <div className="home-join-layout">
            <p className="home-join-font">
               Come join the Kendo Club at the University of Washington today!
            </p>
            <Button
               className="home-join-button-font"
               style={{ backgroundColor: "#5B3080", borderColor: "#5B3080" }}
            >
               Join our mailing list
            </Button>
         </div>
      </Container>
   )
}

export default HomePage