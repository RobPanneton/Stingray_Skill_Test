import React, { useContext } from "react";

import styled from "styled-components";
import { BaseContext } from "../../context/BaseContext";

import { AccordionHeader } from "./AccordionHeader";

export const Container = () => {
  const { isOpen, data } = useContext(BaseContext);

  return (
    <Wrapper>
      {isOpen &&
        data.map((content, index) => {
          return <AccordionHeader content={content} key={index} />;
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  margin-bottom: 32px;
`;
