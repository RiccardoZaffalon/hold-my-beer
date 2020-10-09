import React from "react";
import styled from "styled-components";
import { colors, spacing, sizing } from "../styles/variables";

const Header = styled.header`
  background: ${colors.background.secondary};
  color: ${colors.foreground.primary};
  padding: 0 ${spacing.medium};
  height: ${sizing.header};
  display: flex;
  align-items: center;
`;

export default function () {
  return <Header>Header here</Header>;
}
