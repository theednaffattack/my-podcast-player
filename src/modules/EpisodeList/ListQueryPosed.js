import React from "react";
import { Query } from "react-apollo";

import { GET_ALL_PODCAST_EPISODES } from "../../graphql/PodcastList/queries/GetAllPodcastEpisodes";
// import { PosedList } from "./show-list"; // PosedList, PosedList2,  PoseGroupItems
import PosedList from "./PosedList";
import { NoFavoritePodcastsPosed } from "../../PosedComps/no-favorite-podcasts-posed";
import { FlexBorder } from "../../RebassComps/BaseRebass";

const query = GET_ALL_PODCAST_EPISODES;

const dataName = "getAllPodcastEpisodes";

export const GetAllPodcastEpisodes = ({
  handlePlayMedia,
  handleSelectAndPlayMedia,
  playerVisibility
}) => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      if (data && data[dataName].length === 0)
        return (
          <FlexBorder
            width={1}
            minHeight="280px"
            alignItems="center"
            justifyContent="center"
          >
            <NoFavoritePodcastsPosed
              as="h2"
              color="grey"
              initialPose="isClosed"
              pose="isOpen"
            >
              No Podcasts!
            </NoFavoritePodcastsPosed>
          </FlexBorder>
        );

      return (
        <FlexBorder
          flexDirection="column"
          width={[1, "860px"]}
          minHeight="280px"
          alignItems="center"
          justifyContent="center"
        >
          <PosedList
            handleSelectAndPlayMedia={handleSelectAndPlayMedia}
            handlePlayMedia={handlePlayMedia}
            playerVisibility={playerVisibility}
            isOpen={data && !!data[dataName] && playerVisibility === "isOpen"}
            items={data && data[dataName]}
          />
        </FlexBorder>
      );
    }}
  </Query>
);
