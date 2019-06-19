import React from "react";
import { withSize } from "react-sizeme";

import { AbBase, AbBaseWithSize } from "../PosedComps/AbsoluteWrapper";
import PodcastPlayer from "../PodcastPlayer";
import BottomButtons from "./BottomButtons";
import { H2Dashboard } from "./H2Dashboard";
import { FlexBorder } from "../RebassComps/BaseRebass";
import { GetAllPodcastsShows } from "./show-list-query";

const buttonItems = [
  {
    icon: "1",
    text: "Listen Now"
  },
  {
    icon: "2",
    text: "Library"
  },
  {
    icon: "3",
    text: "Browse"
  },
  {
    icon: "4",
    text: "Search"
  }
];

const DashBase = ({
  appHeight,
  appWidth,
  audioDuration,
  rawAudioDuration,
  currentTime,
  getH2Position,
  getPodcastPlayerDimensions,
  handleChangeVolume,
  podcastPlayerDimensions,
  headerPosition,
  handleScrubbing,
  handleSeekForward,
  handleSeekBackward,
  handleSelectAndPlayMedia,
  imageUrl,
  playerStatus,
  size: { height: dashHeight, width: dashWidth, position: dashPosition },
  playerVisibility,
  currentPlayingIndex,
  handlePlayerToggle,
  handlePlayMedia
}) => (
  <FlexBorder
    width={[1, 1, 1]}
    flexDirection="column"
    border="purp"
    position="relative"
    minHeight="400px"
  >
    <H2Dashboard as="h2" getH2Position={getH2Position}>
      Dashboard
    </H2Dashboard>
    <h3>{currentPlayingIndex}</h3>
    <GetAllPodcastsShows
      handleSelectAndPlayMedia={handleSelectAndPlayMedia}
      handlePlayMedia={handlePlayMedia}
      playerVisibility={playerVisibility}
    />
    {/* <AbWrapper>
      <Box width="860px">
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
      </Box>
    </AbWrapper> */}
    {/* <PodcastPlayer
      handlePlayerToggle={handlePlayerToggle}
      imageUrl={imageUrl}
      myHeight={height}
      playerVisibility={playerVisibility}
    /> */}
    {/* <AbBaseSized /> */}
    <AbBase
      // getPodcastPlayerDimensions={getPodcastPlayerDimensions}
      bottom={0}
      left={0}
      position="fixed"
      //   border="lime"
      //   mb={3}
      //   mt={1}
      width={[1]}
      alignItems="center"
      justifyContent="center"
      style={{ border: "2px green solid" }}
      //   flexwrap="nowrap"
    >
      <AbBaseWithSize
        getPodcastPlayerDimensions={getPodcastPlayerDimensions}
        bottom={0}
        // left={0}
        position="absolute"
        //   border="lime"
        //   mb={3}
        //   mt={1}
        width={[1, "860px"]}
        alignItems="center"
        justifyContent="center"
        //   flexwrap="nowrap"
      >
        <PodcastPlayer
          appHeight={appHeight}
          appWidth={appWidth}
          audioDuration={audioDuration}
          rawAudioDuration={rawAudioDuration}
          currentTime={currentTime}
          headerPosition={headerPosition}
          getH2Position={getH2Position}
          handleChangeVolume={handleChangeVolume}
          podcastPlayerDimensions={podcastPlayerDimensions}
          handlePlayerToggle={handlePlayerToggle}
          imageUrl={imageUrl}
          dashHeight={dashHeight}
          playerVisibility={playerVisibility}
          handleScrubbing={handleScrubbing}
          handleSeekForward={handleSeekForward}
          handleSeekBackward={handleSeekBackward}
          playerStatus={playerStatus}
          currentPlayingIndex={currentPlayingIndex}
          handlePlayMedia={handlePlayMedia}
        />
        {/* <AbWrapper
        flexDirection="row"
        width={[1, "860px"]}
        // top={80}
        //   pose={this.state.playerVisibility === "small" ? "zoomedOut" : "zoomedIn"}
        border="2px crimson dotted"
        bg="#eee"
        // alignItems="flex-end"
        // justifyContent={
        //   this.state.playerVisibility === "small"
        //     ? "flex-end"
        //     : "flex-start"
        // }
        // style={{
        //   overflow: "hidden"
        // }}
        // position="absolute"
        bottom={0}
      > */}
        {/* </AbWrapper> */}
      </AbBaseWithSize>
    </AbBase>
    <AbBase
      // getPodcastPlayerDimensions={getPodcastPlayerDimensions}
      bottom={0}
      left={0}
      position="fixed"
      //   border="lime"
      //   mb={3}
      //   mt={1}
      width={[1]}
      alignItems="center"
      justifyContent="center"
      style={{ border: "2px green solid" }}
      //   flexwrap="nowrap"
    >
      <AbBase
        bottom={0}
        // left={0}
        position="absolute"
        //   border="lime"
        //   mb={3}
        //   mt={1}
        width={[1, "860px"]}
        alignItems="center"
        justifyContent="center"
        //   flexwrap="nowrap"
      >
        <BottomButtons buttonItems={buttonItems} />
      </AbBase>
    </AbBase>
  </FlexBorder>
);

export const Dashboard = withSize({ monitorHeight: true })(DashBase);
