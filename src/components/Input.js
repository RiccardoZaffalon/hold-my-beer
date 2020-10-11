import React from "react";
import styled from "styled-components";

const Label = styled.label`
  span,
  input {
    display: block;
  }
`;

export default function Input() {
  return (
    <>
      <Label>
        <span>Search here</span>
        <input type="text" />
      </Label>
    </>
  );
}
