import React from "react";
import { Redirect } from "react-router-dom";

import Button from "../components/Button";

export default function Login({ logged, login }) {
  return (
    <>{logged ? <Redirect to="/" /> : <Button onClick={login}>Login</Button>}</>
  );
}
