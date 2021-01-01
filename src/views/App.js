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
import * as LINK from "../data/link"

export const IMAGE_PATH = process.env.PUBLIC_URL + "/images"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path={LINK.ABOUT_URL}
          component={AboutPage}
        />
        <Route
          path={LINK.WHAT_IS_KENDO_URL}
          component={InfoPage}
        />
        <Route
          path={LINK.JOIN_URL}
          component={JoinPage}
        />
        <Route
          path={LINK.ANN_URL}
          component={AnnPage}
        />
        <Route
          path={LINK.FAQ_URL}
          component={FAQPage}
        />
        <Route
          path={LINK.VOCAB_URL}
          component={VocabPage}
        />
        <Route
          path={LINK.WARM_UP_URL}
          component={WarmUpPage}
        />
        <Route
          path={LINK.ETIQ_URL}
          component={EtiquettePage}
        />
        <Route
          path={LINK.USEFUL_LINK_URL}
          component={LinkPage}
        />
        <Route
          path={LINK.BASE_URL}
          component={HomePage}
        />
      </Switch>
    </Router>
  )
}

export default App
