import React, { useContext, useEffect } from "react";

import styled from "styled-components";

import { MostPopular } from "./most_popular/MostPopular";
import { TvLineup } from "./tv_lineup/TvLineup";

export const Container = () => {
  return (
    <Wrapper>
      <MostPopular />
      <TvLineup />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  margin-bottom: 32px;
`;
