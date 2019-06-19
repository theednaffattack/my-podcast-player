// /src/RebassComps
// import React from "react";
import posed from "react-pose";

import { imageWrapperMinHeight, SDiv } from "../RebassComps/BaseStyledComps";

// import styled from "styled-components";

// export const SDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   overflow: hidden;
//   width: 100%;
//   position: absolute;
//   bottom: -20;
//   height: auto;
//   top: 200;

//   border: 2px green solid;
//   background-color: transparent;
// `;

// export const BoxDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: pink;
//   width: 95px;
//   border: 2px teal solid;
// `;

const imageWidth = "300px";

// podcastPlayerDimensions={{
//   playerHeight: this.state.playerHeight,
//   playerWidth: this.state.playerWidth
// }}

export const PlayerImageWrapper = posed.div({
  isOpen: {
    // x: 567,
    x: props => {
      // take one-half the view width ("860px on desktops")
      // and subtract one-half the image width to center
      // the enlarged image
      const calculatedPixels =
        props.podcastPlayerDimensions.playerWidth / 2 -
        imageWidth.replace("px", "") / 2 +
        "px";
      return calculatedPixels;
    }, // "calc(50% - 100px)",
    width: imageWidth,
    height: "300px",
    top: 88
    // marginBottom: "200px"
  },
  isClosed: { x: "0%", imageWrapperMinHeight, top: -120, width: "75px" }
});

export const PlayerWindow = posed(SDiv)({
  // draggable: "y",
  // dragBounds: props => ({ top: -Math.ceil(props.myHeight), bottom: 0 }),
  isOpen: {
    // top: 53,
    bottom: -88,
    height: props => {
      return window.innerHeight - props.headerPosition.bottom;
    },
    flip: true
  },
  isClosed: {
    // top: -190,
    // bottom: 0,
    height: "133px",
    flip: true
  }
});

export const PlayerButtonBank = posed(SDiv)({
  // draggable: "y",
  // dragBounds: props => ({ top: -Math.ceil(props.myHeight), bottom: 0 }),
  isOpen: {
    applyAtStart: { display: "none" },
    opacity: 0
  },
  isClosed: {
    opacity: 1,

    applyAtEnd: { display: "flex" }
    // display: "flex"
  }
});
