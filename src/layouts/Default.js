import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { colors, spacing, sizing } from "../styles/variables";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = styled.main`
  background: ${colors.background.primary};
  color: ${colors.foreground.secondary};
  padding: ${spacing.medium};
  height: ${sizing.main};
  overflow-x: hidden;
  overflow-y: auto;
`;

export default function Default({ children }) {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
}
