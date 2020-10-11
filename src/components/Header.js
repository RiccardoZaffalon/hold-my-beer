import React from "react";
import styled from "styled-components";
import { colors, spacing, sizing } from "../styles/variables";

const Header = styled.header`
  background: ${colors.background.secondary};
  padding: 0 ${spacing.medium};
  height: ${sizing.header};
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${colors.foreground.accent};
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
  }

  .user {
    color: ${colors.card.foreground};
    font-size: 13px;
    line-height: 30px;
  }
`;

export default function () {
  return (
    <Header>
      <h1>hmb</h1>
      <span className="user">Cheers, User</span>
    </Header>
  );
}
