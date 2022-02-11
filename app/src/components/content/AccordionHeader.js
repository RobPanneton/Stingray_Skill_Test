import React, { useContext } from "react";
import styled from "styled-components";

import { BaseContext } from "../../context/BaseContext";
import { ChannelDisplay } from "./ChannelDisplay";
import { LinkDisplay } from "./LinkDisplay";

import { COLORS } from "../../constants";
import arrowPNG from "../../assets/PNGs/Arrow_bottom.png";

export const AccordionHeader = ({ content }) => {
  const { isOpen, setIsOpen } = useContext(BaseContext);

  const handleToggleDropdown = () => {
    return setIsOpen(
      Object.keys(isOpen).reduce((acc, key) => {
        if (key === content.id) return { ...acc, [key]: !isOpen[key] };
        return { ...acc, [key]: false };
      }, {})
    );
  };

  return (
    <>
      <DropdownHeader onClick={handleToggleDropdown}>
        <div className='info'>
          <h1>{content.description}</h1>
          <p>{content.swimlaneItems.length} Channels</p>
        </div>
        <div className='dropdown'>
          <img
            src={arrowPNG}
            alt='click to open dropdown'
            className={isOpen[content.id] ? "close-arrow" : "open-arrow"}
          />
        </div>
      </DropdownHeader>
      {isOpen[content.id] && (
        <ContentContainer>
          {content.type === "CHANNEL" && (
            <ChannelDisplay content={content.swimlaneItems} />
          )}
          {content.type === "LINK" && (
            <LinkDisplay
              content={content.swimlaneItems}
              isOpen={isOpen[content.id]}
            />
          )}
        </ContentContainer>
      )}
    </>
  );
};

const DropdownHeader = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: white;
  border-bottom: 1px solid ${COLORS.mainBorder};
  padding: 17px;

  display: flex;
  justify-content: space-between;

  background-color: ${COLORS.contentBackground};

  :hover {
    background-color: ${COLORS.hoverBackground};
    cursor: pointer;
  }

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

    img {
      height: 32px;
      width: 32px;
    }
    .close-arrow {
      transform: rotate(-180deg);
      -webkit-transform: rotate(-180deg);
      transition: 0.6s ease;
    }
    .open-arrow {
      transition: 0.6s ease;
    }
  }
`;

const ContentContainer = styled.div`
  position: relative;
  /* &.show-content {
    position: relative;
    visibility: visible;
    height: auto;
    max-height: 9999999px;

    background-color: black;

    opacity: 1;
    transition: 2.7s ease;
  }

  &.hide-content {
    visibility: hidden;
    opacity: 0;
    max-height: 0px;
    transition: 2.6s ease;
  } */
`;
