/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const checkBatchOfPhoneNumbersForActiveUsers = /* GraphQL */ `
  query CheckBatchOfPhoneNumbersForActiveUsers($userIds: [String]) {
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
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
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
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
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
`;
export const getExample = /* GraphQL */ `
  query GetExample($id: ID!) {
    getExample(id: $id) {
      createdAt
      id
      name
      type
      updatedAt
      __typename
    }
  }
`;
export const getLocations = /* GraphQL */ `
  query GetLocations($id: String!) {
    getLocations(id: $id) {
      geom
      id
      name
      __typename
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
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
`;
export const getPosts = /* GraphQL */ `
  query GetPosts($id: String!) {
    getPosts(id: $id) {
      id
      owner
      published
      title
      __typename
    }
  }
`;
export const getSpatial_ref_sys = /* GraphQL */ `
  query GetSpatial_ref_sys($srid: Int!) {
    getSpatial_ref_sys(srid: $srid) {
      auth_name
      auth_srid
      proj4text
      srid
      srtext
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
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
`;
export const listByReceiverIdAndViewedTimeStamp = /* GraphQL */ `
  query ListByReceiverIdAndViewedTimeStamp(
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
`;
export const listBySenderIdAndViewedTimeStamp = /* GraphQL */ `
  query ListBySenderIdAndViewedTimeStamp(
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
`;
export const listByTypeAndName = /* GraphQL */ `
  query ListByTypeAndName(
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
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
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
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
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
`;
export const listEventsWithDecodedLatLong = /* GraphQL */ `
  query ListEventsWithDecodedLatLong {
    listEventsWithDecodedLatLong {
      address
      id
      latitude
      longitude
      name
      __typename
    }
  }
`;
export const listExamples = /* GraphQL */ `
  query ListExamples(
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
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
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
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
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
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
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
`;
export const listSpatial_ref_sys = /* GraphQL */ `
  query ListSpatial_ref_sys(
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
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
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
`;
export const listUsersByPhoneNumber = /* GraphQL */ `
  query ListUsersByPhoneNumber(
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
`;
export const listUsersBySearchTerm = /* GraphQL */ `
  query ListUsersBySearchTerm(
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
`;
