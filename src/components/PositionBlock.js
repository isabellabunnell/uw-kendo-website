import React from "react"
import PropTypes from "prop-types"
import { IMAGE_PATH } from "../views/App"

const PositionBlock = ({
   people
}) => {
   return (
      <div className="position-block-layout">
         <img
            width="250px"
            height="250px"
            src={
               people.image ?
               `${IMAGE_PATH}/${people.image}` :
               `${IMAGE_PATH}/officers/placeholder.png`
            }
            className="position-image"
            alt={people.image}
         />
         <div>
            <h5>{people.name}</h5>
            <h5 style={{ fontStyle: "italic" }}>{people.place}</h5>
            <h5 style={{ fontWeight: "bolder" }}>{people.position}</h5>
         </div>
         
      </div>
   )
}

PositionBlock.propTypes = {
   people: PropTypes.object
}

export default PositionBlock