/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCart = /* GraphQL */ `mutation CreateCart(
  $condition: ModelCartConditionInput
  $input: CreateCartInput!
) {
  createCart(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateCartMutationVariables,
  APITypes.CreateCartMutation
>;
export const createCustomer = /* GraphQL */ `mutation CreateCustomer(
  $condition: ModelCustomerConditionInput
  $input: CreateCustomerInput!
) {
  createCustomer(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateCustomerMutationVariables,
  APITypes.CreateCustomerMutation
>;
export const createExample = /* GraphQL */ `mutation CreateExample(
  $condition: ModelExampleConditionInput
  $input: CreateExampleInput!
) {
  createExample(condition: $condition, input: $input) {
    createdAt
    id
    name
    type
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateExampleMutationVariables,
  APITypes.CreateExampleMutation
>;
export const createLocations = /* GraphQL */ `mutation CreateLocations(
  $condition: ModelLocationsConditionInput
  $input: CreateLocationsInput!
) {
  createLocations(condition: $condition, input: $input) {
    geom
    id
    name
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLocationsMutationVariables,
  APITypes.CreateLocationsMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $condition: ModelMessageConditionInput
  $input: CreateMessageInput!
) {
  createMessage(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const createNewLocationWithLongLat = /* GraphQL */ `mutation CreateNewLocationWithLongLat(
  $address: String!
  $id: String!
  $lat: Float!
  $long: Float!
  $name: String!
) {
  createNewLocationWithLongLat(
    address: $address
    id: $id
    lat: $lat
    long: $long
    name: $name
  )
}
` as GeneratedMutation<
  APITypes.CreateNewLocationWithLongLatMutationVariables,
  APITypes.CreateNewLocationWithLongLatMutation
>;
export const createPosts = /* GraphQL */ `mutation CreatePosts(
  $condition: ModelPostsConditionInput
  $input: CreatePostsInput!
) {
  createPosts(condition: $condition, input: $input) {
    id
    owner
    published
    title
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePostsMutationVariables,
  APITypes.CreatePostsMutation
>;
export const createSpatial_ref_sys = /* GraphQL */ `mutation CreateSpatial_ref_sys(
  $condition: ModelSpatial_ref_sysConditionInput
  $input: CreateSpatial_ref_sysInput!
) {
  createSpatial_ref_sys(condition: $condition, input: $input) {
    auth_name
    auth_srid
    proj4text
    srid
    srtext
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSpatial_ref_sysMutationVariables,
  APITypes.CreateSpatial_ref_sysMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const deleteCart = /* GraphQL */ `mutation DeleteCart(
  $condition: ModelCartConditionInput
  $input: DeleteCartInput!
) {
  deleteCart(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCartMutationVariables,
  APITypes.DeleteCartMutation
>;
export const deleteCustomer = /* GraphQL */ `mutation DeleteCustomer(
  $condition: ModelCustomerConditionInput
  $input: DeleteCustomerInput!
) {
  deleteCustomer(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCustomerMutationVariables,
  APITypes.DeleteCustomerMutation
>;
export const deleteExample = /* GraphQL */ `mutation DeleteExample(
  $condition: ModelExampleConditionInput
  $input: DeleteExampleInput!
) {
  deleteExample(condition: $condition, input: $input) {
    createdAt
    id
    name
    type
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteExampleMutationVariables,
  APITypes.DeleteExampleMutation
>;
export const deleteLocations = /* GraphQL */ `mutation DeleteLocations(
  $condition: ModelLocationsConditionInput
  $input: DeleteLocationsInput!
) {
  deleteLocations(condition: $condition, input: $input) {
    geom
    id
    name
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLocationsMutationVariables,
  APITypes.DeleteLocationsMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $condition: ModelMessageConditionInput
  $input: DeleteMessageInput!
) {
  deleteMessage(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const deletePosts = /* GraphQL */ `mutation DeletePosts(
  $condition: ModelPostsConditionInput
  $input: DeletePostsInput!
) {
  deletePosts(condition: $condition, input: $input) {
    id
    owner
    published
    title
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePostsMutationVariables,
  APITypes.DeletePostsMutation
>;
export const deleteSpatial_ref_sys = /* GraphQL */ `mutation DeleteSpatial_ref_sys(
  $condition: ModelSpatial_ref_sysConditionInput
  $input: DeleteSpatial_ref_sysInput!
) {
  deleteSpatial_ref_sys(condition: $condition, input: $input) {
    auth_name
    auth_srid
    proj4text
    srid
    srtext
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSpatial_ref_sysMutationVariables,
  APITypes.DeleteSpatial_ref_sysMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const updateCart = /* GraphQL */ `mutation UpdateCart(
  $condition: ModelCartConditionInput
  $input: UpdateCartInput!
) {
  updateCart(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCartMutationVariables,
  APITypes.UpdateCartMutation
>;
export const updateCustomer = /* GraphQL */ `mutation UpdateCustomer(
  $condition: ModelCustomerConditionInput
  $input: UpdateCustomerInput!
) {
  updateCustomer(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCustomerMutationVariables,
  APITypes.UpdateCustomerMutation
>;
export const updateExample = /* GraphQL */ `mutation UpdateExample(
  $condition: ModelExampleConditionInput
  $input: UpdateExampleInput!
) {
  updateExample(condition: $condition, input: $input) {
    createdAt
    id
    name
    type
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateExampleMutationVariables,
  APITypes.UpdateExampleMutation
>;
export const updateLocations = /* GraphQL */ `mutation UpdateLocations(
  $condition: ModelLocationsConditionInput
  $input: UpdateLocationsInput!
) {
  updateLocations(condition: $condition, input: $input) {
    geom
    id
    name
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLocationsMutationVariables,
  APITypes.UpdateLocationsMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $condition: ModelMessageConditionInput
  $input: UpdateMessageInput!
) {
  updateMessage(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const updatePosts = /* GraphQL */ `mutation UpdatePosts(
  $condition: ModelPostsConditionInput
  $input: UpdatePostsInput!
) {
  updatePosts(condition: $condition, input: $input) {
    id
    owner
    published
    title
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePostsMutationVariables,
  APITypes.UpdatePostsMutation
>;
export const updateSpatial_ref_sys = /* GraphQL */ `mutation UpdateSpatial_ref_sys(
  $condition: ModelSpatial_ref_sysConditionInput
  $input: UpdateSpatial_ref_sysInput!
) {
  updateSpatial_ref_sys(condition: $condition, input: $input) {
    auth_name
    auth_srid
    proj4text
    srid
    srtext
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSpatial_ref_sysMutationVariables,
  APITypes.UpdateSpatial_ref_sysMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
