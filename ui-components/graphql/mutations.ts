/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $condition: ModelTodoConditionInput
    $input: CreateTodoInput!
  ) {
    createTodo(condition: $condition, input: $input) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $condition: ModelUserConditionInput
    $input: CreateUserInput!
  ) {
    createUser(condition: $condition, input: $input) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $condition: ModelTodoConditionInput
    $input: DeleteTodoInput!
  ) {
    deleteTodo(condition: $condition, input: $input) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $condition: ModelUserConditionInput
    $input: DeleteUserInput!
  ) {
    deleteUser(condition: $condition, input: $input) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $condition: ModelTodoConditionInput
    $input: UpdateTodoInput!
  ) {
    updateTodo(condition: $condition, input: $input) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $condition: ModelUserConditionInput
    $input: UpdateUserInput!
  ) {
    updateUser(condition: $condition, input: $input) {
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
