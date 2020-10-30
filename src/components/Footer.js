import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors, spacing, sizing } from "../styles/variables";

const Footer = styled.footer`
  background: ${colors.background.secondary};
  color: ${colors.foreground.primary};
  padding: 0 ${spacing.medium};
  height: ${sizing.footer};
  z-index: 6;

  nav,
  ul {
    height: 100%;
  }

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .footer__link {
    background: transparent;
    border: none;
    color: ${colors.foreground.secondary};
    font-size: 14px;
    text-decoration: none;
    display: inline-block;

    &.active {
      color: ${colors.foreground.primary};
    }
  }
`;

export default function ({ logout }) {
  return (
    <Footer>
      <nav>
        <ul>
          <li>
            <NavLink exact className="footer__link" to="/">
              Add
            </NavLink>
          </li>
          <li>
            <NavLink exact className="footer__link" to="/beers">
              Beers
            </NavLink>
          </li>
          <li>
            <button className="footer__link" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </Footer>
  );
}
