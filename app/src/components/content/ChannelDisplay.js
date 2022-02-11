import React, { useState, useContext } from "react";

import styled from "styled-components";

import { COLORS } from "../../constants";

export const ChannelDisplay = ({ content }) => {
  return (
    <>
      {content.map((item, index) => {
        return (
          <ItemRow key={index}>
            <img src={item.cover} alt={item.label} className='row-picture' />
            <div className='row-info'>
              <h1>{item.label}</h1>
              <p>{item.description}</p>
            </div>
          </ItemRow>
        );
      })}
    </>
  );
};

const ItemRow = styled.div`
  width: 100%;
  background-color: white;
  border-bottom: 1px solid ${COLORS.mainBorder};
  padding: 13px;

  display: flex;

  img.row-picture {
    height: 80px;
    width: 80px;

    margin-right: 13px;
  }

  div.row-info {
    line-height: 125%;
    h1 {
      font-size: calc(80% + 0.8vmin);
      margin-bottom: 5px;
    }
  }
`;
