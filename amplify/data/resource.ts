import {
  type ClientSchema,
  a,
  defineData,
  defineFunction,
} from "@aws-amplify/backend";

import { schema as generatedSqlSchema } from "./schema.sql";

// Add a global authorization rule
const sqlSchema = generatedSqlSchema
  .authorization((allow) => [allow.publicApiKey(), allow.guest()])
  .addQueries({
    listEventsWithDecodedLatLong: a
      .query()
      // reference custom types added to the schema
      .returns(a.ref("EventWithDecodedCoord").array())
      .handler(
        a.handler.inlineSql(
          `SELECT
            id,
            name,
            address,
            ST_X(geom) AS longitude,
            ST_Y(geom) AS latitude
          FROM locations;`
        )
      )
      .authorization((allow) => [allow.publicApiKey(), allow.guest()]),
    // Define custom types to provide end-to-end typed results
    // for custom queries / mutations
  })
  .addMutations({
    createNewLocationWithLongLat: a
      .mutation()
      .arguments({
        id: a.string().required(),
        lat: a.float().required(),
        long: a.float().required(),
        name: a.string().required(),
        address: a.string().required(),
      })
      .returns(a.json())
      .authorization((allow) => [allow.publicApiKey(), allow.authenticated()])
      .handler(a.handler.sqlReference("./createNewLocationWithLongLat.sql")),
  });

const schema = a.schema({
  // Define custom types to provide end-to-end typed results
  // for custom queries / mutations
  EventWithDecodedCoord: a.customType({
    id: a.string(),
    name: a.string(),
    address: a.string(),
    longitude: a.float(),
    latitude: a.float(),
  }),
  User: a
    .model({
      id: a.id().required(),
      birthDate: a.string(),
      firstName: a.string(),
      lastName: a.string(),
      username: a.string(),
      phoneNumber: a.phone().required(),
      pushToken: a.string(),
      profileImage: a.url(),
      profileImageBlurHash: a.string(),
      searchTerm: a.string(),
      type: a.enum(["ADMIN", "USER"]),
      // sentFriendships: a.hasMany("Friendship", "senderId"),
      // receivedFriendships: a.hasMany("Friendship", "receiverId"),
    })
    .secondaryIndexes((index) => [
      index("phoneNumber").queryField("listUsersByPhoneNumber"),
      index("searchTerm").queryField("listUsersBySearchTerm").sortKeys(["id"]),
    ])
    .authorization((allow) => [allow.owner(), allow.publicApiKey()]),
  Message: a
    .model({
      senderId: a.string().required(),
      receiverId: a.string().required(),
      viewedTimeStamp: a.timestamp().required(),
      content: a.string().required(),
      status: a.string().required(),
      createdAt: a.datetime().required(),
    })
    .authorization((allow) => [
      allow.ownerDefinedIn("senderId"),
      allow.ownerDefinedIn("receiverId").to(["read"]),
    ])
    .secondaryIndexes((index) => [
      index("senderId").sortKeys(["viewedTimeStamp"]),
      index("receiverId").sortKeys(["viewedTimeStamp"]),
    ]),
  checkBatchOfPhoneNumbersForActiveUsers: a
    .query()
    .arguments({
      userIds: a.string().array(),
    })
    .returns(a.ref("User").array())
    .handler(
      a.handler.custom({
        dataSource: a.ref("User"),
        entry: "./functions/phoneBatchHandler.js",
      })
    )
    .authorization((allow) => [
      allow.groups(["admin", "projectManager"]),
      allow.publicApiKey(),
    ]),
  Cart: a
    .model({
      items: a.string().required().array(),
      // 1. Create reference field
      customerId: a.id(),
      // 2. Create relationship field with the reference field
      customer: a.belongsTo("Customer", "customerId"),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  Customer: a
    .model({
      name: a.string(),
      // 3. Create relationship field with the reference field
      //    from the Cart model
      activeCart: a.hasOne("Cart", "customerId"),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  Example: a
    .model({
      id: a.id().required(),
      type: a.string().required(),
      name: a.string().required(),
    })
    .secondaryIndexes((index) => [index("type").sortKeys(["name"])])
    .authorization((allow) => [allow.publicApiKey()]),
});

const combinedSchema = a.combine([schema, sqlSchema]);

export type Schema = ClientSchema<typeof combinedSchema>;

export const data = defineData({
  schema: combinedSchema,
  name: "MyLibrary",
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      description: "API Key authorization",
      expiresInDays: 365,
    },
  },
});
