import React from "react";
import { Box, Flex } from "rebass";

import PlayerControls from "./PlayerControls";
import MiniPlayerControls from "./MiniPlayerControls";

function MiniPlayer({
  handleSeekForward,
  handleSeekBackward,
  imageUrl,
  handlePlayerToggle,
  currentPlayingIndex,
  playerVisibility,
  handlePlayMedia,
  playerStatus
}) {
  //   const visible = playerVisibility === "small" ? "isLarge" : "isSmall";
  const bigPlayerShowing = playerVisibility === "isClosed";
  return (
    <Flex width={[1]} border="lime">
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        border="crimson"
        width="85px"
        style={{
          position: "relative"
        }}
      >
        <img
          alt="some thing"
          height="100%"
          width="100%"
          src={imageUrl}
          onClick={handlePlayerToggle}
        />
        {!bigPlayerShowing ? (
          <PlayerControls
            handleSeekForward={handleSeekForward}
            handleSeekBackward={handleSeekBackward}
            playerStatus={playerStatus}
            bigPlayerShowing={bigPlayerShowing}
            handlePlayerToggle={handlePlayerToggle}
            handlePlayMedia={handlePlayMedia}
          />
        ) : (
          ""
        )}
      </Flex>
      {bigPlayerShowing ? (
        <MiniPlayerControls
          handleSeekForward={handleSeekForward}
          handleSeekBackward={handleSeekBackward}
          playerStatus={playerStatus}
          bigPlayerShowing={bigPlayerShowing}
          handlePlayerToggle={handlePlayerToggle}
          handlePlayMedia={handlePlayMedia}
        />
      ) : (
        ""
      )}
    </Flex>
  );
}

export default MiniPlayer;
