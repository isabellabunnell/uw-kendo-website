import React from "react"
import PropTypes from "prop-types"
import { IMAGE_PATH } from "../views/App"

const SocialMediaBlock = ({
   color
}) => {
   return (
      <div className="social-media-block">
         <a href="https://www.facebook.com/uwkendoclub">
            <img
               src={`${IMAGE_PATH}/info/fb-logo${color ? "-color" : ""}.png`}
               width="45px" className="fb-media"
            />
         </a>
         <a href="https://www.instagram.com/kendo_uw/">
            <img src={`${IMAGE_PATH}/info/ins-logo${color ? "-color" : ""}.png`} width="45px" />
         </a>
      </div>
   )
}

SocialMediaBlock.propTypes = {
   color: PropTypes.bool
}

export default SocialMediaBlock