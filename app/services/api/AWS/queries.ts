/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
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
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const getWorkspace = /* GraphQL */ `query GetWorkspace($id: ID!) {
  getWorkspace(id: $id) {
    createdAt
    id
    name
    ownerId
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetWorkspaceQueryVariables,
  APITypes.GetWorkspaceQuery
>;
export const listTodoByTypeAndCreatedAt = /* GraphQL */ `query ListTodoByTypeAndCreatedAt(
  $createdAt: ModelStringKeyConditionInput
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $type: TodoType!
) {
  listTodoByTypeAndCreatedAt(
    createdAt: $createdAt
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    type: $type
  ) {
    items {
      content
      createdAt
      id
      isDone
      title
      type
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTodoByTypeAndCreatedAtQueryVariables,
  APITypes.ListTodoByTypeAndCreatedAtQuery
>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      content
      createdAt
      id
      isDone
      title
      type
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUsers(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const listUsersBySearchTerm = /* GraphQL */ `query ListUsersBySearchTerm(
  $filter: ModelUserFilterInput
  $firstNameLastName: ModelUserUsersBySearchTermAndFirstNameAndLastNameCompositeKeyConditionInput
  $limit: Int
  $nextToken: String
  $searchTerm: String!
  $sortDirection: ModelSortDirection
) {
  listUsersBySearchTerm(
    filter: $filter
    firstNameLastName: $firstNameLastName
    limit: $limit
    nextToken: $nextToken
    searchTerm: $searchTerm
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUsersBySearchTermQueryVariables,
  APITypes.ListUsersBySearchTermQuery
>;
export const listWorkspaces = /* GraphQL */ `query ListWorkspaces(
  $filter: ModelWorkspaceFilterInput
  $limit: Int
  $nextToken: String
) {
  listWorkspaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      name
      ownerId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWorkspacesQueryVariables,
  APITypes.ListWorkspacesQuery
>;
