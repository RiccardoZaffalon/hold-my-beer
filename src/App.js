import React, { useState } from "react";
import Layout from "./layouts/Default";
import Beers from "./routes/Beers";
import Add from "./routes/Add";
import Login from "./routes/Login";
import ProtectedRoute from "./routes/ProtectedRoute";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [logged, setLogged] = useState(false);

  function logIn() {
    setLogged(true);
  }

  return (
    <Router>
      <Layout user={logged}>
        <Switch>
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} logged={logged} login={logIn} />
            )}
          />
          <ProtectedRoute logged={logged} path="/beers" component={Beers} />
          <ProtectedRoute logged={logged} path="/" component={Add} />
        </Switch>
      </Layout>
    </Router>
  );
}
