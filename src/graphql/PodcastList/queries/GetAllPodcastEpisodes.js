import gql from "graphql-tag";

export const GET_ALL_PODCAST_EPISODES = gql`
  # Write your query or mutation here
  query GetAllPodcastEpisodes {
    getAllPodcastEpisodes {
      id
      url
      podcast {
        id
        image
      }
      text
      date
    }
  }
`;
