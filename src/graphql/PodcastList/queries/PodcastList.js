import gql from "graphql-tag";

export const GetAllPodcasts_Shows = gql`
  # Write your query or mutation here
  query GetAllPodcasts {
    getAllPodcasts {
      id
      name
      image
      title
      feedLink

      episodes {
        id
        url
        text
        date
      }
    }
  }
`;
