import React from "react";
import styled from "styled-components";
import { colors, spacing } from "../styles/variables";

const Label = styled.label`
  display: block;
  margin-bottom: ${spacing.larger};

  span,
  input {
    display: block;
  }

  span {
    color: ${colors.form.label};
    font-size: 14px;
    margin-bottom: ${spacing.smaller};
  }

  input {
    font-size: 16px;
    color: ${colors.form.input.color};
    background-color: ${colors.form.input.background};
    border: 1px solid ${colors.form.input.border};
    padding: ${spacing.small};
    width: 100%;
  }
`;

export default function Input({ label, placeholder, type }) {
  return (
    <Label>
      {label && <span>{label}</span>}
      <input type={type || "text"} placeholder={placeholder} />
    </Label>
  );
}
