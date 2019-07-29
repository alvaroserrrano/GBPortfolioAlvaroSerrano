import React from "react"
import { createMemoryHistory } from "history"
import { Route, Router, Switch } from "react-router-dom"

import "assets/scss/material-kit-react.scss?v=1.4.0"
import "typeface-roboto"
import "typeface-roboto-slab"
// pages for this product
import Components from "./Components/Components.jsx"
import LandingPage from "./LandingPage/LandingPage.jsx"
import ResumePage from "./ResumePage/ResumePage.jsx"
import ProjectsPage from "./ProjectsPage/ProjectsPage.jsx"

let hist = createMemoryHistory()

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/resume" component={ResumePage} />
      <Route path="/login-page" component={ProjectsPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>
)
