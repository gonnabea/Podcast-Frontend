/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdatePodcastInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdatePodcastMutation
// ====================================================

export interface UpdatePodcastMutation_updatePodcast {
  __typename: "CoreOutput";
  ok: boolean;
  error: string | null;
}

export interface UpdatePodcastMutation {
  updatePodcast: UpdatePodcastMutation_updatePodcast;
}

export interface UpdatePodcastMutationVariables {
  updatePodcastInput: UpdatePodcastInput;
}
