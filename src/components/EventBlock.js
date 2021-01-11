import React from "react"
import PropTypes from "prop-types"

const EventBlock = ({
   event
}) => {
   return (
      <div style={{ marginBottom: "2rem" }}>
         <p style={{ fontWeight: "lighter" }}>{`${event.start} - ${event.end ? event.end : "/"}`}</p>
         <h6>{`location: ${event.location}`}</h6>
         <h6>{`name: ${event.name}`}</h6>
      </div>
   )
}

EventBlock.propTypes = {
   event: PropTypes.object
}

export default EventBlock