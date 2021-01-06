import React, { useEffect, useState } from "react"
import PageStructure from "../components/PageStructure"
import { annList } from "../data/info"
import { IMAGE_PATH } from "./App"
import { Row, Col, Popover } from "react-bootstrap"

const AnnPage = () => {
   const [screenWidth, setScreenWidth] = useState(window.innerWidth)

   useEffect(() => {
      window.addEventListener("resize", () => {
         setScreenWidth(window.innerWidth)
      })
   }, [])

   const popover = (image) => (
      <Popover
         id={`popover-${image}`}
         className="ann-popover-layout"
         style={{ display: "block" }}
         hidden={screenWidth <= 767}
      >
        <Popover.Content >
         <img
               src={`${IMAGE_PATH}/${image}`}
               alt={image}
               width="100%"
               style={{
                  objectFit: "cover",
                  marginBottom: "2rem",
                  float: "left"
               }}
            />
        </Popover.Content>
      </Popover>
    )

   return (
      <PageStructure
         content={
            <>
               <h3 style={{ marginBottom: "2rem" }}>
                  Announcement
               </h3>
               <Row>
                  {
                     annList.map((ann, annIdx) => (
                        <Col key={`ann-${annIdx}`} md={4} sm={6} className="ann-block-layout">
                           <img
                              src={`${IMAGE_PATH}/${ann.img}`}
                              alt={ann.img}
                              width="100%"
                              height={screenWidth > 575 && "50%"}
                              style={{
                                 objectFit: "cover",
                                 marginBottom: "2rem",
                                 float: "left"
                              }}
                           />
                           <h6>{ann.title}</h6>
                           <h6 style={{ fontWeight: "lighter" }}>{ann.date}</h6>
                           <p>{ann.content}</p>
                        </Col>
                     ))
                  }
               </Row>
            </>
         }
      />
   )
}

export default AnnPage