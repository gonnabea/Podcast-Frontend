/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum UserRole {
  Host = "Host",
  Listener = "Listener",
}

export interface CreateAccountInput {
  email?: string | null;
  password?: string | null;
  role?: UserRole | null;
}

export interface CreatePodcastInput {
  title: string;
  category: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface PodcastSearchInput {
  id: number;
}

export interface UpdatePodcastInput {
  id: number;
  payload: UpdatePodcastPayload;
}

export interface UpdatePodcastPayload {
  title?: string | null;
  category?: string | null;
  rating?: number | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
