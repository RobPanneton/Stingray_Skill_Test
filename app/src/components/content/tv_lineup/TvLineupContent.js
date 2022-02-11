import React, { useState, useContext } from "react";

import styled from "styled-components";

import { COLORS } from "../../../constants";

export const TvLineupContent = ({ content }) => {
  return (
    <ContentWrapper>
      {content.map((item, index) => {
        return (
          <ItemCard key={index}>
            <img src={item.cover} alt={item.label} className='row-picture' />
            <p>{item.description}</p>
          </ItemCard>
        );
      })}
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  min-width: 100%;
  background-color: white;
  border-bottom: 1px solid ${COLORS.mainBorder};
  padding: 13px;

  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 13px;
  row-gap: 13px;



  }
`;

const ItemCard = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 13px;

  img {
    height: 100%;
    width: 100%;
  }

  p {
    font-size: calc(100% + 0.8vmin);
    color: white;
    position: absolute;
    text-align: center;
  }
`;
