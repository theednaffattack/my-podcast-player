import React from "react";
import { Button } from "rebass";
import Icon from "react-geomicons";

function OtherPlayerButtons({
  handleSeekForward,
  handleSeekBackward,
  handlePlayMedia,
  playerStatus
}) {
  return (
    <>
      <Button
        onClick={handleSeekBackward}
        type="button"
        color="text"
        bg="transparent"
        width={1 / 3}
        role="switch"
      >
        <Icon size="35px" fill="brown" name="play" />
      </Button>
      <Button
        onClick={handlePlayMedia}
        type="button"
        color="text"
        bg="transparent"
        width={1 / 3}
        role="switch"
      >
        <Icon
          size="35px"
          fill="brown"
          name={playerStatus === "isPlaying" ? "pause" : "play"}
        />
      </Button>
      <Button
        onClick={handleSeekForward}
        type="button"
        border="lime"
        color="text"
        bg="transparent"
        width={1 / 3}
        role="switch"
      >
        <Icon size="35px" fill="brown" name="refresh" />
      </Button>
    </>
  );
}

export default OtherPlayerButtons;
