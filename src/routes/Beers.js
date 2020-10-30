import React from "react";
import styled from "styled-components";
import Beer from "../components/Beer";
import Input from "../components/Input";
import Notification from "../components/Notification";
import Emoji from "../components/Emoji";
import { colors, sizing } from "../styles/variables";

const beers = [
  {
    name: "fat tag",
    description: "amazing beer",
    stars: 5,
  },
  {
    name: "ichnusa",
    description: "lovely pizza beer",
    stars: 3,
  },
  {
    name: "punk ipa",
    description: "very good beer",
    stars: 4,
  },
  {
    name: "stella artois",
    description: "is this some kind of joke?",
    stars: 1,
  },
  {
    name: "fat tag",
    description: "amazing beer",
    stars: 5,
  },
  {
    name: "ichnusa",
    description: "lovely pizza beer",
    stars: 3,
  },
  {
    name: "punk ipa",
    description: "very good beer",
    stars: 4,
  },
  {
    name: "stella artois",
    description: "is this some kind of joke?",
    stars: 1,
  },
];

const Scrim = styled.div`
  height: 100px;
  position: fixed;
  bottom: ${sizing.footer};
  left: 0;
  right: 0;
  background: linear-gradient(transparent, ${colors.background.primary});
`;

export default function Beers() {
  return (
    <>
      <Input type="search" placeholder="Search" />
      <ul>
        {beers.map(({ name, description, stars }, index) => {
          return (
            <Beer
              key={index}
              name={name}
              description={description}
              stars={stars}
            />
          );
        })}
      </ul>

      {/* Scrim should be disabled on scroll */}
      {false && <Scrim aria-hidden="true" />}
      <Notification prompt="Got it">
        You can delete beers by long-tapping on them{" "}
        <Emoji symbol="🤙" label="Thumbs up!" />
      </Notification>
    </>
  );
}
