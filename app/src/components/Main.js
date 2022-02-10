import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { BaseContext } from "../context/BaseContext";

import { Container } from "./content/Container";

import { COLORS } from "../constants";

export const Main = () => {
  const { data } = useContext(BaseContext);

  useEffect(() => {
    if (data) console.log(data);
  }, [data]);

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

  display: flex;
  align-items: center;
  flex-direction: column;

  h1.main-header {
    // FIX THIS
    color: ${COLORS.mainText};
    margin: 72px 0;
    font-size: calc(200% + 0.8vmin);
  }
`;
