/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onCreateTodo(filter: $filter, owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onDeleteTodo(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onUpdateTodo(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
