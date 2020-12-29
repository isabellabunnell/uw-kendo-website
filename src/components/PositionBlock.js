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
            style={{ objectFit: "cover", borderRadius: "50%" }}
         />
         <div>
            <h5>{people.name}</h5>
            <h5 style={{ fontWeight: "bolder" }}>{people.position}</h5>
         </div>
         
      </div>
   )
}

PositionBlock.propTypes = {
   people: PropTypes.object
}

export default PositionBlock