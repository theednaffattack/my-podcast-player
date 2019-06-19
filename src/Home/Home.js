import React from "react";
import { withSize } from "react-sizeme";

import MyComponent, { MyApp } from "../SizedComps/SizeMe";
import { Text, Heading } from "../RebassComps/BaseRebass";

const HomeBase = ({
  handlePlayerToggle,
  imageUrl,
  playerVisibility,
  size: { height: homeHeight, width: homeWidth }
}) => (
  <div
    style={{
      border: "2px crimson solid",
      height: "100%",
      position: "relative",
      minHeight: "50vh"
    }}
  >
    <MyApp />
    <MyComponent playerVisibility={playerVisibility} />

    <div
      style={{
        border: "2px crimson solid",
        height: "100%",
        position: "relative",
        minHeight: "200px"
      }}
    >
      <Heading>Home Page</Heading>
      <Text>Home Page</Text>
    </div>
  </div>
);

export const Home = withSize({ monitorHeight: true })(HomeBase);
