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
      index("searchTerm").queryField("listUsersBySearchTerm").sortKeys(["id"]),
    ])
    .authorization((allow) => [allow.owner()]),
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
      phoneNumbers: a.string().array(),
    })
    .returns(a.ref("User").array())
    .handler(
      a.handler.custom({
        dataSource: a.ref("User"),
        entry: "./functions/phoneBatchHandler.js",
      })
    )
    .authorization(adminsAndManagers),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  name: "MyLibrary",
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
