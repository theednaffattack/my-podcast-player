import React from "react";
import { GetAllPodcastEpisodes } from "./ListQueryPosed";

function EpisodeList({
  handlePlayMedia,
  handleSelectAndPlayMedia,
  playerVisibility
}) {
  return (
    // <FlexBorder>
    <GetAllPodcastEpisodes
      handlePlayMedia={handlePlayMedia}
      handleSelectAndPlayMedia={handleSelectAndPlayMedia}
      playerVisibility={playerVisibility}
    />
    // </FlexBorder>
  );
}

export default EpisodeList;
