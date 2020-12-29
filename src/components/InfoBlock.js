import React from "react"
import { Col, Row } from "react-bootstrap"
import { IMAGE_PATH } from "../views/App"
import PropTypes from "prop-types"

const InfoBlock = ({
   title,
   content,
   img
}) => {
   return (
      <Row>
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
         <Col sm={6}>
            <div
               style={{
                  backgroundImage: `url(${IMAGE_PATH}/${img})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "right",
                  height: "100%",
                  width: "100%"
               }}
            />
         </Col>
      </Row>
   )
}

InfoBlock.propTypes = {
   title: PropTypes.string,
   content: PropTypes.string,
   img: PropTypes.string
}

export default InfoBlock