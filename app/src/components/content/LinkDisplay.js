import React from "react";

import styled from "styled-components";

import { COLORS } from "../../constants";

export const LinkDisplay = ({ content, isOpen }) => {
  return (
    <LinkWrapper className={isOpen ? "show-content" : "hide-content"}>
      {content.map((item, index) => {
        return (
          <ItemCard key={index}>
            <img src={item.cover} alt={item.label} className='row-picture' />
            <p>{item.description}</p>
            <div className='black_filter'></div>
          </ItemCard>
        );
      })}
    </LinkWrapper>
  );
};

const LinkWrapper = styled.div`
  min-width: 100%;
  background-color: white;
  border-bottom: 1px solid ${COLORS.mainBorder};
  padding: 0px 13px 0px 13px;

  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 13px;
  row-gap: 13px;

  &.show-content {
    visibility: visible;
    opacity: 1;

    padding-top: 13px;

    border-top: 1px solid #666;

    height: auto;
    max-height: 2000px;

    transition: 0.6s ease;
  }

  &.hide-content {
    position: relative;
    visibility: hidden;
    opacity: 0;

    max-height: 0px;
    transition: 0.6s ease;
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
    z-index: 2;
  }

  .black_filter {
    position: absolute;
    height: 100%;
    width: 100%;

    background-color: black;
    opacity: 0.6;

    transition: 0.2s ease-in;

    :hover {
      opacity: 0.2;

      transition: 0.2s ease-in;
    }
  }
`;
