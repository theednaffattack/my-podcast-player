import React from "react";
import Icon from "react-geomicons";

import { Button, FlexBorder as Flex, Text } from "./RebassComps/BaseRebass";

function MiniPlayerControls({
  handleSeekForward,
  currentPlayingIndex,
  handlePlayerToggle,
  handlePlayMedia,
  playerStatus,

  playerVisibility
}) {
  return (
    <>
      <Flex
        onClick={handlePlayerToggle}
        justifyContent="flex-start"
        flexDirection="column"
        border="crimson"
        width={4 / 5}
      >
        <Flex
          // onClick={handlePlayerToggle}
          justifyContent="center"
          flexDirection="column"
          border="lime"
          width={1}
        >
          <Text fontSize=".8em">text</Text>
          <Text fontSize=".8em"> more text</Text>
          <Text fontSize=".8em">blah</Text>
          {currentPlayingIndex}
        </Flex>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="column"
        border="crimson"
        width={1 / 10}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          border="lime"
          width={1}
        >
          <Button onClick={handlePlayMedia} type="button" bg="transparent">
            <Icon
              name={playerStatus === "isPlaying" ? "pause" : "play"}
              size="35px"
              fill="brown"
            />
          </Button>
        </Flex>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="column"
        border="crimson"
        width={1 / 10}
        onClick={handleSeekForward}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          border="lime"
          width={1}
        >
          <Button type="button" bg="transparent">
            <Icon name="refresh" fill="brown" size="35px" />
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default MiniPlayerControls;
