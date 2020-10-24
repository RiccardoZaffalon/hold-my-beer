import React from "react";
import styled from "styled-components";
import { colors, sizing } from "../styles/variables";

export default function Login(props) {
  return <>{props.logged ? "awesome" : "Please login"}</>;
}
