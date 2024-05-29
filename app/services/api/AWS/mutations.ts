/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $condition: ModelTodoConditionInput
  $input: CreateTodoInput!
) {
  createTodo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const createWorkspace = /* GraphQL */ `mutation CreateWorkspace(
  $condition: ModelWorkspaceConditionInput
  $input: CreateWorkspaceInput!
) {
  createWorkspace(condition: $condition, input: $input) {
    createdAt
    id
    name
    ownerId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateWorkspaceMutationVariables,
  APITypes.CreateWorkspaceMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $condition: ModelTodoConditionInput
  $input: DeleteTodoInput!
) {
  deleteTodo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const deleteWorkspace = /* GraphQL */ `mutation DeleteWorkspace(
  $condition: ModelWorkspaceConditionInput
  $input: DeleteWorkspaceInput!
) {
  deleteWorkspace(condition: $condition, input: $input) {
    createdAt
    id
    name
    ownerId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteWorkspaceMutationVariables,
  APITypes.DeleteWorkspaceMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $condition: ModelTodoConditionInput
  $input: UpdateTodoInput!
) {
  updateTodo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const updateWorkspace = /* GraphQL */ `mutation UpdateWorkspace(
  $condition: ModelWorkspaceConditionInput
  $input: UpdateWorkspaceInput!
) {
  updateWorkspace(condition: $condition, input: $input) {
    createdAt
    id
    name
    ownerId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateWorkspaceMutationVariables,
  APITypes.UpdateWorkspaceMutation
>;
