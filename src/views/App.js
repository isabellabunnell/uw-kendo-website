import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import AboutPage from "./AboutPage"
import HomePage from "./HomePage"
import InfoPage from "./InfoPage"
import JoinPage from "./JoinPage"
import FAQPage from "./FAQPage"
import VocabPage from "./VocabPage"
import WarmUpPage from "./WarmUpPage"
import EtiquettePage from "./EtiquettePage"
import LinkPage from "./LinkPage"
import AnnPage from "./AnnPage"
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
          path="/announcement"
          component={AnnPage}
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
          path="/warm-up"
          component={WarmUpPage}
        />
        <Route
          path="/etiquette"
          component={EtiquettePage}
        />
        <Route
          path="/useful-link"
          component={LinkPage}
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
