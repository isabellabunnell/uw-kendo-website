import React from "react"
import { Carousel } from "react-bootstrap"
import { galleryMap } from "../data/info"
import { IMAGE_PATH } from "../views/App"

const GalleryBlock = () => {
   return (
      <div style={{ marginBottom: "2rem" }}>
         <h3 style={{ marginBottom: "1rem" }}>
            Gallery
         </h3>
         <Carousel>
            {
               Object.keys(galleryMap).map((group, groupIdx) => (
                  galleryMap[group].map((image, imageIdx) => (
                     <Carousel.Item key={`gallery-group-${groupIdx}-image-${imageIdx}`}>
                        {/* <div style={{ borderRadius: "1rem" }}> */}
                           <img
                              className="d-block w-100"
                              src={`${IMAGE_PATH}/gallery/${group}/${image}`}
                              alt={`${group}/${image}`}
                              style={{ borderRadius: "5px" }}
                           />
                        {/* </div> */}
                        
                        <Carousel.Caption>
                           <h3>{group}</h3>
                        </Carousel.Caption>
                     </Carousel.Item>
                  ))
               ))
            }
            
         </Carousel>
      </div>
   )
}

export default GalleryBlock