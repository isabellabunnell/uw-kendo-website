import React, { useState } from "react"
import SocialMediaBlock from "./SocialMediaBlock"
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
            <div id="gallery-control">
               <div className="margin-right-1">
                  <SocialMediaBlock color />
               </div>
               <Dropdown>
                  <Dropdown.Toggle variant="success" id="gallery-dropdown">
                     {event}
                  </Dropdown.Toggle>
                  <Dropdown.Menu id="gallery-drop-menu">
                     {
                        Object.keys(galleryMap).filter(group => group !== event).map((group, groupIdx) => (
                           <Dropdown.Item key={`gallery-drop-${groupIdx}`}
                              onSelect={(_, event) => setEvent(event.target.innerText)}
                           >{group}</Dropdown.Item>
                        ))
                     }
                  </Dropdown.Menu>
               </Dropdown>
            </div>
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
         <p style={{ marginTop: "1rem", textAlign: "center" }}>Most of our photos are taken by Kendo Photography and alumni</p>
      </div>
   )
}

export default GalleryBlock