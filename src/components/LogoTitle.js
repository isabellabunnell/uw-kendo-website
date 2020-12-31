import React from "react"
import { Link } from "react-router-dom"
import { IMAGE_PATH } from "../views/App"
import PropTypes from "prop-types"

const LogoTitle = ({
   image,
   white
}) => {
   return (
      <Link className="logo-title-layout" to="/">
         <img
            alt="kendo uw logo"
            height="113"
            src={`${IMAGE_PATH}${image || "/info/club-logo.png"}`}
            style={{ marginRight: "1rem" }}
         />
         <p className={`logo-title-font${white ? "-white" : ""}`}>UW Kendo</p>
      </Link>
   )
}

LogoTitle.propTypes = {
   image: PropTypes.string,
   white: PropTypes.bool
}

export default LogoTitle