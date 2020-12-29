import "bootstrap/dist/css/bootstrap.min.css";
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AboutPage from "./AboutPage"
import HomePage from "./HomePage"
export const IMAGE_PATH = process.env.PUBLIC_URL + "/images"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/about"
          component={AboutPage}
        />
        <Route
          path="/"
          component={HomePage}
        />
      </Switch>
    </Router>
  )
}

export default App
