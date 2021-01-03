import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { IMAGE_PATH } from "../views/App"
import { BASE_URL } from "../data/link"

const LogoTitle = ({
   image,
   white
}) => {
   return (
      <Link className="logo-title-layout" to={BASE_URL}>
         <img
            alt="kendo uw logo"
            height="113"
            src={`${IMAGE_PATH}${image || "/info/club-logo.png"}`}
            style={{ marginRight: "1rem" }}
         />
         <p className={`logo-title-font${white ? "-white" : ""}`}>Kendo Club</p>
      </Link>
   )
}

LogoTitle.propTypes = {
   image: PropTypes.string,
   white: PropTypes.bool
}

export default LogoTitle