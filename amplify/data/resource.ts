import {
  type ClientSchema,
  a,
  defineData,
  defineFunction,
} from "@aws-amplify/backend";

const adminsAndManagers = (allow: any) => [
  allow.groups(["admin", "projectManager"]),
];

const schema = a.schema({
  // Todo: a
  //   .model({
  //     id: a.id().required(),
  //     name: a.string().required(),
  //     description: a.string(),
  //     completed: a.boolean().required(),
  //   })
  //   .authorization(adminsAndManagers),

  UserBatchResponse: a.customType({
    activeUsers: a.ref("User").array(),
  }),

  checkBatchOfPhoneNumbersForActiveUsers: a
    .query()
    .arguments({
      phoneNumbers: a.string().array(),
    })
    .returns(a.ref("User").array())
    .handler(
      a.handler.custom({
        dataSource: a.ref("User"),
        entry: "./functions/phoneBatchHandler.ts",
      })
    )
    .authorization(adminsAndManagers),

  User: a
    .model({
      id: a.id().required(),
      birthDate: a.string().required(),
      firstName: a.string().required(),
      lastName: a.string().required(),
      username: a.string().required(),
      phoneNumber: a.phone().required(),
      pushToken: a.string(),
      profileImage: a.url(),
      profileImageBlurHash: a.string(),
      searchTerm: a.string().required(),
      type: a.enum(["ADMIN", "USER"]),
      // sentFriendships: a.hasMany("Friendship", "senderId"),
      // receivedFriendships: a.hasMany("Friendship", "receiverId"),
    })
    .secondaryIndexes((index) => [
      index("phoneNumber").queryField("listUsersByPhoneNumber"),
      index("searchTerm").queryField("listUsersBySearchTerm").sortKeys([""]),
    ])
    .authorization((allow) => [allow.owner()]),

  // Friendship: a
  //   .model({
  //     id: a.id().required(),
  //     receiverId: a.id().required(),
  //     receiver: a.belongsTo("User", "receiverId"),
  //     senderId: a.id().required(),
  //     sender: a.belongsTo("User", "senderId"),
  //     // status: a.ref("FriendStatus").required(),
  //   })
  //   .authorization((allow) => [allow.publicApiKey()])
  //   .secondaryIndexes((index) => [
  //     index("senderId")
  //       .name("bySender")
  //       .sortKeys(["receiverId"])
  //       .queryField("listFriendshipsBySenderId"),
  //     index("receiverId")
  //       .name("byReceiver")
  //       .sortKeys(["senderId"])
  //       .queryField("listFriendshipsByReceiverId"),
  //   ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  name: "MyLibrary",
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
