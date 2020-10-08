import React from "react";
import styled from "styled-components";

import { colors } from "../styles/variables";

const Header = styled.header`
  background: ${colors.background.secondary};
  color: ${colors.foreground.primary};
`;

export default function () {
  return <Header>Header here</Header>;
}
