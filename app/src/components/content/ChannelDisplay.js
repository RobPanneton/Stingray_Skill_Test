import React from "react";

import styled from "styled-components";

import { COLORS } from "../../constants";

export const ChannelDisplay = ({ content, isOpen }) => {
  return (
    <ChannelWrapper className={isOpen ? "show-content" : "hide-content"}>
      {content.map((item, index) => {
        return (
          <ItemRow key={index} className={isOpen ? "maximize" : "minimize"}>
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
    max-height: 9000px;

    transition: 1s ease;
  }

  &.hide-content {
    visibility: hidden;
    position: relative;
    opacity: 0;

    max-height: 0px;

    transition: max-height 0.4s ease, opacity 0.1s ease, visibility 0.1s ease;
  }
`;

const ItemRow = styled.div`
  width: 100%;
  background-color: white;
  border-bottom: 1px solid ${COLORS.mainBorder};
  padding: 13px;

  display: flex;

  &.minimize {
    max-height: 0px;
    padding: 0;

    transition: 0.6s ease;
  }

  @media only screen and (max-width: 1000px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  :hover {
    background-color: ${COLORS.hoverBackground};
  }

  img.row-picture {
    height: 80px;
    width: 80px;

    margin-right: 13px;

    @media only screen and (max-width: 1000px) {
      height: 160px;
      width: 160px;
      margin: 0 0 13px 0px;
    }
  }

  div.row-info {
    line-height: 125%;
    h1 {
      font-size: calc(80% + 0.8vmin);
      margin-bottom: 5px;

      @media only screen and (max-width: 1000px) {
        text-align: center;
        font-size: calc(120% + 0.8vmin);
      }
    }
  }
`;
