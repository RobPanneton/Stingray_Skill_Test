import React, { useContext } from "react";
import styled from "styled-components";

import { BaseContext } from "../context/BaseContext";
import { AccordionContainer } from "./content/AccordionContainer";

import { COLORS } from "../constants";

import { Header } from "./Header";
import { BouncingLogo } from "./BouncingLogo";

export const Main = () => {
  const { data } = useContext(BaseContext);

  return (
    <MainWrapper>
      <Header />

      {data && <AccordionContainer />}
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  background-color: ${COLORS.mainBackground};
  min-height: 100vh;
  max-height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
