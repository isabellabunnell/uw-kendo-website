import React, { useState } from "react"
import PropTypes from "prop-types"
import { Col, Row } from "react-bootstrap"
import { IMAGE_PATH } from "../views/App"
import { GrPrevious, GrNext } from "react-icons/gr"

const InfoBlock = ({
   title,
   content,
   image,
   video,
   textRight
}) => {
   const [showImage, setShowImage] = useState(true)

   const TextBlock = () => (
      <Col lg={6}>
         <h3 style={{ marginTop: "1rem" }}>
            {title}
         </h3>
         {
            content.split("\n").map((part, partIdx) => (
               typeof part === "object" ?
               <div key={`info-${partIdx}`} style={{ marginBottom: "1rem" }}>
                  {part}
               </div>
               :
               <p key={`info-${partIdx}`} style={{ marginBottom: "1rem" }}>
                  {part}
               </p>
            ))
         }
      </Col>
   )

   const ControlBlock = () => (
      <div className="media-block-control">
         <GrPrevious size="2rem" onClick={() => setShowImage(!showImage)} className="media-block-icon" />
         <GrNext size="2rem" onClick={() => setShowImage(!showImage)} className="media-block-icon" />
      </div>
   )

   const MediaBlock = () => (
      <Col lg={6}>
         {
            video ?
            <>
               { showImage ? <ImgBlock /> : <VideoBlock />}
               <ControlBlock />
            </>
            :
            <ImgBlock />
         }
      </Col>
   )

   const ImgBlock = () => (
      <img
         src={`${IMAGE_PATH}/${image}`}
         style={{ objectFit: "cover" }}
         alt={image}
         width="100%"
      />
   )

   const VideoBlock = () => (
      <iframe
         width="100%"
         height="500"
         src={video}
         frameBorder="0"
         allowFullScreen
      />
   )

   return (
      <Row style={{ marginBottom: "4rem", alignItems: "center" }}>
         {textRight ? <MediaBlock /> : <TextBlock />}
         {textRight ? <TextBlock /> : <MediaBlock />}
      </Row>
   )
}

InfoBlock.propTypes = {
   title: PropTypes.string,
   content: PropTypes.string,
   image: PropTypes.string,
   video: PropTypes.string,
   textRight: PropTypes.bool
}

export default InfoBlock