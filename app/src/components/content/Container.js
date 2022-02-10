import React, { useContext, useEffect } from "react";

import styled from "styled-components";

import { BrowseAll } from "./browse_all/BrowseAll";
import { MostPopular } from "./most_popular/MostPopular";

export const Container = () => {
  return (
    <Wrapper>
      <MostPopular />
      <BrowseAll />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 70%;
  height: 100%;
`;
