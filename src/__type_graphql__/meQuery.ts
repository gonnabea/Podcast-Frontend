/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserRole } from "./globalTypes";

// ====================================================
// GraphQL query operation: meQuery
// ====================================================

export interface meQuery_me_podcasts {
  __typename: "Podcast";
  id: number;
}

export interface meQuery_me {
  __typename: "User";
  id: number;
  email: string;
  role: UserRole;
  podcasts: meQuery_me_podcasts[];
}

export interface meQuery {
  me: meQuery_me;
}
