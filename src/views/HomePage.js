import React, { useEffect, useState } from "react"
import PageStructure from "../components/PageStructure"
import { Button} from "react-bootstrap"
import { JOIN_MAIL_URL } from "../data/info"

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
      <PageStructure content={
         <>
         <div
            style={{
               backgroundColor: "#5B3080",
               // backgroundImage: `url(${IMAGE_PATH}/home.png)`,
               // backgroundSize: "contain",
               // backgroundRepeat: "no-repeat",
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
               onClick={() => window.location=JOIN_MAIL_URL}
            >
               Join our mailing list
            </Button>
         </div>
         </>
      }
      />
   )
}

export default HomePage