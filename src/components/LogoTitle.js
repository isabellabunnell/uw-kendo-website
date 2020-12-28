import React from "react"
import { Link } from "react-router-dom"
import { IMAGE_PATH } from "../views/App"

const LogoTitle = () => {
   return (
      <Link className="logo-title-layout" to="/">
         <img
            alt="kendo uw logo"
            width="113"
            height="113"
            src={`${IMAGE_PATH}/logo.png`}
            style={{ marginRight: "1rem" }}
         />
         <p className="logo-title-font">UW Kendo</p>
      </Link>
   )
}

export default LogoTitle