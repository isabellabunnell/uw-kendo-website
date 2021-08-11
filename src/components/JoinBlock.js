import React from "react"
import { Button } from "react-bootstrap"
import { JOIN_MAIL_URL } from "../data/info"
import { JOIN_FB_URL } from "../data/info"

const JoinBlock = () => {
   return (
      <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ marginBottom: "1rem" }}>
           Facebook 
         </h3>
         <p>Our most updated information on tournaments, awards, events, and practices are also on our Facebook page! Check out our page for the latest information!
         </p>
         <Button
            className="join-button-font"
            id="join-button"
            variant="primary"
            onClick={() => window.location=JOIN_FB_URL}
         >
           Follow us on Facebook 
         </Button>
         <h3 style={{ marginTop:"2rem", marginBottom: "1rem" }}>
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
