import React, { useContext, useEffect } from "react";

import styled from "styled-components";

import { BaseContext } from "../context/BaseContext";
import { COLORS } from "../constants";

export const Main = () => {
  const { data } = useContext(BaseContext);

  useEffect(() => {
    if (data) console.log(data);
  }, [data]);

  return (
    <Wrapper>
      <h1 className='main-header'>Stingray Music Categories</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.mainBackground};
  min-height: 100vh;

  h1.main-header {
    // FIX THIS
    color: ${COLORS.mainText};
    max-width: 520px;
    margin: 0 auto;
    padding-top: 72px;
    font-size: calc(200% + 0.8vmin);
  }
`;
