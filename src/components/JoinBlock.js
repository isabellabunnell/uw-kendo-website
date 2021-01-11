import React from "react"
import { Button } from "react-bootstrap"
import { JOIN_MAIL_URL } from "../data/info"

const JoinBlock = () => {
   return (
      <div style={{ marginBottom: "2rem" }}>
         <h3 style={{ marginBottom: "1rem" }}>
            Mailing List
         </h3>
         <p>
            We send out emails once a week with information on resources, practice schedules, etc. Joining our mailing list is the best way of getting the latest news from us. We look forward to hearing from you!
         </p>
         <Button
            className="join-button-font"
            id="join-button"
            variant="primary"
            onClick={() => window.location=JOIN_MAIL_URL}
         >
            Join our mailing list
         </Button>
      </div>
   )
}

export default JoinBlock