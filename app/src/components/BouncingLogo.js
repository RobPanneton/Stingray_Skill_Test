import React, { useRef } from "react";
import styled from "styled-components";

import logoWhite from "../assets/PNGs/Stingray_logo_white.png";

export const BouncingLogo = ({ side, num }) => {
  const logoSize = "100px";

  const logoDiv = document.getElementById(`x-${num}`);
  const imageEl = document.getElementById(`y-${num}`);
  //   logoDiv.style.transform =
  //     side === "left"
  //       ? `translateX(calc(100vw - 100px))`
  //       : `translateX(calc(0vw + 100px))`;
  //   logoDiv.style.animation = `13s linear infinite alternate`;

  setInterval(() => {
    let value1;
    let value2;
    if (
      typeof logoDiv === "object" &&
      logoDiv !== null &&
      "getBoundingClientRect" in logoDiv
    ) {
      value1 = logoDiv.getBoundingClientRect();
    }

    if (
      typeof imageEl === "object" &&
      imageEl !== null &&
      "getBoundingClientRect" in imageEl
    ) {
      value2 = imageEl.getBoundingClientRect();
    }

    console.log({ value1, value2 });

    // const value = logoDiv.offsetLeft;
    // console.log(value);
    // const logoImage = document.querySelector(".y");
    // logoImage.style.transform = `translateY(calc(100vh - ${logoSize}))`;
    // logoDiv.style.animate = `7s linear infinite alternate`;
  }, 1000);

  return (
    <BouncingLogoContainer id={`x-${num}`} style={{ [side]: "10%" }}>
      <img src={logoWhite} alt='Stingray-Logo-Decorative' id={`y-${num}`} />
    </BouncingLogoContainer>
  );
};

const BouncingLogoContainer = styled.div`
  &.x {
    position: absolute;
    /* left: 10%; */

    z-index: 0;
    opacity: 0.5;

    height: var(--bouncing-logo-size);
    width: var(--bouncing-logo-size);

    animation: x 13s linear infinite alternate;
  }

  .y {
    height: var(--bouncing-logo-size);
    width: var(--bouncing-logo-size);

    animation: y 7s linear infinite alternate;
  }

  /* @keyframes x {
    100% {
      transform: translateX(calc(100vw - var(--bouncing-logo-size)));
    }
  }

  @keyframes y {
    100% {
      transform: translateY(calc(100vh - var(--bouncing-logo-size)));
    } 
  } */
`;
