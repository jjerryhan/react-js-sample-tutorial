import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Router path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Router path="archives(/:article)" name="archives" component={Archives}></Router>
      <Router path="settings" component={Settings}></Router>
    </Router>
  </Router>,
app);
