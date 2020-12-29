import "bootstrap/dist/css/bootstrap.min.css";
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AboutPage from "./AboutPage"
import HomePage from "./HomePage"
import InfoPage from "./InfoPage";
import JoinPage from "./JoinPage";

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
          path="/what-is-kendo"
          component={InfoPage}
        />
        <Route
          path="/join"
          component={JoinPage}
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
