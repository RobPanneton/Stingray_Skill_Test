import React from "react";

import styled from "styled-components";

import { COLORS } from "../../constants";

export const ChannelDisplay = ({ content, isOpen }) => {
  return (
    <ChannelWrapper className={isOpen ? "show-content" : "hide-content"}>
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
    </ChannelWrapper>
  );
};

const ChannelWrapper = styled.div`
  &.show-content {
    visibility: visible;
    opacity: 1;

    border-top: 1px solid #666;
    height: auto;
    max-height: 2000px;

    transition: 0.6s ease;
  }

  &.hide-content {
    visibility: hidden;
    position: relative;
    opacity: 0;

    max-height: 0px;

    transition: 0.6s ease;
  }
`;

const ItemRow = styled.div`
  width: 100%;
  background-color: white;
  border-bottom: 1px solid ${COLORS.mainBorder};
  padding: 13px;

  display: flex;

  :hover {
    background-color: ${COLORS.hoverBackground};
  }

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
