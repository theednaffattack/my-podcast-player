import React from "react";
import posed from "react-pose";
import { Flex as FlexBase } from "rebass";
import styled from "styled-components";
import {
  backgroundImage,
  borders,
  position,
  top,
  left,
  right,
  bottom,
  zIndex
} from "styled-system";
import { withSize } from "react-sizeme";

export const AbBase = styled(FlexBase)`
${borders}
${position}
${top}
${left}
${right}
${bottom}
${zIndex}
${backgroundImage}
`;

class AbBaseClassBase extends React.Component {
  render() {
    const { children, size, ...props } = this.props;
    return (
      <AbBase
        playerWidth={size ? size.height : "player width error"}
        playerHeight={size ? size.width : "player height error"}
        className="the hell"
        border="pink"
        width={[1, "850px"]}
        {...props}
      >
        {children}
      </AbBase>
    );
  }
}

export const AbBaseClass = withSize({
  monitorHeight: true,
  monitorWidth: true,
  monitorPosition: true
})(AbBaseClassBase);

export const AbBaseWithSize = withSize({
  monitorHeight: true,
  monitorWidth: true,
  monitorPosition: true
})(AbBaseClassBase);

export const AbWrapper = posed(AbBase)({
  zoomedIn: {
    position: "fixed",
    top: "13%",
    // left: 0,
    // right: 0,
    bottom: 80
    // flip: true
  },
  zoomedOut: {
    position: "fixed",
    // top: "100%",
    top: "80%",
    bottom: 80,
    height: "auto"
    // width: "auto",
    // height: "auto",
    // flip: true
  }
});
