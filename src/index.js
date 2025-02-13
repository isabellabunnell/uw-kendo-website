import "./styles/styles.css"
import React from "react"
import ReactDOM from "react-dom"
import App from "./views/App"
import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    <div>
      <p>The Kendo Club at University of Washington has a new website found at https://sites.uw.edu/uwkc</p>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
