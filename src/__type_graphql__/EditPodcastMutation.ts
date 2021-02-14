/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdatePodcastInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: EditPodcastMutation
// ====================================================

export interface EditPodcastMutation_updatePodcast {
  __typename: "CoreOutput";
  ok: boolean;
  error: string | null;
}

export interface EditPodcastMutation {
  updatePodcast: EditPodcastMutation_updatePodcast;
}

export interface EditPodcastMutationVariables {
  updatePodcastInput: UpdatePodcastInput;
}
