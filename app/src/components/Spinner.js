import React from "react";
import styled from "styled-components";

import logo from "../assets/PNGs/Stingray_logo_white.png";

export const Spinner = ({ width, height }) => {
  console.log(width);
  return (
    <SpinnerWrapper>
      <SpinningLogo
        src={logo}
        alt='WINGZ Logo'
        style={{ height: height, width: width }}
      ></SpinningLogo>
    </SpinnerWrapper>
  );
};

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 120px;
`;

const SpinningLogo = styled.img`
  height: 53%;
  width: 53%;
  animation: rotating 2.3s linear infinite;

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
