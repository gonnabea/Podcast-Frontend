/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PodcastSearchInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: PodcastQuery
// ====================================================

export interface PodcastQuery_getPodcast_podcast_creator {
  __typename: "User";
  id: number;
}

export interface PodcastQuery_getPodcast_podcast_episodes {
  __typename: "Episode";
  title: string;
  category: string;
}

export interface PodcastQuery_getPodcast_podcast {
  __typename: "Podcast";
  title: string;
  category: string;
  rating: number | null;
  creator: PodcastQuery_getPodcast_podcast_creator;
  episodes: PodcastQuery_getPodcast_podcast_episodes[] | null;
}

export interface PodcastQuery_getPodcast {
  __typename: "PodcastOutput";
  ok: boolean;
  error: string | null;
  podcast: PodcastQuery_getPodcast_podcast | null;
}

export interface PodcastQuery {
  getPodcast: PodcastQuery_getPodcast;
}

export interface PodcastQueryVariables {
  podcastSearchInput: PodcastSearchInput;
}
