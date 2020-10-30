import React from "react";
import styled from "styled-components";
import { spacing } from "../styles/variables";

const Styled = styled.button`
  background: #275ba9;
  border: none;
  color: white;
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: 500;
  box-shadow: inset -2px -2px 0px rgba(0, 0, 0, 0.25);
  padding: ${spacing.medium} ${spacing.larger};
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.01em;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 3px;

  &[disabled] {
    background: #aaa;
    cursor: not-allowed;
  }
`;

export default function Button({ children, ...rest }) {
  return <Styled {...rest}>{children}</Styled>;
}
