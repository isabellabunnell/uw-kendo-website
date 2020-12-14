import React from "react"
import { IMAGE_PATH } from "../views/App"

const LogoTitle = () => {
   return (
      <div className="logo-title-layout">
         <img
            alt="kendo uw logo"
            width="113"
            height="113"
            src={`${IMAGE_PATH}/logo.png`}
            style={{ marginRight: "1rem" }}
         />
         <p className="logo-title-font">UW Kendo</p>
      </div>
   )
}

export default LogoTitle