import React from "react";
import { Query } from "react-apollo";

import { GetAllPodcasts_Shows as GET_ALL_PODS_SHOWS } from "../graphql/PodcastList/queries/PodcastList";
import { PosedList } from "./show-list"; // PosedList, PosedList2,  PoseGroupItems
import { NoFavoritePodcastsPosed } from "../PosedComps/no-favorite-podcasts-posed";
import { FlexBorder } from "../RebassComps/BaseRebass";
export const GetAllPodcastsShows = ({
  handlePlayMedia,
  handleSelectAndPlayMedia,
  playerVisibility
}) => (
  <Query query={GET_ALL_PODS_SHOWS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      if (data && data.getAllPodcasts.length === 0)
        return (
          <FlexBorder
            width={1}
            border="lime"
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
        <PosedList
          handleSelectAndPlayMedia={handleSelectAndPlayMedia}
          handlePlayMedia={handlePlayMedia}
          playerVisibility={playerVisibility}
          isOpen={
            data && !!data.getAllPodcasts && playerVisibility === "isOpen"
          }
          items={data && data.getAllPodcasts}
        />
        // <PoseGroupItems
        //   flipMove={true}
        //   isOpen={data && !!data.getAllPodcasts}
        //   items={data && data.getAllPodcasts}
        // />
      );
    }}
  </Query>
);
