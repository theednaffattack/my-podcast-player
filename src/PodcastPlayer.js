import React from "react";

import { PlayerImageWrapper, PlayerWindow } from "./PosedComps/PlayerWindow";
import MiniPlayerControls from "./MiniPlayerControls";
import { FlexBorder, Image } from "./RebassComps/BaseRebass";
// import { PlayerControls } from "./PosedComps/PlayerControlsPosed";
// import PlayerButtons from "./PlayerButtons";
import PlayerControls from "./PlayerControls";
import TimeElapsedSlider from "./modules/PodcastPlayer/TimeElapsedSlider/TimeElapsedSlider";
import VolumeSlider from "./modules/PodcastPlayer/VolumeSlider";

function PodcastPlayer({
  appHeight,
  appWidth,
  audioDuration,
  rawAudioDuration,
  currentTime,
  getH2Position,
  handleChangeVolume,
  podcastPlayerDimensions,
  headerPosition,
  imageUrl,
  playerVisibility,
  playerStatus,
  dashHeight,
  currentPlayingIndex,
  handlePlayMedia,
  handleScrubbing,
  handleSeekBackward,
  handleSeekForward,
  handlePlayerToggle
}) {
  const bigPlayerShowing = playerVisibility === "isClosed";

  return (
    <PlayerWindow
      width={1}
      border="crimson"
      overflow="hidden"
      getH2Position={getH2Position}
      headerPosition={headerPosition}
      pose={playerVisibility}
      myHeight={dashHeight}
      imageUrl={imageUrl}
      appHeight={appHeight}
      appWidth={appWidth}
    >
      <PlayerImageWrapper
        podcastPlayerDimensions={podcastPlayerDimensions}
        appHeight={appHeight}
        appWidth={appWidth}
        pose={playerVisibility}
      >
        <Image
          width={[1, 1, 1]}
          alt="Open Floor Podcast"
          onClick={handlePlayerToggle}
          src={imageUrl}
        />
        <PlayerControls
          pose={playerVisibility === "isOpen" ? "isOpen" : "isClosed"}
          handleSeekForward={handleSeekForward}
          handleSeekBackward={handleSeekBackward}
          handlePlayMedia={handlePlayMedia}
          playerStatus={playerStatus}
        />
        {playerVisibility === "isOpen" ? (
          <FlexBorder mt={4} flexDirection="column" border="lime">
            {playerStatus !== "init" && playerVisibility === "isOpen" ? (
              <TimeElapsedSlider
                handleScrubbing={handleScrubbing}
                domain={[0, rawAudioDuration]}
                audioDuration={audioDuration}
                currentTime={currentTime}
              />
            ) : (
              ""
            )}
            <VolumeSlider
              currentVolume={0.45}
              handleChangeVolume={handleChangeVolume}
            />
          </FlexBorder>
        ) : (
          ""
        )}
      </PlayerImageWrapper>

      {playerVisibility === "isClosed" ? (
        <>
          <MiniPlayerControls
            handlePlayMedia={handlePlayMedia}
            handleSeekForward={handleSeekForward}
            handleSeekBackward={handleSeekBackward}
            handlePlayerToggle={handlePlayerToggle}
            playerStatus={playerStatus}
            playerVisibility={playerVisibility}
            bigPlayerShowing={bigPlayerShowing}
          />
        </>
      ) : (
        ""
      )}
      {/* <PlayerButtons
        handleSeekForward={handleSeekForward}
        handleSeekBackward={handleSeekBackward}
        handlePlayerToggle={handlePlayerToggle}
        handlePlayMedia={handlePlayMedia}
        imageUrl={imageUrl}
        playerStatus={playerStatus}
        playerVisibility={playerVisibility}
        currentPlayingIndex={currentPlayingIndex}
      /> */}
    </PlayerWindow>
  );
}

export default PodcastPlayer;
