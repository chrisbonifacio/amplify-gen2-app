/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const checkBatchOfPhoneNumbersForActiveUsers = /* GraphQL */ `query CheckBatchOfPhoneNumbersForActiveUsers($userIds: [String]) {
  checkBatchOfPhoneNumbersForActiveUsers(userIds: $userIds) {
    birthDate
    createdAt
    firstName
    id
    lastName
    owner
    phoneNumber
    profileImage
    profileImageBlurHash
    pushToken
    searchTerm
    type
    updatedAt
    username
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CheckBatchOfPhoneNumbersForActiveUsersQueryVariables,
  APITypes.CheckBatchOfPhoneNumbersForActiveUsersQuery
>;
export const getCart = /* GraphQL */ `query GetCart($id: ID!) {
  getCart(id: $id) {
    createdAt
    customer {
      createdAt
      id
      name
      updatedAt
      __typename
    }
    customerId
    id
    items
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCartQueryVariables, APITypes.GetCartQuery>;
export const getCustomer = /* GraphQL */ `query GetCustomer($id: ID!) {
  getCustomer(id: $id) {
    activeCart {
      createdAt
      customerId
      id
      items
      updatedAt
      __typename
    }
    createdAt
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCustomerQueryVariables,
  APITypes.GetCustomerQuery
>;
export const getExample = /* GraphQL */ `query GetExample($id: ID!) {
  getExample(id: $id) {
    createdAt
    id
    name
    type
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetExampleQueryVariables,
  APITypes.GetExampleQuery
>;
export const getLocations = /* GraphQL */ `query GetLocations($id: String!) {
  getLocations(id: $id) {
    geom
    id
    name
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLocationsQueryVariables,
  APITypes.GetLocationsQuery
>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    content
    createdAt
    id
    receiverId
    senderId
    status
    updatedAt
    viewedTimeStamp
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const getPosts = /* GraphQL */ `query GetPosts($id: String!) {
  getPosts(id: $id) {
    id
    owner
    published
    title
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPostsQueryVariables, APITypes.GetPostsQuery>;
export const getSpatial_ref_sys = /* GraphQL */ `query GetSpatial_ref_sys($srid: Int!) {
  getSpatial_ref_sys(srid: $srid) {
    auth_name
    auth_srid
    proj4text
    srid
    srtext
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSpatial_ref_sysQueryVariables,
  APITypes.GetSpatial_ref_sysQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    birthDate
    createdAt
    firstName
    id
    lastName
    owner
    phoneNumber
    profileImage
    profileImageBlurHash
    pushToken
    searchTerm
    type
    updatedAt
    username
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listByReceiverIdAndViewedTimeStamp = /* GraphQL */ `query ListByReceiverIdAndViewedTimeStamp(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
  $receiverId: String!
  $sortDirection: ModelSortDirection
  $viewedTimeStamp: ModelIntKeyConditionInput
) {
  listByReceiverIdAndViewedTimeStamp(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    receiverId: $receiverId
    sortDirection: $sortDirection
    viewedTimeStamp: $viewedTimeStamp
  ) {
    items {
      content
      createdAt
      id
      receiverId
      senderId
      status
      updatedAt
      viewedTimeStamp
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListByReceiverIdAndViewedTimeStampQueryVariables,
  APITypes.ListByReceiverIdAndViewedTimeStampQuery
>;
export const listBySenderIdAndViewedTimeStamp = /* GraphQL */ `query ListBySenderIdAndViewedTimeStamp(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
  $senderId: String!
  $sortDirection: ModelSortDirection
  $viewedTimeStamp: ModelIntKeyConditionInput
) {
  listBySenderIdAndViewedTimeStamp(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    senderId: $senderId
    sortDirection: $sortDirection
    viewedTimeStamp: $viewedTimeStamp
  ) {
    items {
      content
      createdAt
      id
      receiverId
      senderId
      status
      updatedAt
      viewedTimeStamp
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBySenderIdAndViewedTimeStampQueryVariables,
  APITypes.ListBySenderIdAndViewedTimeStampQuery
>;
export const listByTypeAndName = /* GraphQL */ `query ListByTypeAndName(
  $filter: ModelExampleFilterInput
  $limit: Int
  $name: ModelStringKeyConditionInput
  $nextToken: String
  $sortDirection: ModelSortDirection
  $type: String!
) {
  listByTypeAndName(
    filter: $filter
    limit: $limit
    name: $name
    nextToken: $nextToken
    sortDirection: $sortDirection
    type: $type
  ) {
    items {
      createdAt
      id
      name
      type
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListByTypeAndNameQueryVariables,
  APITypes.ListByTypeAndNameQuery
>;
export const listCarts = /* GraphQL */ `query ListCarts(
  $filter: ModelCartFilterInput
  $limit: Int
  $nextToken: String
) {
  listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      customerId
      id
      items
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListCartsQueryVariables, APITypes.ListCartsQuery>;
export const listCustomers = /* GraphQL */ `query ListCustomers(
  $filter: ModelCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      name
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCustomersQueryVariables,
  APITypes.ListCustomersQuery
>;
export const listEventsWithDecodedLatLong = /* GraphQL */ `query ListEventsWithDecodedLatLong {
  listEventsWithDecodedLatLong {
    address
    id
    latitude
    longitude
    name
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventsWithDecodedLatLongQueryVariables,
  APITypes.ListEventsWithDecodedLatLongQuery
>;
export const listExamples = /* GraphQL */ `query ListExamples(
  $filter: ModelExampleFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listExamples(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      id
      name
      type
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExamplesQueryVariables,
  APITypes.ListExamplesQuery
>;
export const listLocations = /* GraphQL */ `query ListLocations(
  $filter: ModelLocationsFilterInput
  $id: String
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listLocations(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      geom
      id
      name
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLocationsQueryVariables,
  APITypes.ListLocationsQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      content
      createdAt
      id
      receiverId
      senderId
      status
      updatedAt
      viewedTimeStamp
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostsFilterInput
  $id: String
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPosts(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      owner
      published
      title
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const listSpatial_ref_sys = /* GraphQL */ `query ListSpatial_ref_sys(
  $filter: ModelSpatial_ref_sysFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $srid: Int
) {
  listSpatial_ref_sys(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    srid: $srid
  ) {
    items {
      auth_name
      auth_srid
      proj4text
      srid
      srtext
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSpatial_ref_sysQueryVariables,
  APITypes.ListSpatial_ref_sysQuery
>;
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
      birthDate
      createdAt
      firstName
      id
      lastName
      owner
      phoneNumber
      profileImage
      profileImageBlurHash
      pushToken
      searchTerm
      type
      updatedAt
      username
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const listUsersByPhoneNumber = /* GraphQL */ `query ListUsersByPhoneNumber(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $phoneNumber: AWSPhone!
  $sortDirection: ModelSortDirection
) {
  listUsersByPhoneNumber(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    phoneNumber: $phoneNumber
    sortDirection: $sortDirection
  ) {
    items {
      birthDate
      createdAt
      firstName
      id
      lastName
      owner
      phoneNumber
      profileImage
      profileImageBlurHash
      pushToken
      searchTerm
      type
      updatedAt
      username
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUsersByPhoneNumberQueryVariables,
  APITypes.ListUsersByPhoneNumberQuery
>;
export const listUsersBySearchTerm = /* GraphQL */ `query ListUsersBySearchTerm(
  $filter: ModelUserFilterInput
  $id: ModelIDKeyConditionInput
  $limit: Int
  $nextToken: String
  $searchTerm: String!
  $sortDirection: ModelSortDirection
) {
  listUsersBySearchTerm(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    searchTerm: $searchTerm
    sortDirection: $sortDirection
  ) {
    items {
      birthDate
      createdAt
      firstName
      id
      lastName
      owner
      phoneNumber
      profileImage
      profileImageBlurHash
      pushToken
      searchTerm
      type
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
