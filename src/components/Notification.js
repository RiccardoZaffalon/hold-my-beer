import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import { spacing, colors } from "../styles/variables";

const Styled = styled(motion.div)`
  position: fixed;
  bottom: 90px;
  left: ${spacing.medium};
  right: ${spacing.medium};
  padding: ${spacing.medium} 18px;
  background: #2b2c2c;
  color: ${colors.foreground.primary};
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  z-index: 5;
  font-size: 12px;
  line-height: 18px;

  .content {
    flex: 1 1;
  }

  .prompt {
    background: none;
    display: inline-block;
    font-weight: bold;
    font-size: 11px;
    line-height: 13px;
    text-align: right;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #ffc917;
    border: none;
  }
`;

export default function Notification({ children, prompt, ...rest }) {
  const wasHidden = window.localStorage.getItem("hmb_wasHidden") === "true";
  const [active, setActive] = useState(!wasHidden);

  const hide = () => {
    setActive(false);
    window.localStorage.setItem("hmb_wasHidden", "true");
  };

  return (
    <AnimatePresence>
      {active && (
        <Styled
          {...rest}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
        >
          <span className="content">{children}</span>
          <button type="button" className="prompt" onClick={hide}>
            {prompt}
          </button>
        </Styled>
      )}
    </AnimatePresence>
  );
}
