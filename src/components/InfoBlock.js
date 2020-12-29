import React from "react"
import PropTypes from "prop-types"
import { Col, Row } from "react-bootstrap"
import { IMAGE_PATH } from "../views/App"

const InfoBlock = ({
   title,
   content,
   img,
   textRight
}) => {
   const TextBlock = () => (
      <Col sm={6}>
         <h3 style={{ marginTop: "1rem" }}>
            {title}
         </h3>
         {
            content.split("\n").map((part, partIdx) => (
               <p key={`info-${partIdx}`} style={{ marginBottom: "1rem" }}>
                  {part}
               </p>
            ))
         }
      </Col>
   )

   const ImgBlock = () => (
      <Col sm={6}>
         <img
            src={`${IMAGE_PATH}/${img}`}
            style={{ objectFit: "cover" }}
            width="100%"
         />
      </Col>
   )

   return (
      <Row style={{ marginBottom: "4rem" }}>
         {textRight ? <ImgBlock /> : <TextBlock />}
         {textRight ? <TextBlock /> : <ImgBlock />}
      </Row>
   )
}

InfoBlock.propTypes = {
   title: PropTypes.string,
   content: PropTypes.string,
   img: PropTypes.string,
   textRight: PropTypes.bool
}

export default InfoBlock