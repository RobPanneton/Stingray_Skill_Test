import React, { useContext } from "react";
import styled from "styled-components";

import { BaseContext } from "../../context/BaseContext";

import { COLORS } from "../../constants";

import arrowPNG from "../../assets/PNGs/Arrow_bottom.png";
import { ChannelDisplay } from "./ChannelDisplay";
import { LinkDisplay } from "./LinkDisplay";

export const AccordionHeader = ({ content }) => {
  const { isOpen, setIsOpen } = useContext(BaseContext);

  return (
    <>
      <DropdownHeader>
        <div className='info'>
          <h1>{content.description}</h1>
          <p>{content.swimlaneItems.length} Channels</p>
        </div>
        <div className='dropdown'>
          <button>
            <img src={arrowPNG} alt='click to open dropdown' />{" "}
          </button>
        </div>
      </DropdownHeader>
      {isOpen[content.id] && (
        <>
          {content.type === "CHANNEL" && (
            <ChannelDisplay content={content.swimlaneItems} />
          )}
          {content.type === "LINK" && (
            <LinkDisplay content={content.swimlaneItems} />
          )}
        </>
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
      height: 43px;
      width: 43px;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 32px;
        width: 32px;
      }
    }
  }
`;
