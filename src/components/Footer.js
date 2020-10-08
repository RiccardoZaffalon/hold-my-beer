import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/variables";

const Footer = styled.footer`
  background: ${colors.background.secondary};
  color: ${colors.foreground.primary};
`;

export default function () {
  return (
    <Footer>
      <nav>
        <ul>
          <li>
            <Link to="/">Add</Link>
          </li>
          <li>
            <Link to="/beers">Beers</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </Footer>
  );
}
