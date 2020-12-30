import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import AboutPage from "./AboutPage"
import HomePage from "./HomePage"
import InfoPage from "./InfoPage"
import JoinPage from "./JoinPage"
import FAQPage from "./FAQPage"
import VocabPage from "./VocabPage"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

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
          path="/faq"
          component={FAQPage}
        />
        <Route
          path="/vocab"
          component={VocabPage}
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
