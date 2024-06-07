/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      createdAt
      date
      id
      owner
      title
      updatedAt
      user {
        createdAt
        email
        familyName
        givenName
        id
        owner
        updatedAt
        __typename
      }
      userId
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      createdAt
      email
      familyName
      givenName
      id
      owner
      todos {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const listTodoByUserIdAndDate = /* GraphQL */ `
  query ListTodoByUserIdAndDate(
    $date: ModelStringKeyConditionInput
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
    $userId: ID!
  ) {
    listTodoByUserIdAndDate(
      date: $date
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
      userId: $userId
    ) {
      items {
        createdAt
        date
        id
        owner
        title
        updatedAt
        userId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        date
        id
        owner
        title
        updatedAt
        userId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        email
        familyName
        givenName
        id
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
