import React from "react";
import styled from "styled-components";

import { COLORS } from "../constants";

import logo from "../assets/PNGs/Stingray_logo_blue.png";

export const Header = () => {
  return (
    <HeaderWrapper>
      <h1 className='main-header'>Stingray Music Categories</h1>
      <img src={logo} alt='stingray-logo' id='top-logo' />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  h1.main-header {
    text-align: center;
    color: ${COLORS.mainText};
    margin: 72px 0;
    font-size: calc(300% + 0.8vmin);
    max-width: 80%;
    z-index: 2;

    opacity: 0.8;

    @media only screen and (max-width: 600px) {
      font-size: calc(170% + 1.2vmin);
      line-height: 120%;
      font-weight: 800;
      margin: 39px 0;
    }
  }

  img#top-logo {
    position: absolute;
    height: 160px;
    width: 160px;
    top: 24px;
    z-index: 1;

    @media only screen and (max-width: 947px) {
      top: 32px;
      height: 170px;
      width: 170px;
    }

    @media only screen and (max-width: 600px) {
      top: 23px;
      height: 110px;
      width: 110px;
    }
  }
`;
