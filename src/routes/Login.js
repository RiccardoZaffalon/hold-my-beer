import React from "react";
import Button from "../components/Button";

export default function Login({ logged, login }) {
  return <>{logged ? "Great!" : <Button onClick={login}>Login</Button>}</>;
}
