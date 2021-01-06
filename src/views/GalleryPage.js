import React from "react"
import PageStructure from "../components/PageStructure"
import GalleryBlock from "../components/GalleryBlock"

const GalleryPage = () => {
   return (
      <PageStructure
         content={
            <GalleryBlock />
         }
      />
   )
}

export default GalleryPage