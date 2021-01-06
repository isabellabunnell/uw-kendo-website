import React from "react"
import PropTypes from "prop-types"
import { Table } from "react-bootstrap"

const EventAwards = ({
   event
}) => {
   const title = Object.keys(event)[0]
   const awards = event[title]

   return (
      <div className="awards-table">
         <h5>
            {title}
         </h5>
         <Table striped bordered hover>
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Division</th>
                  <th>Place</th>
               </tr>
            </thead>
            <tbody>
               {
                  awards.map((info, idx) => (
                     <tr key={`awards-table-row-${idx}`}>
                        <td>{info.name ? info.name : "-"}</td>
                        <td>{info.division ? info.division : "-"}</td>
                        <td>{info.place ? info.place : "-"}</td>
                     </tr>
                  ))
               }
            </tbody>
         </Table>
      </div>
   )
}

EventAwards.propTypes = {
   event: PropTypes.object
}

export default EventAwards