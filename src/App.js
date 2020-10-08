import React from "react";
import Layout from "./layouts/Default";
import Beers from "./routes/Beers";
import Add from "./routes/Add";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/beers">
            <Beers />
          </Route>
          <Route path="/">
            <Add />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
