import React from "react";

import { Heading } from "../RebassComps/BaseRebass";

export class H2Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.titleRef = React.createRef();

    this.getPosition = this.getPosition.bind(this);

    this.state = { h2Pos: null };
  }
  getPosition() {
    const h2Position = this.titleRef.current.getBoundingClientRect();
    return h2Position;
  }
  componentDidMount() {
    const newPos = this.getPosition();

    const h2Position = this.titleRef.current.getBoundingClientRect();
    this.setState({ h2Pos: newPos });
    this.props.getH2Position(h2Position);
  }
  componentDidUpdate(prevProps, prevState) {
    const h2Position = this.titleRef.current.getBoundingClientRect();

    if (prevState.h2Pos && prevState.h2Pos.height !== h2Position.height) {
      // `getH2Position` is a  setState call to `App` parent comp
      // comparing against local state (below) feels dumb, but
      // I need to wait for the second render from
      // componentDidMount then update parent comp state and
      // local state. Eventually local state will just be props
      // Ultimately I'm not sure what to do when I have a local ref
      // Should I be forwarding ref from above?
      this.props.getH2Position(h2Position);
      this.setState({
        h2Pos: h2Position
      });
    }
  }
  render() {
    // const currentRef = this.titleRef.current;
    // const h2Position = currentRef
    //   ? currentRef.getBoundingClientRect()
    //   : "no ref";

    const { children, getH2Position, ...props } = this.props;
    return (
      <Heading {...props} ref={this.titleRef}>
        {children}
      </Heading>
    );
  }
}
