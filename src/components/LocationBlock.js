import React from "react"

const LocationBlock = () => {
   return (
      <div style={{ marginBottom: "2rem" }}>
         <h3 style={{ marginBottom: "1rem" }}>
            Location
         </h3>
         <h5>University of Washington Intramural Activities (IMA) Building</h5>
         <h6>Address: 3924 Montlake Blvd NE, Seattle, WA 98195</h6>
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.586808536266!2d-122.3037739490886!3d47.65359569262189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab51eccdb73%3A0x11ed37d4b0f35c56!2sUniversity%20of%20Washington%20Intramural%20Activities%20(IMA)%20Building!5e0!3m2!1sen!2sus!4v1609574297467!5m2!1sen!2sus"
            width="100%" height="300" frameBorder="0" style={{ border: 0, marginTop: "1rem" }} allowFullScreen="" aria-hidden="false" tabIndex="0">
         </iframe>
      </div>
   )
}

export default LocationBlock