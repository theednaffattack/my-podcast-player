import React from "react";
import { withSize } from "react-sizeme";

import { Flex100 } from "../RebassComps/Flex100";

class MeasuredFlexBase extends React.Component {
  componentDidMount() {
    // It's componentdidmount so the first time through there's nothing
    // second time through I just destructure and rename what state
    // will be in our parent class container `App`
    const { getPodcastPlayerDimensions } = this.props.getPodcastPlayerDimensions
      ? this.props
      : {
          getPodcastPlayerDimensions: args => ({
            getPodcastPlayerDimensions: `not loaded yet, here's your args back: ${Object.keys(
              args
            )}`
          })
        };

    const {
      size: { height: playerHeight, width: playerWidth }
    } = this.props.size
      ? this.props
      : { size: { width: "error: no width", height: "error: no height" } };

    // note we're hoisting state up to `App` here

    getPodcastPlayerDimensions({ playerHeight, playerWidth });

    // return { playerHeight, playerWidth };
  }

  componentDidUpdate(prevProps) {
    const { getPodcastPlayerDimensions } = prevProps;
    if (
      prevProps.size.height !== this.props.size.height ||
      prevProps.size.width !== this.props.size.width
    ) {
      // this is a setState call in the parent `App` component
      getPodcastPlayerDimensions({
        playerHeight: this.props.size.height,
        playerWidth: this.props.size.width
      });
    }
  }

  render() {
    const {
      props,
      props: { children }
    } = this;

    return <Flex100 {...props}>{children}</Flex100>;
  }
}

export const MeasuredFlex = withSize({
  monitorHeight: true,
  monitorPosition: true,
  monitorWidth: true
})(MeasuredFlexBase);
