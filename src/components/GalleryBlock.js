import React, { useState } from "react"
import { Carousel, Dropdown } from "react-bootstrap"
import { galleryMap } from "../data/info"
import { IMAGE_PATH } from "../views/App"

const GalleryBlock = () => {
   const [event, setEvent] = useState(Object.keys(galleryMap)[0])

   return (
      <div style={{ marginBottom: "2rem" }}>
         <div id="gallery-title-layout">
            <h3 style={{ marginBottom: "1rem", marginRight: "2rem" }}>
               Gallery
            </h3>
            <Dropdown style={{ marginBottom: "2rem" }}>
               <Dropdown.Toggle variant="success" id="gallery-dropdown">
                  {event}
               </Dropdown.Toggle>
               <Dropdown.Menu id="gallery-drop-menu">
                  {
                     Object.keys(galleryMap).map((group, groupIdx) => (
                        <Dropdown.Item key={`gallery-drop-${groupIdx}`}
                           onSelect={(_, event) => setEvent(event.target.innerText)}
                        >{group}</Dropdown.Item>
                     ))
                  }
               </Dropdown.Menu>
            </Dropdown>
         </div>
         <Carousel>
            {
               galleryMap[event].map((image, imageIdx) => (
                  <Carousel.Item key={`gallery-image-${imageIdx}`}>
                     <img
                        width="100%"
                        src={`${IMAGE_PATH}/gallery/${event}/${image}`}
                        alt={`${event}/${image}`}
                        style={{ borderRadius: "5px" }}
                     />
                     <Carousel.Caption>
                        <h3>{event}</h3>
                     </Carousel.Caption>
                  </Carousel.Item>
               ))
            }
         </Carousel>
      </div>
   )
}

export default GalleryBlock