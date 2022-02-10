import React, { useState, useContext } from "react";

import styled from "styled-components";

import { COLORS } from "../../../constants";

export const MostPopular = () => {
  return (
    <Wrapper>
      <div className='info'>
        <h1>Most Popular</h1>
        <p>12 Channels</p>
      </div>
      <div className='dropdown'>
        <button>{"<"}</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: white;
  border-bottom: 1px solid ${COLORS.mainBorder};
  padding: 17px;

  display: flex;
  justify-content: space-between;

  div.info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      font-size: calc(180% + 0.8vmin);
    }

    p {
      font-size: calc(80% + 0.8vmin);
    }
  }

  div.dropdown {
    display: flex;
    align-items: center;

    button {
      height: 23px;
      width: 23px;
    }
  }
`;
