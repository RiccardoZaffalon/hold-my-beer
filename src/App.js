import React from "react";
import * as firebase from "firebase";
import "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";

import firebaseConfig from "./config/firebase";
import Layout from "./layouts/Default";
import Beers from "./routes/Beers";
import Add from "./routes/Add";
import Login from "./routes/Login";
import ProtectedRoute from "./routes/ProtectedRoute";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();

export default function App() {
  const [user, loading, error] = useAuthState(firebase.auth());

  function logIn() {
    firebase.auth().signInWithPopup(provider);
  }

  function logOut() {
    firebase.auth().signOut();
  }

  return (
    <Router>
      <Layout user={user} logout={logOut}>
        <Switch>
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} logged={user} loading={loading} login={logIn} />
            )}
          />
          <ProtectedRoute logged={user} path="/beers" component={Beers} />
          <ProtectedRoute logged={user} path="/" component={Add} />
        </Switch>
      </Layout>
    </Router>
  );
}
