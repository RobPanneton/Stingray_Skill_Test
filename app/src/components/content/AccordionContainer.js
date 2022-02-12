import React, { useContext } from "react";
import styled from "styled-components";

import { BaseContext } from "../../context/BaseContext";
import { AccordionComponent } from "./AccordionComponent";

import { COLORS } from "../../constants";

export const AccordionContainer = () => {
  const { isOpen, data } = useContext(BaseContext);

  return (
    <AccordionWrapper>
      {isOpen &&
        data.map((content, index) => {
          return <AccordionComponent content={content} key={index} />;
        })}
    </AccordionWrapper>
  );
};

const AccordionWrapper = styled.div`
  width: 70%;
  height: 100%;

  margin-bottom: 32px;
  padding: 7px;
  border: 2px solid ${COLORS.contentBackground};
  border-radius: 9px;

  background-color: ${COLORS.mainBackground};

  @media only screen and (max-width: 1000px) {
    width: 95%;
  }
`;
