import React from "react";
import { Redirect } from "react-router-dom";

import Button from "../components/Button";

export default function Login({ logged, loading, login }) {
  if (logged) {
    return <Redirect to="/" />;
  }

  if (loading) {
    return <>Loading..</>;
  }

  return <Button onClick={login}>Login</Button>;
}
