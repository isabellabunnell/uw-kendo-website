import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AboutPage from './AboutPage';
import HomePage from "./HomePage"
export const IMAGE_PATH = process.env.PUBLIC_URL + "/images"
export const WEB_URL = "/uw-kendo-website"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path={`${WEB_URL}/about`}
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
