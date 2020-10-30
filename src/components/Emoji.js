import React from "react";

export default function Emoji({ symbol, label }) {
  return (
    <span role="img" aria-label={label}>
      {symbol}
    </span>
  );
}
