import React, { useContext } from "react";
import styled from "styled-components";

import { BaseContext } from "../context/BaseContext";

import { AccordionContainer } from "./content/AccordionContainer";

import { COLORS } from "../constants";

export const Main = () => {
  const { data } = useContext(BaseContext);

  return (
    <MainWrapper>
      <h1 className='main-header'>Stingray Music Categories</h1>
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

  h1.main-header {
    text-align: center;
    color: ${COLORS.mainText};
    margin: 72px 0;
    font-size: calc(300% + 0.8vmin);
    max-width: 80%;

    @media only screen and (max-width: 600px) {
      font-size: calc(170% + 1.2vmin);
      line-height: 120%;
      font-weight: 800;
      margin: 39px 0;
    }
  }
`;
