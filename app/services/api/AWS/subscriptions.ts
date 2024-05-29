/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
    content
    createdAt
    id
    isDone
    title
    type
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    birthdate
    createdAt
    firstName
    id
    lastName
    searchTerm
    updatedAt
    username
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onCreateWorkspace = /* GraphQL */ `subscription OnCreateWorkspace(
  $filter: ModelSubscriptionWorkspaceFilterInput
  $ownerId: String
) {
  onCreateWorkspace(filter: $filter, ownerId: $ownerId) {
    createdAt
    id
    name
    ownerId
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateWorkspaceSubscriptionVariables,
  APITypes.OnCreateWorkspaceSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
    content
    createdAt
    id
    isDone
    title
    type
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    birthdate
    createdAt
    firstName
    id
    lastName
    searchTerm
    updatedAt
    username
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onDeleteWorkspace = /* GraphQL */ `subscription OnDeleteWorkspace(
  $filter: ModelSubscriptionWorkspaceFilterInput
  $ownerId: String
) {
  onDeleteWorkspace(filter: $filter, ownerId: $ownerId) {
    createdAt
    id
    name
    ownerId
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteWorkspaceSubscriptionVariables,
  APITypes.OnDeleteWorkspaceSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
    content
    createdAt
    id
    isDone
    title
    type
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    birthdate
    createdAt
    firstName
    id
    lastName
    searchTerm
    updatedAt
    username
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onUpdateWorkspace = /* GraphQL */ `subscription OnUpdateWorkspace(
  $filter: ModelSubscriptionWorkspaceFilterInput
  $ownerId: String
) {
  onUpdateWorkspace(filter: $filter, ownerId: $ownerId) {
    createdAt
    id
    name
    ownerId
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateWorkspaceSubscriptionVariables,
  APITypes.OnUpdateWorkspaceSubscription
>;
