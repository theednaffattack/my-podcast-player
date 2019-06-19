import React from "react";

import { PlayerButtonBank } from "./PosedComps/PlayerWindow";

import MiniPlayer from "./MiniPlayer";

function PlayerButtons({
  handlePlayerToggle,
  imageUrl,
  playerVisibility,
  handleSeekForward,
  handleSeekBackward,
  playerStatus,
  dashHeight,
  appWidth,
  currentPlayingIndex,
  handlePlayMedia
}) {
  return (
    <PlayerButtonBank
      width={1}
      border="crimson"
      onClick={handlePlayerToggle}
      pose={playerVisibility}
      myHeight={dashHeight}
      imageUrl={imageUrl}
    >
      <MiniPlayer
        handleSeekForward={handleSeekForward}
        handleSeekBackward={handleSeekBackward}
        handlePlayerToggle={handlePlayerToggle}
        handlePlayMedia={handlePlayMedia}
        imageUrl={imageUrl}
        playerStatus={playerStatus}
        playerVisibility={playerVisibility}
        currentPlayingIndex={currentPlayingIndex}
      />
    </PlayerButtonBank>
  );
}

export default PlayerButtons;
