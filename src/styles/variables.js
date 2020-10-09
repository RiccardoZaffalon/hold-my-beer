import { transparentize } from "polished";

export const colors = {
  foreground: {
    primary: "#ffffff",
    secondary: "#999999",
  },
  background: {
    primary: "#111111",
    secondary: "#222B38",
  },
  card: {
    background: transparentize(0.9, "white"),
    foreground: "#d3d3d3",
  },
};

const base = 8;

export const spacing = {
  smaller: `${base}px`,
  small: `${base * 1.5}px`,
  medium: `${base * 2}px`,
  large: `${base * 2.5}px`,
  larger: `${base * 3}px`,
};

export const sizing = {
  header: "60px",
  footer: "72px",
  main: "calc(100% - 132px)",
};
