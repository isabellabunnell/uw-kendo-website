import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import HomePage from "./HomePage"
import InfoPage from "./InfoPage"
import JoinPage from "./JoinPage"
import FAQPage from "./FAQPage"
import UWTaikaiPage from "./UWTaikaiPage"
import UWFiftiethAnniversaryPage from "./UWFiftiethAnniversaryPage"
import VocabPage from "./VocabPage"
import WarmUpPage from "./WarmUpPage"
import EtiquettePage from "./EtiquettePage"
import LinkPage from "./LinkPage"
import AnnPage from "./AnnPage"
import PeoplePage from "./PeoplePage"
import AwardsPage from "./AwardsPage"
import GalleryPage from "./GalleryPage"
import ClubPage from "./ClubPage"
import CostPage from "./CostPage"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import * as LINK from "../data/link"

export const IMAGE_PATH = process.env.PUBLIC_URL + "/images"

const App = () => {
  return (
    
    <Router>
      <Switch>
        <Route
          path={LINK.PEOPLE_URL}
          component={PeoplePage}
        />
        <Route
          path={LINK.AWARDS_URL}
          component={AwardsPage}
        />
        <Route
          path={LINK.GALLERY_URL}
          component={GalleryPage}
        />
        <Route
          path={LINK.THE_CLUB_URL}
          component={ClubPage}
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
          path={LINK.UW_TAIKAI_URL}
          component={UWTaikaiPage}
        />
        <Route
          path={LINK.FIFTIETH_ANNIVERSARY_URL}
          component={UWFiftiethAnniversaryPage}
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
          path={LINK.COST_SHEET_URL}
          component={CostPage}
        />
        <Route
          path="*"
          component={HomePage}
        />
        {/*<Route
          path={"sites.uw.edu/uwkc"}
          component={PeoplePage}
        />*/}
      </Switch>
    </Router>
    
  )
}

export default App
