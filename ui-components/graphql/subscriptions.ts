/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart($filter: ModelSubscriptionCartFilterInput) {
    onCreateCart(filter: $filter) {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onCreateCustomer(filter: $filter) {
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
export const onCreateExample = /* GraphQL */ `
  subscription OnCreateExample($filter: ModelSubscriptionExampleFilterInput) {
    onCreateExample(filter: $filter) {
      createdAt
      id
      name
      type
      updatedAt
      __typename
    }
  }
`;
export const onCreateLocations = /* GraphQL */ `
  subscription OnCreateLocations(
    $filter: ModelSubscriptionLocationsFilterInput
  ) {
    onCreateLocations(filter: $filter) {
      geom
      id
      name
      __typename
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $receiverId: String
    $senderId: String
  ) {
    onCreateMessage(
      filter: $filter
      receiverId: $receiverId
      senderId: $senderId
    ) {
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
export const onCreatePosts = /* GraphQL */ `
  subscription OnCreatePosts($filter: ModelSubscriptionPostsFilterInput) {
    onCreatePosts(filter: $filter) {
      id
      owner
      published
      title
      __typename
    }
  }
`;
export const onCreateSpatial_ref_sys = /* GraphQL */ `
  subscription OnCreateSpatial_ref_sys(
    $filter: ModelSubscriptionSpatial_ref_sysFilterInput
  ) {
    onCreateSpatial_ref_sys(filter: $filter) {
      auth_name
      auth_srid
      proj4text
      srid
      srtext
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
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart($filter: ModelSubscriptionCartFilterInput) {
    onDeleteCart(filter: $filter) {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onDeleteCustomer(filter: $filter) {
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
export const onDeleteExample = /* GraphQL */ `
  subscription OnDeleteExample($filter: ModelSubscriptionExampleFilterInput) {
    onDeleteExample(filter: $filter) {
      createdAt
      id
      name
      type
      updatedAt
      __typename
    }
  }
`;
export const onDeleteLocations = /* GraphQL */ `
  subscription OnDeleteLocations(
    $filter: ModelSubscriptionLocationsFilterInput
  ) {
    onDeleteLocations(filter: $filter) {
      geom
      id
      name
      __typename
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $receiverId: String
    $senderId: String
  ) {
    onDeleteMessage(
      filter: $filter
      receiverId: $receiverId
      senderId: $senderId
    ) {
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
export const onDeletePosts = /* GraphQL */ `
  subscription OnDeletePosts($filter: ModelSubscriptionPostsFilterInput) {
    onDeletePosts(filter: $filter) {
      id
      owner
      published
      title
      __typename
    }
  }
`;
export const onDeleteSpatial_ref_sys = /* GraphQL */ `
  subscription OnDeleteSpatial_ref_sys(
    $filter: ModelSubscriptionSpatial_ref_sysFilterInput
  ) {
    onDeleteSpatial_ref_sys(filter: $filter) {
      auth_name
      auth_srid
      proj4text
      srid
      srtext
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
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart($filter: ModelSubscriptionCartFilterInput) {
    onUpdateCart(filter: $filter) {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onUpdateCustomer(filter: $filter) {
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
export const onUpdateExample = /* GraphQL */ `
  subscription OnUpdateExample($filter: ModelSubscriptionExampleFilterInput) {
    onUpdateExample(filter: $filter) {
      createdAt
      id
      name
      type
      updatedAt
      __typename
    }
  }
`;
export const onUpdateLocations = /* GraphQL */ `
  subscription OnUpdateLocations(
    $filter: ModelSubscriptionLocationsFilterInput
  ) {
    onUpdateLocations(filter: $filter) {
      geom
      id
      name
      __typename
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $receiverId: String
    $senderId: String
  ) {
    onUpdateMessage(
      filter: $filter
      receiverId: $receiverId
      senderId: $senderId
    ) {
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
export const onUpdatePosts = /* GraphQL */ `
  subscription OnUpdatePosts($filter: ModelSubscriptionPostsFilterInput) {
    onUpdatePosts(filter: $filter) {
      id
      owner
      published
      title
      __typename
    }
  }
`;
export const onUpdateSpatial_ref_sys = /* GraphQL */ `
  subscription OnUpdateSpatial_ref_sys(
    $filter: ModelSubscriptionSpatial_ref_sysFilterInput
  ) {
    onUpdateSpatial_ref_sys(filter: $filter) {
      auth_name
      auth_srid
      proj4text
      srid
      srtext
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
