import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

export const LinkDisplay = ({ content, isOpen }) => {
  return (
    <LinkWrapper className={isOpen ? "show-content" : "hide-content"}>
      {content.map((item, index) => {
        return (
          <ItemCard key={index} className={isOpen ? "maximize" : "minimize"}>
            <img src={item.cover} alt={item.label} className='row-picture' />
            <p className='link-title'>{item.description}</p>
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

  :hover {
    background-color: ${COLORS.mainBackground};
    border-bottom: none;

    transition: background-color 0.1s ease-in-out;
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: auto auto;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
  }

  &.show-content {
    visibility: visible;
    opacity: 1;

    height: auto;
    max-height: 9000px;

    padding-top: 13px;
    border-top: 1px solid #666;

    transition: 1s ease;
  }

  &.hide-content {
    position: relative;
    visibility: hidden;

    max-height: 0px;
    opacity: 0;

    border: none;

    transition: 0.4s ease;
  }
`;

const ItemCard = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 13px;

  &.minimize {
    max-height: 0px;
    opacity: 0;

    margin-bottom: 0;

    transition: max-height 0.4s ease, opacity 0.1s ease, visibility 0.4s ease;
  }

  img.row-picture {
    height: 100%;
    width: 100%;
  }

  p.link-title {
    font-size: 18px;
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
      opacity: 0;

      transition: 0.2s ease-in;
    }
  }
`;
