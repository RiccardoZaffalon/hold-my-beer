import React from "react";
import styled from "styled-components";
import { colors, spacing } from "../styles/variables";

const Beer = styled.article`
  display: block;
  background: ${colors.card.background};
  color: ${colors.card.foreground};
  padding: ${spacing.medium} ${spacing.small};
  margin-bottom: ${spacing.larger};
  border-radius: 6px;

  h2 {
    margin-bottom: ${spacing.small};
  }

  p {
    color: #666666;
    font-size: ${spacing.small};
  }
`;

export default function ({ name, description, stars }) {
  return (
    <Beer>
      <h2>{name}</h2>
      <p>{description}</p>
      <Rating stars={stars} />
    </Beer>
  );
}

function Rating({ stars }) {
  return (
    <>
      <span className="sr-only">{stars} out of 5</span>
      <span aria-hidden="true">
        {Array.from({ length: stars }).map(() => "⭐️")}
      </span>
    </>
  );
}
