/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type User = {
  __typename: "User",
  birthDate?: string | null,
  createdAt: string,
  firstName?: string | null,
  id: string,
  lastName?: string | null,
  owner?: string | null,
  phoneNumber: string,
  profileImage?: string | null,
  profileImageBlurHash?: string | null,
  pushToken?: string | null,
  searchTerm?: string | null,
  type?: UserType | null,
  updatedAt: string,
  username?: string | null,
};

export enum UserType {
  ADMIN = "ADMIN",
  USER = "USER",
}


export type Cart = {
  __typename: "Cart",
  createdAt: string,
  customer?: Customer | null,
  customerId?: string | null,
  id: string,
  items?: Array< string > | null,
  updatedAt: string,
};

export type Customer = {
  __typename: "Customer",
  activeCart?: Cart | null,
  createdAt: string,
  id: string,
  name?: string | null,
  updatedAt: string,
};

export type Example = {
  __typename: "Example",
  createdAt: string,
  id: string,
  name: string,
  type: string,
  updatedAt: string,
};

export type locations = {
  __typename: "locations",
  geom: string,
  id: string,
  name: string,
};

export type Message = {
  __typename: "Message",
  content: string,
  createdAt: string,
  id: string,
  receiverId: string,
  senderId: string,
  status: string,
  updatedAt: string,
  viewedTimeStamp: number,
};

export type posts = {
  __typename: "posts",
  id: string,
  owner?: string | null,
  published?: boolean | null,
  title: string,
};

export type spatial_ref_sys = {
  __typename: "spatial_ref_sys",
  auth_name?: string | null,
  auth_srid?: number | null,
  proj4text?: string | null,
  srid: number,
  srtext?: string | null,
};

export type ModelMessageFilterInput = {
  and?: Array< ModelMessageFilterInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelMessageFilterInput | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  receiverId?: ModelStringInput | null,
  senderId?: ModelStringInput | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  viewedTimeStamp?: ModelIntInput | null,
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

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelIntKeyConditionInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type ModelExampleFilterInput = {
  and?: Array< ModelExampleFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelExampleFilterInput | null,
  or?: Array< ModelExampleFilterInput | null > | null,
  type?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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

export type ModelExampleConnection = {
  __typename: "ModelExampleConnection",
  items:  Array<Example | null >,
  nextToken?: string | null,
};

export type ModelCartFilterInput = {
  and?: Array< ModelCartFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  customerId?: ModelIDInput | null,
  id?: ModelIDInput | null,
  items?: ModelStringInput | null,
  not?: ModelCartFilterInput | null,
  or?: Array< ModelCartFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelCartConnection = {
  __typename: "ModelCartConnection",
  items:  Array<Cart | null >,
  nextToken?: string | null,
};

export type ModelCustomerFilterInput = {
  and?: Array< ModelCustomerFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelCustomerFilterInput | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items:  Array<Customer | null >,
  nextToken?: string | null,
};

export type EventWithDecodedCoord = {
  __typename: "EventWithDecodedCoord",
  address?: string | null,
  id?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  name?: string | null,
};

export type ModelLocationsFilterInput = {
  and?: Array< ModelLocationsFilterInput | null > | null,
  geom?: ModelStringInput | null,
  id?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelLocationsFilterInput | null,
  or?: Array< ModelLocationsFilterInput | null > | null,
};

export type ModelLocationsConnection = {
  __typename: "ModelLocationsConnection",
  items:  Array<locations | null >,
  nextToken?: string | null,
};

export type ModelPostsFilterInput = {
  and?: Array< ModelPostsFilterInput | null > | null,
  id?: ModelStringInput | null,
  not?: ModelPostsFilterInput | null,
  or?: Array< ModelPostsFilterInput | null > | null,
  owner?: ModelStringInput | null,
  published?: ModelBooleanInput | null,
  title?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelPostsConnection = {
  __typename: "ModelPostsConnection",
  items:  Array<posts | null >,
  nextToken?: string | null,
};

export type ModelSpatial_ref_sysFilterInput = {
  and?: Array< ModelSpatial_ref_sysFilterInput | null > | null,
  auth_name?: ModelStringInput | null,
  auth_srid?: ModelIntInput | null,
  not?: ModelSpatial_ref_sysFilterInput | null,
  or?: Array< ModelSpatial_ref_sysFilterInput | null > | null,
  proj4text?: ModelStringInput | null,
  srid?: ModelIntInput | null,
  srtext?: ModelStringInput | null,
};

export type ModelSpatial_ref_sysConnection = {
  __typename: "ModelSpatial_ref_sysConnection",
  items:  Array<spatial_ref_sys | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  and?: Array< ModelUserFilterInput | null > | null,
  birthDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  lastName?: ModelStringInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  profileImage?: ModelStringInput | null,
  profileImageBlurHash?: ModelStringInput | null,
  pushToken?: ModelStringInput | null,
  searchTerm?: ModelStringInput | null,
  type?: ModelUserTypeInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type ModelUserTypeInput = {
  eq?: UserType | null,
  ne?: UserType | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelIDKeyConditionInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
};

export type ModelCartConditionInput = {
  and?: Array< ModelCartConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  customerId?: ModelIDInput | null,
  items?: ModelStringInput | null,
  not?: ModelCartConditionInput | null,
  or?: Array< ModelCartConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCartInput = {
  customerId?: string | null,
  id?: string | null,
  items?: Array< string > | null,
};

export type ModelCustomerConditionInput = {
  and?: Array< ModelCustomerConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelCustomerConditionInput | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCustomerInput = {
  id?: string | null,
  name?: string | null,
};

export type ModelExampleConditionInput = {
  and?: Array< ModelExampleConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelExampleConditionInput | null,
  or?: Array< ModelExampleConditionInput | null > | null,
  type?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateExampleInput = {
  id?: string | null,
  name: string,
  type: string,
};

export type ModelLocationsConditionInput = {
  and?: Array< ModelLocationsConditionInput | null > | null,
  geom?: ModelStringInput | null,
  id?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelLocationsConditionInput | null,
  or?: Array< ModelLocationsConditionInput | null > | null,
};

export type CreateLocationsInput = {
  geom: string,
  id?: string | null,
  name: string,
};

export type ModelMessageConditionInput = {
  and?: Array< ModelMessageConditionInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelMessageConditionInput | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  receiverId?: ModelStringInput | null,
  senderId?: ModelStringInput | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  viewedTimeStamp?: ModelIntInput | null,
};

export type CreateMessageInput = {
  content: string,
  createdAt?: string | null,
  id?: string | null,
  receiverId: string,
  senderId: string,
  status: string,
  viewedTimeStamp: number,
};

export type ModelPostsConditionInput = {
  and?: Array< ModelPostsConditionInput | null > | null,
  id?: ModelStringInput | null,
  not?: ModelPostsConditionInput | null,
  or?: Array< ModelPostsConditionInput | null > | null,
  owner?: ModelStringInput | null,
  published?: ModelBooleanInput | null,
  title?: ModelStringInput | null,
};

export type CreatePostsInput = {
  id?: string | null,
  owner?: string | null,
  published?: boolean | null,
  title: string,
};

export type ModelSpatial_ref_sysConditionInput = {
  and?: Array< ModelSpatial_ref_sysConditionInput | null > | null,
  auth_name?: ModelStringInput | null,
  auth_srid?: ModelIntInput | null,
  not?: ModelSpatial_ref_sysConditionInput | null,
  or?: Array< ModelSpatial_ref_sysConditionInput | null > | null,
  proj4text?: ModelStringInput | null,
  srid?: ModelIntInput | null,
  srtext?: ModelStringInput | null,
};

export type CreateSpatial_ref_sysInput = {
  auth_name?: string | null,
  auth_srid?: number | null,
  proj4text?: string | null,
  srid: number,
  srtext?: string | null,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  birthDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  owner?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  profileImage?: ModelStringInput | null,
  profileImageBlurHash?: ModelStringInput | null,
  pushToken?: ModelStringInput | null,
  searchTerm?: ModelStringInput | null,
  type?: ModelUserTypeInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type CreateUserInput = {
  birthDate?: string | null,
  firstName?: string | null,
  id?: string | null,
  lastName?: string | null,
  phoneNumber: string,
  profileImage?: string | null,
  profileImageBlurHash?: string | null,
  pushToken?: string | null,
  searchTerm?: string | null,
  type?: UserType | null,
  username?: string | null,
};

export type DeleteCartInput = {
  id: string,
};

export type DeleteCustomerInput = {
  id: string,
};

export type DeleteExampleInput = {
  id: string,
};

export type DeleteLocationsInput = {
  id: string,
};

export type DeleteMessageInput = {
  id: string,
};

export type DeletePostsInput = {
  id: string,
};

export type DeleteSpatial_ref_sysInput = {
  srid: number,
};

export type DeleteUserInput = {
  id: string,
};

export type UpdateCartInput = {
  customerId?: string | null,
  id: string,
  items?: Array< string > | null,
};

export type UpdateCustomerInput = {
  id: string,
  name?: string | null,
};

export type UpdateExampleInput = {
  id: string,
  name?: string | null,
  type?: string | null,
};

export type UpdateLocationsInput = {
  geom?: string | null,
  id: string,
  name?: string | null,
};

export type UpdateMessageInput = {
  content?: string | null,
  createdAt?: string | null,
  id: string,
  receiverId?: string | null,
  senderId?: string | null,
  status?: string | null,
  viewedTimeStamp?: number | null,
};

export type UpdatePostsInput = {
  id: string,
  owner?: string | null,
  published?: boolean | null,
  title?: string | null,
};

export type UpdateSpatial_ref_sysInput = {
  auth_name?: string | null,
  auth_srid?: number | null,
  proj4text?: string | null,
  srid: number,
  srtext?: string | null,
};

export type UpdateUserInput = {
  birthDate?: string | null,
  firstName?: string | null,
  id: string,
  lastName?: string | null,
  phoneNumber?: string | null,
  profileImage?: string | null,
  profileImageBlurHash?: string | null,
  pushToken?: string | null,
  searchTerm?: string | null,
  type?: UserType | null,
  username?: string | null,
};

export type ModelSubscriptionCartFilterInput = {
  and?: Array< ModelSubscriptionCartFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  customerId?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  items?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionCartFilterInput | null > | null,
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

export type ModelSubscriptionCustomerFilterInput = {
  and?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionExampleFilterInput = {
  and?: Array< ModelSubscriptionExampleFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionExampleFilterInput | null > | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionLocationsFilterInput = {
  and?: Array< ModelSubscriptionLocationsFilterInput | null > | null,
  geom?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionLocationsFilterInput | null > | null,
};

export type ModelSubscriptionMessageFilterInput = {
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  receiverId?: ModelStringInput | null,
  senderId?: ModelStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  viewedTimeStamp?: ModelSubscriptionIntInput | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionPostsFilterInput = {
  and?: Array< ModelSubscriptionPostsFilterInput | null > | null,
  id?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionPostsFilterInput | null > | null,
  owner?: ModelSubscriptionStringInput | null,
  published?: ModelSubscriptionBooleanInput | null,
  title?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionSpatial_ref_sysFilterInput = {
  and?: Array< ModelSubscriptionSpatial_ref_sysFilterInput | null > | null,
  auth_name?: ModelSubscriptionStringInput | null,
  auth_srid?: ModelSubscriptionIntInput | null,
  or?: Array< ModelSubscriptionSpatial_ref_sysFilterInput | null > | null,
  proj4text?: ModelSubscriptionStringInput | null,
  srid?: ModelSubscriptionIntInput | null,
  srtext?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  birthDate?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  profileImage?: ModelSubscriptionStringInput | null,
  profileImageBlurHash?: ModelSubscriptionStringInput | null,
  pushToken?: ModelSubscriptionStringInput | null,
  searchTerm?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
};

export type CheckBatchOfPhoneNumbersForActiveUsersQueryVariables = {
  userIds?: Array< string | null > | null,
};

export type CheckBatchOfPhoneNumbersForActiveUsersQuery = {
  checkBatchOfPhoneNumbersForActiveUsers?:  Array< {
    __typename: "User",
    birthDate?: string | null,
    createdAt: string,
    firstName?: string | null,
    id: string,
    lastName?: string | null,
    owner?: string | null,
    phoneNumber: string,
    profileImage?: string | null,
    profileImageBlurHash?: string | null,
    pushToken?: string | null,
    searchTerm?: string | null,
    type?: UserType | null,
    updatedAt: string,
    username?: string | null,
  } | null > | null,
};

export type GetCartQueryVariables = {
  id: string,
};

export type GetCartQuery = {
  getCart?:  {
    __typename: "Cart",
    createdAt: string,
    customer?:  {
      __typename: "Customer",
      createdAt: string,
      id: string,
      name?: string | null,
      updatedAt: string,
    } | null,
    customerId?: string | null,
    id: string,
    items?: Array< string > | null,
    updatedAt: string,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    activeCart?:  {
      __typename: "Cart",
      createdAt: string,
      customerId?: string | null,
      id: string,
      items?: Array< string > | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    name?: string | null,
    updatedAt: string,
  } | null,
};

export type GetExampleQueryVariables = {
  id: string,
};

export type GetExampleQuery = {
  getExample?:  {
    __typename: "Example",
    createdAt: string,
    id: string,
    name: string,
    type: string,
    updatedAt: string,
  } | null,
};

export type GetLocationsQueryVariables = {
  id: string,
};

export type GetLocationsQuery = {
  getLocations?:  {
    __typename: "locations",
    geom: string,
    id: string,
    name: string,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    content: string,
    createdAt: string,
    id: string,
    receiverId: string,
    senderId: string,
    status: string,
    updatedAt: string,
    viewedTimeStamp: number,
  } | null,
};

export type GetPostsQueryVariables = {
  id: string,
};

export type GetPostsQuery = {
  getPosts?:  {
    __typename: "posts",
    id: string,
    owner?: string | null,
    published?: boolean | null,
    title: string,
  } | null,
};

export type GetSpatial_ref_sysQueryVariables = {
  srid: number,
};

export type GetSpatial_ref_sysQuery = {
  getSpatial_ref_sys?:  {
    __typename: "spatial_ref_sys",
    auth_name?: string | null,
    auth_srid?: number | null,
    proj4text?: string | null,
    srid: number,
    srtext?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    birthDate?: string | null,
    createdAt: string,
    firstName?: string | null,
    id: string,
    lastName?: string | null,
    owner?: string | null,
    phoneNumber: string,
    profileImage?: string | null,
    profileImageBlurHash?: string | null,
    pushToken?: string | null,
    searchTerm?: string | null,
    type?: UserType | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type ListByReceiverIdAndViewedTimeStampQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  receiverId: string,
  sortDirection?: ModelSortDirection | null,
  viewedTimeStamp?: ModelIntKeyConditionInput | null,
};

export type ListByReceiverIdAndViewedTimeStampQuery = {
  listByReceiverIdAndViewedTimeStamp?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      content: string,
      createdAt: string,
      id: string,
      receiverId: string,
      senderId: string,
      status: string,
      updatedAt: string,
      viewedTimeStamp: number,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListBySenderIdAndViewedTimeStampQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  senderId: string,
  sortDirection?: ModelSortDirection | null,
  viewedTimeStamp?: ModelIntKeyConditionInput | null,
};

export type ListBySenderIdAndViewedTimeStampQuery = {
  listBySenderIdAndViewedTimeStamp?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      content: string,
      createdAt: string,
      id: string,
      receiverId: string,
      senderId: string,
      status: string,
      updatedAt: string,
      viewedTimeStamp: number,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListByTypeAndNameQueryVariables = {
  filter?: ModelExampleFilterInput | null,
  limit?: number | null,
  name?: ModelStringKeyConditionInput | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  type: string,
};

export type ListByTypeAndNameQuery = {
  listByTypeAndName?:  {
    __typename: "ModelExampleConnection",
    items:  Array< {
      __typename: "Example",
      createdAt: string,
      id: string,
      name: string,
      type: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCartsQueryVariables = {
  filter?: ModelCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartsQuery = {
  listCarts?:  {
    __typename: "ModelCartConnection",
    items:  Array< {
      __typename: "Cart",
      createdAt: string,
      customerId?: string | null,
      id: string,
      items?: Array< string > | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      createdAt: string,
      id: string,
      name?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListEventsWithDecodedLatLongQueryVariables = {
};

export type ListEventsWithDecodedLatLongQuery = {
  listEventsWithDecodedLatLong?:  Array< {
    __typename: "EventWithDecodedCoord",
    address?: string | null,
    id?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    name?: string | null,
  } | null > | null,
};

export type ListExamplesQueryVariables = {
  filter?: ModelExampleFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListExamplesQuery = {
  listExamples?:  {
    __typename: "ModelExampleConnection",
    items:  Array< {
      __typename: "Example",
      createdAt: string,
      id: string,
      name: string,
      type: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLocationsQueryVariables = {
  filter?: ModelLocationsFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListLocationsQuery = {
  listLocations?:  {
    __typename: "ModelLocationsConnection",
    items:  Array< {
      __typename: "locations",
      geom: string,
      id: string,
      name: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      content: string,
      createdAt: string,
      id: string,
      receiverId: string,
      senderId: string,
      status: string,
      updatedAt: string,
      viewedTimeStamp: number,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostsFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostsConnection",
    items:  Array< {
      __typename: "posts",
      id: string,
      owner?: string | null,
      published?: boolean | null,
      title: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListSpatial_ref_sysQueryVariables = {
  filter?: ModelSpatial_ref_sysFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  srid?: number | null,
};

export type ListSpatial_ref_sysQuery = {
  listSpatial_ref_sys?:  {
    __typename: "ModelSpatial_ref_sysConnection",
    items:  Array< {
      __typename: "spatial_ref_sys",
      auth_name?: string | null,
      auth_srid?: number | null,
      proj4text?: string | null,
      srid: number,
      srtext?: string | null,
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
      birthDate?: string | null,
      createdAt: string,
      firstName?: string | null,
      id: string,
      lastName?: string | null,
      owner?: string | null,
      phoneNumber: string,
      profileImage?: string | null,
      profileImageBlurHash?: string | null,
      pushToken?: string | null,
      searchTerm?: string | null,
      type?: UserType | null,
      updatedAt: string,
      username?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersByPhoneNumberQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  phoneNumber: string,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersByPhoneNumberQuery = {
  listUsersByPhoneNumber?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      birthDate?: string | null,
      createdAt: string,
      firstName?: string | null,
      id: string,
      lastName?: string | null,
      owner?: string | null,
      phoneNumber: string,
      profileImage?: string | null,
      profileImageBlurHash?: string | null,
      pushToken?: string | null,
      searchTerm?: string | null,
      type?: UserType | null,
      updatedAt: string,
      username?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersBySearchTermQueryVariables = {
  filter?: ModelUserFilterInput | null,
  id?: ModelIDKeyConditionInput | null,
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
      birthDate?: string | null,
      createdAt: string,
      firstName?: string | null,
      id: string,
      lastName?: string | null,
      owner?: string | null,
      phoneNumber: string,
      profileImage?: string | null,
      profileImageBlurHash?: string | null,
      pushToken?: string | null,
      searchTerm?: string | null,
      type?: UserType | null,
      updatedAt: string,
      username?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateCartMutationVariables = {
  condition?: ModelCartConditionInput | null,
  input: CreateCartInput,
};

export type CreateCartMutation = {
  createCart?:  {
    __typename: "Cart",
    createdAt: string,
    customer?:  {
      __typename: "Customer",
      createdAt: string,
      id: string,
      name?: string | null,
      updatedAt: string,
    } | null,
    customerId?: string | null,
    id: string,
    items?: Array< string > | null,
    updatedAt: string,
  } | null,
};

export type CreateCustomerMutationVariables = {
  condition?: ModelCustomerConditionInput | null,
  input: CreateCustomerInput,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    activeCart?:  {
      __typename: "Cart",
      createdAt: string,
      customerId?: string | null,
      id: string,
      items?: Array< string > | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    name?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateExampleMutationVariables = {
  condition?: ModelExampleConditionInput | null,
  input: CreateExampleInput,
};

export type CreateExampleMutation = {
  createExample?:  {
    __typename: "Example",
    createdAt: string,
    id: string,
    name: string,
    type: string,
    updatedAt: string,
  } | null,
};

export type CreateLocationsMutationVariables = {
  condition?: ModelLocationsConditionInput | null,
  input: CreateLocationsInput,
};

export type CreateLocationsMutation = {
  createLocations?:  {
    __typename: "locations",
    geom: string,
    id: string,
    name: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  condition?: ModelMessageConditionInput | null,
  input: CreateMessageInput,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    content: string,
    createdAt: string,
    id: string,
    receiverId: string,
    senderId: string,
    status: string,
    updatedAt: string,
    viewedTimeStamp: number,
  } | null,
};

export type CreateNewLocationWithLongLatMutationVariables = {
  address: string,
  id: string,
  lat: number,
  long: number,
  name: string,
};

export type CreateNewLocationWithLongLatMutation = {
  createNewLocationWithLongLat?: string | null,
};

export type CreatePostsMutationVariables = {
  condition?: ModelPostsConditionInput | null,
  input: CreatePostsInput,
};

export type CreatePostsMutation = {
  createPosts?:  {
    __typename: "posts",
    id: string,
    owner?: string | null,
    published?: boolean | null,
    title: string,
  } | null,
};

export type CreateSpatial_ref_sysMutationVariables = {
  condition?: ModelSpatial_ref_sysConditionInput | null,
  input: CreateSpatial_ref_sysInput,
};

export type CreateSpatial_ref_sysMutation = {
  createSpatial_ref_sys?:  {
    __typename: "spatial_ref_sys",
    auth_name?: string | null,
    auth_srid?: number | null,
    proj4text?: string | null,
    srid: number,
    srtext?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    birthDate?: string | null,
    createdAt: string,
    firstName?: string | null,
    id: string,
    lastName?: string | null,
    owner?: string | null,
    phoneNumber: string,
    profileImage?: string | null,
    profileImageBlurHash?: string | null,
    pushToken?: string | null,
    searchTerm?: string | null,
    type?: UserType | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type DeleteCartMutationVariables = {
  condition?: ModelCartConditionInput | null,
  input: DeleteCartInput,
};

export type DeleteCartMutation = {
  deleteCart?:  {
    __typename: "Cart",
    createdAt: string,
    customer?:  {
      __typename: "Customer",
      createdAt: string,
      id: string,
      name?: string | null,
      updatedAt: string,
    } | null,
    customerId?: string | null,
    id: string,
    items?: Array< string > | null,
    updatedAt: string,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  condition?: ModelCustomerConditionInput | null,
  input: DeleteCustomerInput,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    activeCart?:  {
      __typename: "Cart",
      createdAt: string,
      customerId?: string | null,
      id: string,
      items?: Array< string > | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    name?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteExampleMutationVariables = {
  condition?: ModelExampleConditionInput | null,
  input: DeleteExampleInput,
};

export type DeleteExampleMutation = {
  deleteExample?:  {
    __typename: "Example",
    createdAt: string,
    id: string,
    name: string,
    type: string,
    updatedAt: string,
  } | null,
};

export type DeleteLocationsMutationVariables = {
  condition?: ModelLocationsConditionInput | null,
  input: DeleteLocationsInput,
};

export type DeleteLocationsMutation = {
  deleteLocations?:  {
    __typename: "locations",
    geom: string,
    id: string,
    name: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  condition?: ModelMessageConditionInput | null,
  input: DeleteMessageInput,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    content: string,
    createdAt: string,
    id: string,
    receiverId: string,
    senderId: string,
    status: string,
    updatedAt: string,
    viewedTimeStamp: number,
  } | null,
};

export type DeletePostsMutationVariables = {
  condition?: ModelPostsConditionInput | null,
  input: DeletePostsInput,
};

export type DeletePostsMutation = {
  deletePosts?:  {
    __typename: "posts",
    id: string,
    owner?: string | null,
    published?: boolean | null,
    title: string,
  } | null,
};

export type DeleteSpatial_ref_sysMutationVariables = {
  condition?: ModelSpatial_ref_sysConditionInput | null,
  input: DeleteSpatial_ref_sysInput,
};

export type DeleteSpatial_ref_sysMutation = {
  deleteSpatial_ref_sys?:  {
    __typename: "spatial_ref_sys",
    auth_name?: string | null,
    auth_srid?: number | null,
    proj4text?: string | null,
    srid: number,
    srtext?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    birthDate?: string | null,
    createdAt: string,
    firstName?: string | null,
    id: string,
    lastName?: string | null,
    owner?: string | null,
    phoneNumber: string,
    profileImage?: string | null,
    profileImageBlurHash?: string | null,
    pushToken?: string | null,
    searchTerm?: string | null,
    type?: UserType | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type UpdateCartMutationVariables = {
  condition?: ModelCartConditionInput | null,
  input: UpdateCartInput,
};

export type UpdateCartMutation = {
  updateCart?:  {
    __typename: "Cart",
    createdAt: string,
    customer?:  {
      __typename: "Customer",
      createdAt: string,
      id: string,
      name?: string | null,
      updatedAt: string,
    } | null,
    customerId?: string | null,
    id: string,
    items?: Array< string > | null,
    updatedAt: string,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  condition?: ModelCustomerConditionInput | null,
  input: UpdateCustomerInput,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    activeCart?:  {
      __typename: "Cart",
      createdAt: string,
      customerId?: string | null,
      id: string,
      items?: Array< string > | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    name?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateExampleMutationVariables = {
  condition?: ModelExampleConditionInput | null,
  input: UpdateExampleInput,
};

export type UpdateExampleMutation = {
  updateExample?:  {
    __typename: "Example",
    createdAt: string,
    id: string,
    name: string,
    type: string,
    updatedAt: string,
  } | null,
};

export type UpdateLocationsMutationVariables = {
  condition?: ModelLocationsConditionInput | null,
  input: UpdateLocationsInput,
};

export type UpdateLocationsMutation = {
  updateLocations?:  {
    __typename: "locations",
    geom: string,
    id: string,
    name: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  condition?: ModelMessageConditionInput | null,
  input: UpdateMessageInput,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    content: string,
    createdAt: string,
    id: string,
    receiverId: string,
    senderId: string,
    status: string,
    updatedAt: string,
    viewedTimeStamp: number,
  } | null,
};

export type UpdatePostsMutationVariables = {
  condition?: ModelPostsConditionInput | null,
  input: UpdatePostsInput,
};

export type UpdatePostsMutation = {
  updatePosts?:  {
    __typename: "posts",
    id: string,
    owner?: string | null,
    published?: boolean | null,
    title: string,
  } | null,
};

export type UpdateSpatial_ref_sysMutationVariables = {
  condition?: ModelSpatial_ref_sysConditionInput | null,
  input: UpdateSpatial_ref_sysInput,
};

export type UpdateSpatial_ref_sysMutation = {
  updateSpatial_ref_sys?:  {
    __typename: "spatial_ref_sys",
    auth_name?: string | null,
    auth_srid?: number | null,
    proj4text?: string | null,
    srid: number,
    srtext?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    birthDate?: string | null,
    createdAt: string,
    firstName?: string | null,
    id: string,
    lastName?: string | null,
    owner?: string | null,
    phoneNumber: string,
    profileImage?: string | null,
    profileImageBlurHash?: string | null,
    pushToken?: string | null,
    searchTerm?: string | null,
    type?: UserType | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type OnCreateCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnCreateCartSubscription = {
  onCreateCart?:  {
    __typename: "Cart",
    createdAt: string,
    customer?:  {
      __typename: "Customer",
      createdAt: string,
      id: string,
      name?: string | null,
      updatedAt: string,
    } | null,
    customerId?: string | null,
    id: string,
    items?: Array< string > | null,
    updatedAt: string,
  } | null,
};

export type OnCreateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    activeCart?:  {
      __typename: "Cart",
      createdAt: string,
      customerId?: string | null,
      id: string,
      items?: Array< string > | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    name?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateExampleSubscriptionVariables = {
  filter?: ModelSubscriptionExampleFilterInput | null,
};

export type OnCreateExampleSubscription = {
  onCreateExample?:  {
    __typename: "Example",
    createdAt: string,
    id: string,
    name: string,
    type: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLocationsSubscriptionVariables = {
  filter?: ModelSubscriptionLocationsFilterInput | null,
};

export type OnCreateLocationsSubscription = {
  onCreateLocations?:  {
    __typename: "locations",
    geom: string,
    id: string,
    name: string,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  receiverId?: string | null,
  senderId?: string | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    content: string,
    createdAt: string,
    id: string,
    receiverId: string,
    senderId: string,
    status: string,
    updatedAt: string,
    viewedTimeStamp: number,
  } | null,
};

export type OnCreatePostsSubscriptionVariables = {
  filter?: ModelSubscriptionPostsFilterInput | null,
};

export type OnCreatePostsSubscription = {
  onCreatePosts?:  {
    __typename: "posts",
    id: string,
    owner?: string | null,
    published?: boolean | null,
    title: string,
  } | null,
};

export type OnCreateSpatial_ref_sysSubscriptionVariables = {
  filter?: ModelSubscriptionSpatial_ref_sysFilterInput | null,
};

export type OnCreateSpatial_ref_sysSubscription = {
  onCreateSpatial_ref_sys?:  {
    __typename: "spatial_ref_sys",
    auth_name?: string | null,
    auth_srid?: number | null,
    proj4text?: string | null,
    srid: number,
    srtext?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    birthDate?: string | null,
    createdAt: string,
    firstName?: string | null,
    id: string,
    lastName?: string | null,
    owner?: string | null,
    phoneNumber: string,
    profileImage?: string | null,
    profileImageBlurHash?: string | null,
    pushToken?: string | null,
    searchTerm?: string | null,
    type?: UserType | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type OnDeleteCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnDeleteCartSubscription = {
  onDeleteCart?:  {
    __typename: "Cart",
    createdAt: string,
    customer?:  {
      __typename: "Customer",
      createdAt: string,
      id: string,
      name?: string | null,
      updatedAt: string,
    } | null,
    customerId?: string | null,
    id: string,
    items?: Array< string > | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    activeCart?:  {
      __typename: "Cart",
      createdAt: string,
      customerId?: string | null,
      id: string,
      items?: Array< string > | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    name?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteExampleSubscriptionVariables = {
  filter?: ModelSubscriptionExampleFilterInput | null,
};

export type OnDeleteExampleSubscription = {
  onDeleteExample?:  {
    __typename: "Example",
    createdAt: string,
    id: string,
    name: string,
    type: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLocationsSubscriptionVariables = {
  filter?: ModelSubscriptionLocationsFilterInput | null,
};

export type OnDeleteLocationsSubscription = {
  onDeleteLocations?:  {
    __typename: "locations",
    geom: string,
    id: string,
    name: string,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  receiverId?: string | null,
  senderId?: string | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    content: string,
    createdAt: string,
    id: string,
    receiverId: string,
    senderId: string,
    status: string,
    updatedAt: string,
    viewedTimeStamp: number,
  } | null,
};

export type OnDeletePostsSubscriptionVariables = {
  filter?: ModelSubscriptionPostsFilterInput | null,
};

export type OnDeletePostsSubscription = {
  onDeletePosts?:  {
    __typename: "posts",
    id: string,
    owner?: string | null,
    published?: boolean | null,
    title: string,
  } | null,
};

export type OnDeleteSpatial_ref_sysSubscriptionVariables = {
  filter?: ModelSubscriptionSpatial_ref_sysFilterInput | null,
};

export type OnDeleteSpatial_ref_sysSubscription = {
  onDeleteSpatial_ref_sys?:  {
    __typename: "spatial_ref_sys",
    auth_name?: string | null,
    auth_srid?: number | null,
    proj4text?: string | null,
    srid: number,
    srtext?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    birthDate?: string | null,
    createdAt: string,
    firstName?: string | null,
    id: string,
    lastName?: string | null,
    owner?: string | null,
    phoneNumber: string,
    profileImage?: string | null,
    profileImageBlurHash?: string | null,
    pushToken?: string | null,
    searchTerm?: string | null,
    type?: UserType | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type OnUpdateCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnUpdateCartSubscription = {
  onUpdateCart?:  {
    __typename: "Cart",
    createdAt: string,
    customer?:  {
      __typename: "Customer",
      createdAt: string,
      id: string,
      name?: string | null,
      updatedAt: string,
    } | null,
    customerId?: string | null,
    id: string,
    items?: Array< string > | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    activeCart?:  {
      __typename: "Cart",
      createdAt: string,
      customerId?: string | null,
      id: string,
      items?: Array< string > | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    name?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateExampleSubscriptionVariables = {
  filter?: ModelSubscriptionExampleFilterInput | null,
};

export type OnUpdateExampleSubscription = {
  onUpdateExample?:  {
    __typename: "Example",
    createdAt: string,
    id: string,
    name: string,
    type: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLocationsSubscriptionVariables = {
  filter?: ModelSubscriptionLocationsFilterInput | null,
};

export type OnUpdateLocationsSubscription = {
  onUpdateLocations?:  {
    __typename: "locations",
    geom: string,
    id: string,
    name: string,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  receiverId?: string | null,
  senderId?: string | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    content: string,
    createdAt: string,
    id: string,
    receiverId: string,
    senderId: string,
    status: string,
    updatedAt: string,
    viewedTimeStamp: number,
  } | null,
};

export type OnUpdatePostsSubscriptionVariables = {
  filter?: ModelSubscriptionPostsFilterInput | null,
};

export type OnUpdatePostsSubscription = {
  onUpdatePosts?:  {
    __typename: "posts",
    id: string,
    owner?: string | null,
    published?: boolean | null,
    title: string,
  } | null,
};

export type OnUpdateSpatial_ref_sysSubscriptionVariables = {
  filter?: ModelSubscriptionSpatial_ref_sysFilterInput | null,
};

export type OnUpdateSpatial_ref_sysSubscription = {
  onUpdateSpatial_ref_sys?:  {
    __typename: "spatial_ref_sys",
    auth_name?: string | null,
    auth_srid?: number | null,
    proj4text?: string | null,
    srid: number,
    srtext?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    birthDate?: string | null,
    createdAt: string,
    firstName?: string | null,
    id: string,
    lastName?: string | null,
    owner?: string | null,
    phoneNumber: string,
    profileImage?: string | null,
    profileImageBlurHash?: string | null,
    pushToken?: string | null,
    searchTerm?: string | null,
    type?: UserType | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};
