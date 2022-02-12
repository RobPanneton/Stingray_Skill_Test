import React, { useContext } from "react";
import styled from "styled-components";

import { BaseContext } from "../context/BaseContext";
import { Header } from "./Header";
import { AccordionContainer } from "./content/AccordionContainer";

import { COLORS } from "../constants";

export const Main = () => {
  const { data } = useContext(BaseContext);

  return (
    <MainWrapper>
      {/* RENDER THE HEADER, THEN ACCORDION WHEN DATA IS RECEIVED */}
      <Header />
      {data && <AccordionContainer />}
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 100%;

  background-color: ${COLORS.mainBackground};
  min-height: 100vh;
  max-height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
