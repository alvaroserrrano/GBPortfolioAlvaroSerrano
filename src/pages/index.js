import React, { Component } from "react"
import { createMemoryHistory } from "history"
import { Route, Router, Switch } from "react-router-dom"

import "assets/scss/material-kit-react.scss?v=1.4.0"
import "typeface-roboto"
import "typeface-roboto-slab"
// pages for this product
import LandingPage from "./LandingPage/LandingPage.jsx"
import ResumePage from "./ResumePage/ResumePage.jsx"
import ProjectsPage from "./ProjectsPage/ProjectsPage.jsx"
import Components from "./Components/Components.jsx"

let hist = createMemoryHistory()

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/resume" component={ResumePage} />
      <Route path="/projects" component={ProjectsPage} />
    </Switch>
  </Router>
)
