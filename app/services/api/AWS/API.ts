/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Todo = {
  __typename: "Todo",
  content?: string | null,
  createdAt: string,
  id: string,
  isDone?: boolean | null,
  title?: string | null,
  type?: TodoType | null,
  updatedAt: string,
};

export enum TodoType {
  general = "general",
  personal = "personal",
  work = "work",
}


export type User = {
  __typename: "User",
  birthdate: string,
  createdAt: string,
  firstName: string,
  id: string,
  lastName: string,
  searchTerm: string,
  updatedAt: string,
  username: string,
};

export type Workspace = {
  __typename: "Workspace",
  createdAt: string,
  id: string,
  name?: string | null,
  ownerId: string,
  updatedAt: string,
};

export type ModelStringKeyConditionInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
};

export type ModelTodoFilterInput = {
  and?: Array< ModelTodoFilterInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isDone?: ModelBooleanInput | null,
  not?: ModelTodoFilterInput | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  title?: ModelStringInput | null,
  type?: ModelTodoTypeInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelTodoTypeInput = {
  eq?: TodoType | null,
  ne?: TodoType | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  and?: Array< ModelUserFilterInput | null > | null,
  birthdate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  lastName?: ModelStringInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  searchTerm?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelUserUsersBySearchTermAndFirstNameAndLastNameCompositeKeyConditionInput = {
  beginsWith?: ModelUserUsersBySearchTermAndFirstNameAndLastNameCompositeKeyInput | null,
  between?: Array< ModelUserUsersBySearchTermAndFirstNameAndLastNameCompositeKeyInput | null > | null,
  eq?: ModelUserUsersBySearchTermAndFirstNameAndLastNameCompositeKeyInput | null,
  ge?: ModelUserUsersBySearchTermAndFirstNameAndLastNameCompositeKeyInput | null,
  gt?: ModelUserUsersBySearchTermAndFirstNameAndLastNameCompositeKeyInput | null,
  le?: ModelUserUsersBySearchTermAndFirstNameAndLastNameCompositeKeyInput | null,
  lt?: ModelUserUsersBySearchTermAndFirstNameAndLastNameCompositeKeyInput | null,
};

export type ModelUserUsersBySearchTermAndFirstNameAndLastNameCompositeKeyInput = {
  firstName?: string | null,
  lastName?: string | null,
};

export type ModelWorkspaceFilterInput = {
  and?: Array< ModelWorkspaceFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelWorkspaceFilterInput | null,
  or?: Array< ModelWorkspaceFilterInput | null > | null,
  ownerId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelWorkspaceConnection = {
  __typename: "ModelWorkspaceConnection",
  items:  Array<Workspace | null >,
  nextToken?: string | null,
};

export type ModelTodoConditionInput = {
  and?: Array< ModelTodoConditionInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  isDone?: ModelBooleanInput | null,
  not?: ModelTodoConditionInput | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  title?: ModelStringInput | null,
  type?: ModelTodoTypeInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTodoInput = {
  content?: string | null,
  createdAt?: string | null,
  id?: string | null,
  isDone?: boolean | null,
  title?: string | null,
  type?: TodoType | null,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  birthdate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  searchTerm?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type CreateUserInput = {
  birthdate: string,
  firstName: string,
  id?: string | null,
  lastName: string,
  searchTerm: string,
  username: string,
};

export type ModelWorkspaceConditionInput = {
  and?: Array< ModelWorkspaceConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelWorkspaceConditionInput | null,
  or?: Array< ModelWorkspaceConditionInput | null > | null,
  ownerId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateWorkspaceInput = {
  id?: string | null,
  name?: string | null,
  ownerId: string,
};

export type DeleteTodoInput = {
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type DeleteWorkspaceInput = {
  id: string,
};

export type UpdateTodoInput = {
  content?: string | null,
  createdAt?: string | null,
  id: string,
  isDone?: boolean | null,
  title?: string | null,
  type?: TodoType | null,
};

export type UpdateUserInput = {
  birthdate?: string | null,
  firstName?: string | null,
  id: string,
  lastName?: string | null,
  searchTerm?: string | null,
  username?: string | null,
};

export type UpdateWorkspaceInput = {
  id: string,
  name?: string | null,
  ownerId?: string | null,
};

export type ModelSubscriptionTodoFilterInput = {
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isDone?: ModelSubscriptionBooleanInput | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  title?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  birthdate?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  searchTerm?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionWorkspaceFilterInput = {
  and?: Array< ModelSubscriptionWorkspaceFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionWorkspaceFilterInput | null > | null,
  ownerId?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    title?: string | null,
    type?: TodoType | null,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    birthdate: string,
    createdAt: string,
    firstName: string,
    id: string,
    lastName: string,
    searchTerm: string,
    updatedAt: string,
    username: string,
  } | null,
};

export type GetWorkspaceQueryVariables = {
  id: string,
};

export type GetWorkspaceQuery = {
  getWorkspace?:  {
    __typename: "Workspace",
    createdAt: string,
    id: string,
    name?: string | null,
    ownerId: string,
    updatedAt: string,
  } | null,
};

export type ListTodoByTypeAndCreatedAtQueryVariables = {
  createdAt?: ModelStringKeyConditionInput | null,
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  type: TodoType,
};

export type ListTodoByTypeAndCreatedAtQuery = {
  listTodoByTypeAndCreatedAt?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      content?: string | null,
      createdAt: string,
      id: string,
      isDone?: boolean | null,
      title?: string | null,
      type?: TodoType | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      content?: string | null,
      createdAt: string,
      id: string,
      isDone?: boolean | null,
      title?: string | null,
      type?: TodoType | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      birthdate: string,
      createdAt: string,
      firstName: string,
      id: string,
      lastName: string,
      searchTerm: string,
      updatedAt: string,
      username: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersBySearchTermQueryVariables = {
  filter?: ModelUserFilterInput | null,
  firstNameLastName?: ModelUserUsersBySearchTermAndFirstNameAndLastNameCompositeKeyConditionInput | null,
  limit?: number | null,
  nextToken?: string | null,
  searchTerm: string,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersBySearchTermQuery = {
  listUsersBySearchTerm?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      birthdate: string,
      createdAt: string,
      firstName: string,
      id: string,
      lastName: string,
      searchTerm: string,
      updatedAt: string,
      username: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListWorkspacesQueryVariables = {
  filter?: ModelWorkspaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkspacesQuery = {
  listWorkspaces?:  {
    __typename: "ModelWorkspaceConnection",
    items:  Array< {
      __typename: "Workspace",
      createdAt: string,
      id: string,
      name?: string | null,
      ownerId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: CreateTodoInput,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    title?: string | null,
    type?: TodoType | null,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    birthdate: string,
    createdAt: string,
    firstName: string,
    id: string,
    lastName: string,
    searchTerm: string,
    updatedAt: string,
    username: string,
  } | null,
};

export type CreateWorkspaceMutationVariables = {
  condition?: ModelWorkspaceConditionInput | null,
  input: CreateWorkspaceInput,
};

export type CreateWorkspaceMutation = {
  createWorkspace?:  {
    __typename: "Workspace",
    createdAt: string,
    id: string,
    name?: string | null,
    ownerId: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: DeleteTodoInput,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    title?: string | null,
    type?: TodoType | null,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    birthdate: string,
    createdAt: string,
    firstName: string,
    id: string,
    lastName: string,
    searchTerm: string,
    updatedAt: string,
    username: string,
  } | null,
};

export type DeleteWorkspaceMutationVariables = {
  condition?: ModelWorkspaceConditionInput | null,
  input: DeleteWorkspaceInput,
};

export type DeleteWorkspaceMutation = {
  deleteWorkspace?:  {
    __typename: "Workspace",
    createdAt: string,
    id: string,
    name?: string | null,
    ownerId: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: UpdateTodoInput,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    title?: string | null,
    type?: TodoType | null,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    birthdate: string,
    createdAt: string,
    firstName: string,
    id: string,
    lastName: string,
    searchTerm: string,
    updatedAt: string,
    username: string,
  } | null,
};

export type UpdateWorkspaceMutationVariables = {
  condition?: ModelWorkspaceConditionInput | null,
  input: UpdateWorkspaceInput,
};

export type UpdateWorkspaceMutation = {
  updateWorkspace?:  {
    __typename: "Workspace",
    createdAt: string,
    id: string,
    name?: string | null,
    ownerId: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    title?: string | null,
    type?: TodoType | null,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    birthdate: string,
    createdAt: string,
    firstName: string,
    id: string,
    lastName: string,
    searchTerm: string,
    updatedAt: string,
    username: string,
  } | null,
};

export type OnCreateWorkspaceSubscriptionVariables = {
  filter?: ModelSubscriptionWorkspaceFilterInput | null,
  ownerId?: string | null,
};

export type OnCreateWorkspaceSubscription = {
  onCreateWorkspace?:  {
    __typename: "Workspace",
    createdAt: string,
    id: string,
    name?: string | null,
    ownerId: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    title?: string | null,
    type?: TodoType | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    birthdate: string,
    createdAt: string,
    firstName: string,
    id: string,
    lastName: string,
    searchTerm: string,
    updatedAt: string,
    username: string,
  } | null,
};

export type OnDeleteWorkspaceSubscriptionVariables = {
  filter?: ModelSubscriptionWorkspaceFilterInput | null,
  ownerId?: string | null,
};

export type OnDeleteWorkspaceSubscription = {
  onDeleteWorkspace?:  {
    __typename: "Workspace",
    createdAt: string,
    id: string,
    name?: string | null,
    ownerId: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    title?: string | null,
    type?: TodoType | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    birthdate: string,
    createdAt: string,
    firstName: string,
    id: string,
    lastName: string,
    searchTerm: string,
    updatedAt: string,
    username: string,
  } | null,
};

export type OnUpdateWorkspaceSubscriptionVariables = {
  filter?: ModelSubscriptionWorkspaceFilterInput | null,
  ownerId?: string | null,
};

export type OnUpdateWorkspaceSubscription = {
  onUpdateWorkspace?:  {
    __typename: "Workspace",
    createdAt: string,
    id: string,
    name?: string | null,
    ownerId: string,
    updatedAt: string,
  } | null,
};
