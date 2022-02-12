import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { BaseContext } from "../context/BaseContext";

import { Container } from "./content/Container";

import { COLORS } from "../constants";

export const Main = () => {
  const { data } = useContext(BaseContext);

  return (
    <Wrapper>
      <h1 className='main-header'>Stingray Music Categories</h1>
      {data && <Container />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
