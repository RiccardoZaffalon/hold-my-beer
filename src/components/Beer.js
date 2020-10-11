import React from "react";
import styled from "styled-components";
import { colors, spacing } from "../styles/variables";

const Beer = styled.article`
  display: flex;
  background: ${colors.card.background};
  color: ${colors.card.foreground};
  padding: ${spacing.medium} ${spacing.small};
  margin-bottom: ${spacing.larger};
  border-radius: 6px;
  box-shadow: 4px 4px 16px -4px rgba(34, 37, 40, 0.15);

  h2 {
    margin-bottom: ${spacing.small};
    text-transform: capitalize;
  }

  p {
    color: ${colors.card.secondary};
    font-size: 14px;
  }

  .beer {
    &__info {
      flex: 1;
    }
  }
`;

export default function ({ name, description, stars }) {
  return (
    <Beer>
      <div className="beer__info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <Rating stars={stars} />
    </Beer>
  );
}

function Rating({ stars }) {
  return (
    <div className="beer__rating">
      <span className="sr-only">{stars} out of 5</span>
      <span aria-hidden="true">
        {Array.from({ length: stars }).map(() => "⭐️")}
      </span>
    </div>
  );
}
