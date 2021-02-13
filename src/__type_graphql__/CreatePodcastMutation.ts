/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreatePodcastInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreatePodcastMutation
// ====================================================

export interface CreatePodcastMutation_createPodcast {
  __typename: "CreatePodcastOutput";
  ok: boolean;
  error: string | null;
  id: number | null;
}

export interface CreatePodcastMutation {
  createPodcast: CreatePodcastMutation_createPodcast;
}

export interface CreatePodcastMutationVariables {
  createPodcastInput: CreatePodcastInput;
}
